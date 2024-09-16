import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="#75767A" d="M2.5 9h15v2h-15z" />
    <path fill="#75767A" d="M11 2.5v15H9v-15z" />
  </svg>
);
export default SvgPlus;
