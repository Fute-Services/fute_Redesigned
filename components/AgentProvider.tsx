'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { AGENT_ANSWERS } from './media'

type AgentContextValue = {
  answer: string
  setAnswerKey: (key: string) => void
}

const AgentContext = createContext<AgentContextValue>({
  answer: AGENT_ANSWERS.location,
  setAnswerKey: () => {},
})

export function useAgent() {
  return useContext(AgentContext)
}

export function AgentProvider({ children }: { children: React.ReactNode }) {
  const [answer, setAnswer] = useState(AGENT_ANSWERS.location)
  const setAnswerKey = useCallback((key: string) => {
    setAnswer(AGENT_ANSWERS[key] ?? AGENT_ANSWERS.location)
  }, [])
  const value = useMemo(() => ({ answer, setAnswerKey }), [answer, setAnswerKey])
  return <AgentContext.Provider value={value}>{children}</AgentContext.Provider>
}
