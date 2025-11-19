import { useState } from "react";

function MeasureConverter() {
  const [cmValue, setCmValue] = useState("");
  const [inchValue, setInchValue] = useState(null);

  const convert = () => {
    const numberCm = parseFloat(cmValue);

    if (isNaN(numberCm)) {
      setInchValue("Vennligst skriv inn et gyldig tall.");
      return;
    }

    const result = numberCm / 2.54;
    setInchValue(result.toFixed(2));
  };

  return (
    <>
      <input
        type="text"
        value={cmValue}
        onChange={(e) => setCmValue(e.target.value)}
        placeholder="Skriv inn centimeter"
      />

      <button onClick={convert}>Konverter</button>

      {inchValue !== null && (
        <p>Resultat: {inchValue} tommer</p>
      )}
    </>
  );
}

export default MeasureConverter;
