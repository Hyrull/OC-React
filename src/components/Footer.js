import { useState } from 'react'
import '../styles/footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert('Ajoute une arobase mec')
    }
  }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
      <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} onBlur={handleBlur}></textarea>
		</footer>
	)
}

export default Footer