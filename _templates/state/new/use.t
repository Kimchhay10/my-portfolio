---
to: src/hooks/use<%= Name %>.tsx
---
import { createContext, useContext, useMemo } from 'react'

interface <%= Name %>ContextType {
}

const <%= Name %>Context = createContext<<%= Name %>ContextType>({} as <%= Name %>ContextType)

export function <%= Name %>Provider({ children }: { children: React.ReactNode }): React.ReactElement {
  const memoedValue = useMemo(() => (), [])

  return (
    <<%= Name %>Context.Provider value={memoedValue}>
      {children}
    </<%= Name %>Context.Provider>
  )
}

export default function use<%= Name %>() {
  return useContext(<%= Name %>Context)
}
