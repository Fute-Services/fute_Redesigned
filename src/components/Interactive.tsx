import AgentStage from './AgentStage'

const QUESTIONS = [
  ['01', 'Why this place?', 'Start with the life, location and point of view.'],
  ['02', 'What suits me?', 'Move through approved spaces, plans and options.'],
  ['03', 'What next?', 'Prepare the next useful sales conversation.'],
] as const

const PATH = [
  ['01', 'Location', 'Begin with context.'],
  ['02', 'Spaces', 'Move into what matters.'],
  ['03', 'Options', 'Compare with clarity.'],
  ['04', 'Next step', 'Make the sales conversation useful.'],
] as const

export default function Interactive() {
  return (
    <section className="interactive reveal-block" id="systems" aria-labelledby="interactive-title">
      <div className="interactive-grid">
        <div>
          <p className="tag" style={{ color: '#151513' }}>
            Interactive decision system
          </p>
          <h2 id="interactive-title">Your next question.</h2>
        </div>
        <div>
          <p className="interactive-lead">
            An AI-guided interface is not a technology showpiece. It is a calm, useful way to explore approved
            project information.
          </p>
          <div className="question-steps">
            {QUESTIONS.map(([number, title, copy]) => (
              <article className="question" key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <AgentStage />

      <div className="path" aria-label="Buyer path">
        {PATH.map(([number, title, copy]) => (
          <div key={number}>
            <b>{number}</b>
            <strong>{title}</strong>
            <span>{copy}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
