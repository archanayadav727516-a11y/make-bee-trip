import React, { useState } from "react";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleAccordion} style={{ cursor: "pointer" }}>
        <h3>Accordion Header</h3>
      </div>
      {isOpen && <p>This is the accordion content!</p>}
    </div>
  );
}

export default Accordion;
