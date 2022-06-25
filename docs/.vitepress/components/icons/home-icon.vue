<template>
  <svg viewbox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ef476f" />
        <stop offset="100%" stop-color="#ffd166" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffd166" />
        <stop offset="100%" stop-color="#06d6a0" />
      </linearGradient>
      <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#118ab2" />
        <stop offset="100%" stop-color="#ef476f" />
      </linearGradient>
      <mask id="mask1">
        <g transform="translate(50, 50)">
          <g>
            <animateTransform
              attributeType="XML"
              attributeName="transform"
              type="rotate"
              dur="8s"
              repeatCount="indefinite"
              values="0;90;180;270"
              calcMode="discrete"
            />
            <g transform="translate(-50,-50)">
              <line
                x1="20"
                x2="20"
                y1="20"
                y2="20"
                stroke="#fff"
                stroke-width="20"
                stroke-linecap="round"
              >
                <animate
                  attributeName="x1"
                  values="50;20;20;20;20;50;50;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="x2"
                  values="50;20;80;80;80;80;80;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y1"
                  values="50;20;20;20;20;20;20;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values="50;20;20;20;20;20;20;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  values="40;20;15;15;15;15;15;40;40"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
            </g>
          </g>
        </g>
      </mask>
      <mask id="mask2">
        <g transform="translate(50, 50)">
          <g>
            <animateTransform
              attributeType="XML"
              attributeName="transform"
              type="rotate"
              dur="8s"
              repeatCount="indefinite"
              values="0;90;180;270"
              calcMode="discrete"
            />
            <g transform="translate(-50,-50)">
              <line
                x1="50"
                x2="50"
                y1="50"
                y2="50"
                stroke="#fff"
                stroke-width="20"
                stroke-linecap="round"
              >
                <animate
                  attributeName="x1"
                  values="50;50;50;20;80;80;80;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="x2"
                  values="50;50;50;20;80;80;80;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y1"
                  values="50;50;50;80;80;20;20;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values="50;50;50;80;80;50;50;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  values="40;20;20;20;20;15;15;40;40"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
            </g>
          </g>
        </g>
      </mask>
      <mask id="mask3">
        <g transform="translate(50, 50)">
          <g>
            <animateTransform
              attributeType="XML"
              attributeName="transform"
              type="rotate"
              dur="8s"
              repeatCount="indefinite"
              values="0;90;180;270"
              calcMode="discrete"
            />
            <g transform="translate(-50,-50)">
              <line
                x1="80"
                x2="80"
                y1="80"
                y2="80"
                stroke="#fff"
                stroke-width="20"
                stroke-linecap="round"
              >
                <animate
                  attributeName="x1"
                  values="50;80;80;50;20;20;20;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="x2"
                  values="50;80;80;50;80;80;80;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y1"
                  values="50;80;80;50;80;80;80;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values="50;80;80;50;20;20;20;50;50"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  values="40;20;20;20;15;15;15;40;40"
                  calcMode="spline"
                  keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
            </g>
          </g>
        </g>
      </mask>
    </defs>
    <g>
      <rect
        x="0"
        y="0"
        height="100"
        width="100"
        fill="url(#gradient1)"
        stroke="none"
        mask="url(#mask1)"
      />
      <rect
        x="0"
        y="0"
        height="100"
        width="100"
        fill="url(#gradient2)"
        stroke="none"
        mask="url(#mask2)"
      />
      <rect
        x="0"
        y="0"
        height="100"
        width="100"
        fill="url(#gradient3)"
        stroke="none"
        mask="url(#mask3)"
      />
    </g>
    <g transform="translate(50, 50)">
      <g>
        <animateTransform
          attributeType="XML"
          attributeName="transform"
          type="rotate"
          dur="8s"
          repeatCount="indefinite"
          values="0;90;180;270"
          calcMode="discrete"
        />
        <g transform="translate(-50,-50)">
          <circle cx="50" cy="50" r="4" fill="#030303">
            <animate
              attributeName="cx"
              values="50;80;80;50;50;80;80;50;50"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="50;80;80;50;50;20;20;50;50"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="50" cy="50" r="4" fill="#030303">
            <animate
              attributeName="cx"
              values="50;50;50;20;80;80;80;50;50"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="50;50;50;80;80;20;20;50;50"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="50" cy="50" r="4" fill="#030303">
            <animate
              attributeName="cx"
              values="50;20;20;20;20;80;80;50;50"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="50;20;20;20;20;20;20;50;50"
              calcMode="spline"
              keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </g>
  </svg>
</template>
