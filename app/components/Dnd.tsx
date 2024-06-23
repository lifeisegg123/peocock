import { HTMLArkProps } from "@ark-ui/react";
import {
  DndContext,
  useDroppable,
  useDraggable,
  UseDraggableArguments,
  UseDroppableArguments,
} from "@dnd-kit/core";
import {
  SortableContext,
  UseSortableArguments,
  useSortable,
} from "@dnd-kit/sortable";
import { createContext } from "~/utils/createContext";

type DraggableProps = HTMLArkProps<"button"> & {
  draggableOptions: UseDraggableArguments;
};

const [DraggableContextProvider, useDraggableContext] =
  createContext<ReturnType<typeof useDraggable>>("Draggable");

function Draggable({ draggableOptions, ...props }: DraggableProps) {
  const draggable = useDraggable(draggableOptions);
  const { attributes, listeners, setNodeRef, transform } = draggable;
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <DraggableContextProvider value={draggable}>
      <button
        {...props}
        ref={setNodeRef}
        style={{ ...props.style, ...style }}
        {...listeners}
        {...attributes}
      >
        {props.children}
      </button>
    </DraggableContextProvider>
  );
}

type DroppableProps = HTMLArkProps<"div"> & {
  droppableOptions: UseDroppableArguments;
};

const [DroppableContextProvider, useDroppableContext] =
  createContext<ReturnType<typeof useDroppable>>("Droppable");

function Droppable({ droppableOptions, ...props }: DroppableProps) {
  const droppable = useDroppable(droppableOptions);

  return (
    <DroppableContextProvider value={droppable}>
      <div {...props} ref={droppable.setNodeRef}>
        {props.children}
      </div>
    </DroppableContextProvider>
  );
}

type SortableProps = HTMLArkProps<"li"> & {
  sortableOptions: UseSortableArguments;
};

const [SortableContextProvider, useSortableContext] =
  createContext<ReturnType<typeof useSortable>>("Sortable");

function Sortable({ sortableOptions, ...props }: SortableProps) {
  const sortable = useSortable(sortableOptions);
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;
  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    transition,
  };

  return (
    <SortableContextProvider value={sortable}>
      <li
        {...props}
        ref={setNodeRef}
        style={{ ...style, ...props.style }}
        {...attributes}
        {...listeners}
      >
        {props.children}
      </li>
    </SortableContextProvider>
  );
}

export const DnD = Object.assign(DndContext, {
  Draggable,
  useDraggableContext,
  Droppable,
  useDroppableContext,
  SortableRoot: SortableContext,
  Sortable,
  useSortableContext,
});
