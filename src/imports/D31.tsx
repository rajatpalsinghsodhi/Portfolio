import svgPaths from "./svg-piew9x55df";
import { imgGroup } from "./svg-38fbk";

function Group() {
  return (
    <div className="absolute inset-[-77.16%_-105.17%_-81.47%_-101.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[76.137px_60.672px] mask-size-[57.105px_54.129px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-9.43%_-0.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 213 213">
          <g id="Group">
            <path d="M1 17V195.448H179.448L1 17Z" fill="url(#paint0_linear_17_1852)" id="Vector" />
            <path d={svgPaths.pdb2cd40} fill="url(#paint1_linear_17_1852)" id="Vector_2" />
            <path d="M17.6552 17L196.103 195.448" id="Vector_3" stroke="url(#paint2_linear_17_1852)" strokeWidth="47.5862" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_1852" x1="81.3017" x2="106.879" y1="115.741" y2="141.319">
              <stop stopColor="#F9A03C" />
              <stop offset="1" stopColor="#F7974E" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_17_1852" x1="103.905" x2="141.379" y1="71.7242" y2="109.198">
              <stop stopColor="#B84E51" />
              <stop offset="1" stopColor="#F68E48" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_17_1852" x1="78.3276" x2="128.888" y1="76.4828" y2="127.638">
              <stop stopColor="#F26D58" />
              <stop offset="1" stopColor="#F9A03C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[10.78%_8.62%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function D31() {
  return (
    <div className="relative size-full" data-name="d3 1">
      <ClipPathGroup />
    </div>
  );
}