import React from "react";

// type
type IPropType = {
  id:string;
  title:string;
  desc:string;
  isShow?:boolean;
  parent:string;
  cls?:string;
}

const FaqItem = ({id,title,isShow,desc,parent,cls}:IPropType) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${cls?cls:''} ${isShow?'':'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={isShow?'true':'false'}
          aria-controls={`collapse-${id}`}
        >
          {title}
        </button>
      </div>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isShow?'show':''}`}
        aria-labelledby={`heading-${id}`}
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">
          <p>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
