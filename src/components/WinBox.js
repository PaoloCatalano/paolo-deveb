// import React from "react"
// import WinboxReact from "winbox-react"
// import "winbox-react/dist/index.css"
// import { useGlobalContext } from "../context/context"

// export default function WinBox({
//   children,
//   closeFunction,
//   title = "deveb",
//   className = "",
//   x = "center",
//   y = "center",
//   width = "80%",
//   height = "65%",
//   modal = false,
//   url = "",
// }) {
//   const { count, setCount } = useGlobalContext()

//   React.useEffect(() => {
//     if (count <= 2) {
//       setCount(prevCount => prevCount + 1)
//     }
//   }, [])

//   const options = {
//     // ADDING CUSTOM TITLE
//     title,

//     //ADDING BORDER example:  25px, 1rem, 10%, 3em. If any number is given it will be count as pixels
//     border: "0",

//     //ADDING BACKGROUND COLOR any valid css color code can be used. You also can use gradients.
//     background: "linear-gradient(var(--text) 0%, var(--background-2) 9.3%)",

//     //CUSTOM className
//     className,

//     //CUSTOM POSITION any valid
//     x,
//     y,

//     //CUSTOM SIZE
//     width,
//     height,

//     //LIMIT VIEWPORT
//     top: 50,
//     right: 0,
//     bottom: 0,
//     left: 0,

//     //IS MODAL OR WINDOW (default is false)
//     modal,

//     //EMBED A WEBSITE using the url prop ()
//     url,

//     //USE THE MODERN THEME OF WINBOX
//     modern: false,

//     //onClose EVENT
//     onClose: closeFunction,
//   }

//   return (
//     <>
//       <WinboxReact {...options}>{children}</WinboxReact>
//     </>
//   )
// }
import React from "react"

export default function WinBox({ children, closeFunction }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "5%",
        left: "5%",
        background: "var(--background-2)",
        width: "80vw",
        resize: "both",
        overflow: "hidden",
        minWidth: 270,
        maxWidth: "85vw",
        minHeight: 100,
      }}
      className="neon-shadow"
    >
      <button
        onClick={closeFunction}
        style={{ padding: "4px 12px", fontFamily: "var(--console-font)" }}
      >
        - CLOSE -
      </button>
      {children}
    </div>
  )
}
