export function usePseudoRandom(key: string, optionCount: number, memorySize = 3): number {
  const fallbackRandom = Math.floor(Math.random() * optionCount)
  if (!import.meta.client) {
    // Running on server - just pick random index
    return fallbackRandom
  }

  const storageKey = `storedRandom:${key}`
  
  try {
    const raw = localStorage.getItem(storageKey)
    
    let parsed: unknown = []
    if(raw !== null) {
      parsed = JSON.parse(raw)
    }

    if (!Array.isArray(parsed)){ return fallbackRandom }
      
    const history: number[] = parsed.filter(
      (val) => typeof val === 'number'
    )
  
    const available = []

    for ( let optionIndex = 0; optionIndex < optionCount; optionIndex++) {
      if(!history.includes(optionIndex)) {
        available.push(optionIndex)
      }
    }

    // Select an index
    const selected = available.length === 0
      ? Math.floor(Math.random() * optionCount)
      : available[Math.floor(Math.random() * available.length)]

    history.push(selected)

    // We just want to make sure we don't see it in the last (memorySize) choices
    if (history.length > memorySize) {
      history.splice(0, history.length - memorySize)
    }

    localStorage.setItem(storageKey, JSON.stringify(history))
    return selected
  } catch {
    return fallbackRandom
  }
}