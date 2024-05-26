import type { SVGProps } from "react";
const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path stroke="#75767A" strokeWidth={1.5} d="m5 5 10 10M15 5 5 15" />
  </svg>
);
export default SvgX;
