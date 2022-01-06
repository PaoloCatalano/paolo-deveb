import React from "react"

export default function ModalBox({
  children,
  closeFunction,
  resize = "both",
  top = "6%",
  width = "100%",
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${top}`,
        width: `${width}`,
        zIndex: 9,
      }}
    >
      <div
        style={{
          margin: "1rem auto 5rem auto",
          background: "var(--background-2)",
          width: "90vw",
          resize: `${resize}`,
          overflow: "hidden",
          minWidth: 270,
          maxWidth: "900px",
          minHeight: 100,
        }}
        className="neon-shadow"
      >
        <button onClick={closeFunction} className="close-icon">
          +
        </button>
        {children}
        <div>
          <button
            onClick={closeFunction}
            style={{
              display: "block",
              margin: "0.7rem auto",
              padding: "4px 12px",
              fontFamily: "var(--console-font)",
            }}
          >
            x CLOSE x
          </button>
        </div>
      </div>
    </div>
  )
}
