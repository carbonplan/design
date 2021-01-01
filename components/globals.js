import React from 'react'

const Globals = () => {
  return (
    <style jsx global>
      {`
        body {
          overscroll-behavior: none;
        }

        a {
          text-decoration: none;
        }

        .no-focus-outline a:focus,
        .no-focus-outline button:focus,
        .no-focus-outline input:focus,
        .no-focus-outline select:focus {
          outline: none !important;
        }
      `}
    </style>
  )
}

export default Globals
