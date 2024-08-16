import React from 'react'

function AccordianItem({ id, title, children, active, onClick }) {
  return (
        <div className="accordion-item">
          <h2 className="accordion-header" id={`flush-heading${id}`}>
            <button
              className={`accordion-button ${active === id ? '' : 'collapsed'}`}
              type="button"
              onClick={() => onClick(id)}
              aria-expanded={active === id}
              aria-controls={`flush-collapse${id}`}
            >
              {title}
            </button>
          </h2>
          <div
            id={`flush-collapse${id}`}
            className={`accordion-collapse collapse ${active === id ? 'show' : ''}`}
            aria-labelledby={`flush-heading${id}`}
            data-bs-parent="#accordionFlushExampleX"
          >
            <div className="accordion-body">{children}</div>
          </div>
        </div>
  )
}

export default AccordianItem