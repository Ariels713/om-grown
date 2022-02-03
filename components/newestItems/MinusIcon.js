import React from "react"

function EDelete(props) {
  const title = props.title || "e delete"

  return (
    <svg
      height="12"
      width="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#000000">
        <path d="M11,7H1A1,1,0,0,1,1,5H11a1,1,0,0,1,0,2Z" fill="#000000" />
      </g>
    </svg>
  )
}

export default EDelete
