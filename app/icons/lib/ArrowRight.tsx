import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#515256"
      d="M9.5 15.793a.5.5 0 0 0 .854.353l3.792-3.792a.5.5 0 0 0 0-.708l-3.792-3.792a.5.5 0 0 0-.854.353z"
    />
  </svg>
);
export default SvgArrowRight;
