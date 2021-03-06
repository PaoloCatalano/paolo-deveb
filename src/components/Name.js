import React, { useEffect, useState } from "react"

export default function Name({ path = "", text = "paolo_deveb" }) {
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

    if (count <= commercialName.length) timer(typing, 60)

    return clearTimeout(timer)
    // eslint-disable-next-line
  }, [name])

  return (
    <h1 className="typed">
      {path || name}&gt;<span className="cursor">_</span>
    </h1>
  )
}
//> = &gt;
