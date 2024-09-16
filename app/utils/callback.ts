type VoidFn = () => Promise<void> | void;
export class CallbackQueue {
  private queue: VoidFn[] = [];
  protected ready;

  constructor(args?: { ready?: boolean }) {
    this.ready = args?.ready ?? false;
  }

  private enqueue(arg: VoidFn) {
    this.queue.push(arg);
  }

  protected flush() {
    this.queue.forEach((v) => v());
  }

  protected runOrEnqueue(fn: VoidFn) {
    if (this.ready) {
      fn();
    } else {
      this.enqueue(fn);
    }
  }
}
