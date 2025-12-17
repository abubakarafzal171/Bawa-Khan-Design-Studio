import React, { useState, useEffect } from 'react'
import Loader from './Loader'

const DelayedLoader = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200) // 200ms delay
    return () => clearTimeout(timer)
  }, [])

  return show ? <Loader /> : null
}

export default DelayedLoader
