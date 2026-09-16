'use client'

import { useAgent } from './AgentProvider'

const CHOICES = [
  ['location', 'Why this place?'],
  ['spaces', 'What suits me?'],
  ['next', 'What next?'],
] as const

export default function AgentStage() {
  const { answer, setAnswerKey } = useAgent()

  return (
    <div className="agent-stage" aria-label="FUTÉ AI guided interface concept">
      <div className="agent-glass">
        <div className="agent-glass-top">
          <span>FUTÉ AI / concept prototype</span>
          <i className="agent-status">
            <b></b> online
          </i>
        </div>
        <div className="agent-orb" aria-hidden="true">
          <span></span>
        </div>
        <p className="agent-question">What would you like to understand first?</p>
        <div className="agent-choices">
          {CHOICES.map(([key, label]) => (
            <button key={key} type="button" onClick={() => setAnswerKey(key)}>
              {label}
            </button>
          ))}
        </div>
        <p className="agent-response" aria-live="polite">
          {answer}
        </p>
      </div>
      <p className="agent-stage-note">
        AI-guided interface / concept
        <br />
        Functions, data rules and production status require project approval.
      </p>
    </div>
  )
}
