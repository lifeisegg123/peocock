import type { SVGProps } from "react";
const SvgOrderList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#D0D1D3"
      stroke="#ACADAF"
      d="M4.5 7.5V8h1.25v.25H3V8h1.25V3.875H3v-.25h1.25V3h.25zm-.75 9.25h2V17H3v-2a.75.75 0 0 1 .75-.75H5.5V12H3v-.25h2a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-.75.75H3.25v2.25zm6.75-2.5h7.75v.25H10.5zm0-8.75h7.75v.25H10.5z"
    />
  </svg>
);
export default SvgOrderList;
