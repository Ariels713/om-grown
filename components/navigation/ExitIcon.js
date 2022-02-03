import React from "react"

function ExitIcon(props) {
  const title = props.title || "e remove"

  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#000000" strokeWidth="1">
        <path
          d="M2.99 2.99l17.96 17.96"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.95 2.99l-17.96 17.96"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default ExitIcon
