import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 8.207a.5.5 0 0 0-.854-.353l-3.792 3.792a.5.5 0 0 0 0 .708l3.792 3.792a.5.5 0 0 0 .854-.353z"
    />
  </svg>
);
export default SvgArrowLeft;
