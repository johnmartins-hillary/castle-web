import { useState } from "react";

const FAQComponent = ({ question, answer }: any) => {
  const [showAnswer, setShowAnswer] = useState<boolean>();

  return (

    <>
      <div  onClick={() => {
                setShowAnswer(!showAnswer);
              }} className={`w-full ${showAnswer ? "h-[331px] md:h-[307px] lg:h-[358px] " : "auto"}  cursor-pointer  md:w-[600px] lg:w-[1149px] bg-white rounded-[38px]  shadow-xl mb-[48px] px-[32px] py-[24px]`}>
        <div className="w-full flex items-center justify-between">
          <div className="w-[100%] flex items-baseline justify-start gap-[6px] ">
            <span
              onClick={() => {
                setShowAnswer(!showAnswer);
              }}
              className="text-center  font-bold text-[32px] m-0 p-0 cursor-pointer "
            >
              {showAnswer ? "-" : "+"}
            </span>
            <p className=" text-[18px] font-light leading-[25px] m-0 p-0 lg:text-[32px]  cursor-pointer ">
              {question}
            </p>
          </div>
        </div>

        {showAnswer && (
          <div className="w-full mt-[41px] md:mt-[38px] ">
            <p className=" text-[14px] font-light leading-[20px] lg:text-[20px] cursor-pointer ">{answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQComponent;
