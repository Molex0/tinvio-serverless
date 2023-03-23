import minus from '../assets/FAQ/minus.svg'
import plus from '../assets/FAQ/plus.svg'
import { useState } from "react"

const FAQ = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing]=useState(false)


  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div className='question_btn'>
            <h4>{question}</h4>
            <button className="faq_btn">
            {         
                isAnswerShowing ? <img src={minus} alt="" />:<img src={plus} alt="" />
            }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ