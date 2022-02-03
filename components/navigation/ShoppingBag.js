import React from "react"

function ShoppingBag(props) {
  const title = props.title || "bag 17"

  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g>
        <path
          d="M22 2h-20a0.5 0.5 0 0 0-0.5 0.5v19.5a1.5 1.5 0 0 0 1.5 1.5h18a1.5 1.5 0 0 0 1.5-1.5v-19.5a0.5 0.5 0 0 0-0.5-0.5z"
          fill="#6a8c65"
        />
        <path
          d="M12 14.5c-3.03 0-5.5-2.47-5.5-5.5a0.5 0.5 0 1 1 1 0c0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5a0.5 0.5 0 1 1 1 0c0 3.03-2.47 5.5-5.5 5.5z"
          fill="#E6E6E6"
        />
        <path
          d="M20.5 4.5h-17a2 2 0 0 1 0-4h17a2 2 0 0 1 0 4z"
          fill="#d8ccc0"
        />
      </g>
    </svg>
  )
}

export default ShoppingBag
