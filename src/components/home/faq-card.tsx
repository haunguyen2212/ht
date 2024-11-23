import { useState } from "react";

const FAQCard: React.FC<IFAQProps> = ({ targetId, question, answer }) => {
    
    const [isExpanded, setIsExpanded] = useState(false);
      
    const toggleContent = () => {
        setIsExpanded((prev) => !prev);
          const target = document.getElementById('answer-' + targetId);
          if (target) {
            target.style.display = isExpanded ? "none" : "block";
        }
    }

    return (
        <div className="border-b last:border-b-0 border-[#0A071B]/10">
            <button onClick={toggleContent} className="question-btn flex w-full items-start gap-x-5 justify-between text-left text-lg font-bold text-slate-800 focus:outline-none p-5" data-toggle={`answer-${targetId}`}>
                <span>{ question }</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={`mt-1.5 md:mt-0 flex-shrink-0  h-5 w-5 text-[#5B5675] transition-transform ${isExpanded ? "rotate-180" : ""}`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
            </button>
            <div className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium" id={`answer-${targetId}`}
                style={{display: "none"}}>{ answer }
            </div>
      </div>
    )
}

export default FAQCard