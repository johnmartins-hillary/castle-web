import {useState} from 'react'

const FAQComponent = ({question, answer}:any) => {
const [showAnswer, setShowAnswer] = useState<boolean>()

  return (
    <div className="w-[600px] bg-white rounded-xl  p-8 shadow-xl">
        {!showAnswer && <div className="flex w-full items-center gap-4  text-black cursor-pointer" onClick={() => setShowAnswer(true)}>
            <span  className="text-[26px] cursor-pointer"><strong>+</strong></span>
            <span className="text-[26px]">{question}</span>
        </div>}
        {showAnswer && <div className="flex w-full items-center gap-4  text-black cursor-pointer" onClick={() => setShowAnswer(false)}>
            <span  className="text-[26px] cursor-pointer"><strong>-</strong></span>
            <span className="text-[20px]">{answer}</span>
        </div>}
        <div className=""></div>
    </div>
  )
}

export default FAQComponent