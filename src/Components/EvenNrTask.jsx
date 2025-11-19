import React, { useState } from "react";

function IsEven() {
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState(null);


  const checkEven = () => {    
    const number = parseInt(inputValue, 10);
    if (isNaN(number)) {
      setResultMessage("Vennligst skriv inn et gyldig tall.");
      return;
    }
    setResultMessage(number % 2 === 0 ? "Tallet er partall." : "Tallet er oddetall.");
    };
  return(
    <>
        <input type="text" value={inputValue} onChange={e =>setInputValue(e.target.value)} placeholder="Skriv inn et tall" />
        <button onClick={checkEven}>Sjekk</button>
        {resultMessage && <p>{resultMessage}</p>}
    </>

  );
}
export default IsEven;