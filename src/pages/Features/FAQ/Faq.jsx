import {faqs} from './faq.js'
import FAQ from "../../../components/FAQ"
import './Faq.scss'

function FAQs() {
  return (
    <section className='faqs'>
        <h1>FAQ</h1>
        <div className="faqs_wrapper">
          {
            faqs.map(({id,question,answer})=>{
              return <FAQ key={id} question={question} answer={answer}/>
            })
          }
        </div>
    </section>
  )
}

export default FAQs