import type { SVGProps } from "react";
const SvgBulletList = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.75 5.625a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Zm0 8.75a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Zm4.75-.125h7.75v.25H10.5zm0-8.75h7.75v.25H10.5z"
    />
  </svg>
);
export default SvgBulletList;
