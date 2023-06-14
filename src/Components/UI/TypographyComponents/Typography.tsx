import styles from './styles.module.scss'

const Typography = () => {
  return (
    <main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.outer_card}>
					<ul className={styles.lists}>
						<li>
							<h6 className={styles.heading}>Headings</h6>
							<div className={styles.inner_card}>
								<h1 className={styles.text_1}>h1. Heading text</h1>
								<h2 className={styles.text_2}>h2. Heading text</h2>
								<h3 className={styles.text_3}>h3. Heading text</h3>
								<h4 className={styles.text_4}>h4. Heading text</h4>
								<h5 className={styles.text_5}>h5. Heading text</h5>
								<h6 className={styles.text_6}>h6. Heading text</h6>
							</div>
						</li>
						<li>
							<h6 className={styles.heading}>Inline text elements</h6>
							<div className={styles.inner_card}>

                                <p className={styles.inline_text}>You can use the mark tag to <mark>highlight</mark> text </p>
                                <p className={styles.inline_text}><del>This line of text is meant to be treated as deleted text.</del></p>
                                <p className={styles.inline_text}><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                <p className={styles.inline_text}><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                <p className={styles.inline_text}><u>This line of text will render as underlined.</u></p>
                                <p className={styles.inline_text}><small>This line of text is meant to be treated as fine print.</small></p>
                                <p className={styles.inline_text}><strong>This line rendered as bold text.</strong></p>
                                <p className={styles.inline_text}><em>This line rendered as italicized text.</em></p>
								
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>
  )
}

export default Typography