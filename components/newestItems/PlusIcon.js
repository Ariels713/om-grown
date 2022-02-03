import React from "react"

function EAdd(props) {
  const title = props.title || "e add"

  return (
    <svg
      height="12"
      width="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#000000">
        <path
          d="M11,5H7V1A1,1,0,0,0,5,1V5H1A1,1,0,0,0,1,7H5v4a1,1,0,0,0,2,0V7h4a1,1,0,0,0,0-2Z"
          fill="#000000"
        />
      </g>
    </svg>
  )
}

export default EAdd
