import React from "react"

/**
 * Invokes the callback when the user presses the specified key
 */
export function useKeyup(key: string, callback: () => void) {
  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyup)
    return () => {
      window.removeEventListener("keyup", handleKeyup)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * The handler which runs whenever a key press event occurs
   */
  function handleKeyup(e: KeyboardEvent) {
    if (e.key === key) {
      callback()
    }
  }
}
