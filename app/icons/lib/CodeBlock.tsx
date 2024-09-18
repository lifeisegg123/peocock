import type { SVGProps } from "react";
const SvgCodeBlock = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.96 10.353.353-.353-.353-.353-3.135-3.14.175-.175L18.668 10 15 13.668l-.175-.175zM2.04 9.647 1.687 10l.353.353 3.134 3.14-.174.175L1.332 10 5 6.332l.174.175zm9.58-5.22L8.616 15.638l-.241-.064 3.004-11.212z"
    />
  </svg>
);
export default SvgCodeBlock;
