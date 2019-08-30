import * as React from 'react';
import th from '../../ui/theme';

const PlayImg = ({
  color = th.colors.white,
  height = '100%',
  width = '100%',
}: {
  color?: string;
  height: string;
  width: string;
}) => (
  <svg width={width} height={height} viewBox="0 0 512 512">
    <g
      id="Welcome"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd">
      <g id="Desktop-HD" transform="translate(-839.000000, -518.000000)">
        <g id="play" transform="translate(839.000000, 518.000000)">
          <circle id="Oval" fill="#000000" cx="244" cy="255" r="185"></circle>
          <polygon
            id="Path"
            fill={color}
            fillRule="nonzero"
            points="211 164.023438 211 347.976562 348.960938 256"></polygon>
          <path
            d="M256,0 C115.390625,0 0,115.390625 0,256 C0,396.609375 115.390625,512 256,512 C396.609375,512 512,396.609375 512,256 C512,115.390625 396.609375,0 256,0 Z M181,404.023438 L181,107.976562 L403.039062,256 L181,404.023438 Z"
            id="Shape"
            fill={color}
            fillRule="nonzero"></path>
        </g>
      </g>
    </g>
  </svg>
);

export default PlayImg;
