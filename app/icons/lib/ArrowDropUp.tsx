import type { SVGProps } from "react";
const SvgArrowDropUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.207 14.5a.5.5 0 0 1-.353-.854l3.792-3.792a.5.5 0 0 1 .708 0l3.792 3.792a.5.5 0 0 1-.353.854z"
    />
  </svg>
);
export default SvgArrowDropUp;
