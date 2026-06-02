import React, { useRef, useState } from 'react'
import styles from './Accordion.module.css'

const items = [
	{
		question: 'What is Origins express shipping?',
		answer: 'Express shipping delivers your order within 1-2 business days after it ships.'
	},
	{
		question: 'Do you test products on animals?',
		answer: 'No our products are cruelty-free and never tested on animals.'
	},
	{
		question: 'Are Origins products suitable for all skin types?',
		answer: 'Origins products are carefully formulated to be gentle and effective for all skin types, including sensitive skin. We use natural, non-irritating ingredients that nourish and protect your skin.'
	},
	{
		question: 'How do I apply a serum correctly?',
		answer: 'Apply a few drops to cleansed skin, gently press in, and follow with moisturizer.'
	}
]

export default function Accordion() {
	const [openIndex, setOpenIndex] = useState(null)
	const panelsRef = useRef([])

	function toggle(i) {
		setOpenIndex(prev => (prev === i ? null : i))
	}

	function onKeyDown(e, i) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			toggle(i)
		}
	}

	return (
		<div className={styles.accordion}>
			{items.map((it, i) => (
				<div className={styles.item} key={i}>
					<button
						className={styles.header}
						aria-expanded={openIndex === i}
						aria-controls={`panel-${i}`}
						id={`accordion-${i}`}
						onClick={() => toggle(i)}
						onKeyDown={(e) => onKeyDown(e, i)}
					>
						<span>{it.question}</span>
						<span className={styles.symbol}>{openIndex === i ? '−' : '+'}</span>
					</button>

					<div
						id={`panel-${i}`}
						role="region"
						aria-labelledby={`accordion-${i}`}
						ref={el => (panelsRef.current[i] = el)}
						className={`${styles.panel} ${openIndex === i ? styles.open : ''}`}
						style={{ maxHeight: openIndex === i && panelsRef.current[i] ? panelsRef.current[i].scrollHeight + 'px' : '0px' }}
					>
						<div className={styles.panelInner}>{it.answer}</div>
					</div>
				</div>
			))}
		</div>
	)
}

