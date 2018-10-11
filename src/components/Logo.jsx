import React from 'react'
import '../styles/App'

const Logo = ({ style }) => (
  <svg viewBox="0 0 600 600" style={style}>
    <defs>
      <rect x="0" y="0" width="649" height="621" />
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-24.000000, -11.000000)">
        <g>
          <mask fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <g />
          <g mask="url(#mask-2)">
            <g transform="translate(24.000000, 11.000000)">
              <circle
                fill="#000000"
                fillRule="nonzero"
                cx="300"
                cy="300"
                r="300"
              />
              <text
                fill="none"
                fontFamily="BrushtipTravis, brushtipTravis"
                fontSize="355"
                fontWeight="normal"
              >
                <tspan x="10.11" y="394" fill="#FFFFFF">
                  JB
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default Logo
