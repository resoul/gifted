import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const Star: React.FC<IconProps> = (props) => (
  <svg
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 -0.5 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Vivid.JS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Vivid-Icons" transform="translate(-903.000000, -411.000000)" fill={props.color || "currentColor"}>
        <g id="Icons" transform="translate(37.000000, 169.000000)">
          <g id="star" transform="translate(858.000000, 234.000000)">
            <g transform="translate(7.000000, 8.000000)" id="Shape">
              <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);