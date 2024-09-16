import type { SVGProps } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="#151617" d="M0 0h20v20H0z" />
    <path fill="#75767A" d="M3 9h14v2H3z" />
  </svg>
);
export default SvgMinus;
