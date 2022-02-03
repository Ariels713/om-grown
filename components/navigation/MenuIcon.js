import React from "react"

function MenuIcon(props) {
  const title = props.title || "MenuIcon"

  return (
    <svg
      height="32"
      width="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        fill="#000000"
        stroke="#000000"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" x1="2" x2="30" y1="16" y2="16" />
        <line fill="none" stroke="#000000" x1="2" x2="30" y1="7" y2="7" />
        <line fill="none" stroke="#000000" x1="2" x2="30" y1="25" y2="25" />
      </g>
    </svg>
  )
}

export default MenuIcon
