import type { SVGProps } from "react";
const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.207 9.5a.5.5 0 0 0-.353.854l3.792 3.792a.5.5 0 0 0 .708 0l3.792-3.792a.5.5 0 0 0-.353-.854z"
    />
  </svg>
);
export default SvgArrowDropDown;
