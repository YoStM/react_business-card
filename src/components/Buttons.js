import React from 'react';

function Buttons() {
  return (
    <div className="buttons">
            <button className="buttons--email">
        <a href="mailto: contact@yohan-saint-martin.fr" className="buttons--link">
                eMail me
        </a>
            </button>
            <button className="buttons--linkedin">
        <a href="https://www.linkedin.com/in/yohan-saint-martin-b7068151/" target="_blank" rel="noopener noreferrer" className="buttons--link">
                LinkedIn
        </a>
            </button>            
    </div>
  )
}

export default Buttons