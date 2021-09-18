import React from "react"

export default function ModalBox({ children, closeFunction }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "6%",
        left: "3%",
        background: "var(--background-2)",
        width: "90vw",
        resize: "both",
        overflow: "hidden",
        minWidth: 270,
        maxWidth: "900px",
        minHeight: 100,
      }}
      className="neon-shadow"
    >
      <button
        onClick={closeFunction}
        style={{ padding: "4px 12px", fontFamily: "var(--console-font)" }}
      >
        x CLOSE x
      </button>
      {children}
    </div>
  )
}
