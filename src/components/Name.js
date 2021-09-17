import React, { useEffect, useState } from "react"

export default function Name({ path = "", text = "paolo_deveb>" }) {
  const commercialName = text
  const letters = [...commercialName]
  const [name, setName] = useState([])
  const [count, setCount] = useState(0)

  function timer(func, timeout) {
    setTimeout(func, timeout)
  }
  useEffect(() => {
    function typing() {
      setCount(prevCount => prevCount + 1)

      setName([...name, letters[count]])
    }

    if (count <= commercialName.length) timer(typing, 100)
    return clearTimeout(timer)
    // eslint-disable-next-line
  }, [name])

  return (
    <h1 style={{ wordBreak: "break-all" }}>
      {path || name}
      <span className="cursor">_</span>
    </h1>
  )
}
//> = &gt;
