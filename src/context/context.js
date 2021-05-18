import React, { useState, useContext, createContext } from "react"

const GatsbyContext = createContext()

const ContextProvider = ({ children }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isTechOpen, setIsTechOpen] = useState(false)

  return (
    <GatsbyContext.Provider
      value={{
        isAboutOpen,
        setIsAboutOpen,
        isContactOpen,
        setIsContactOpen,
        isTechOpen,
        setIsTechOpen,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(GatsbyContext)
}
export default ContextProvider
