import React from "react";

const CalculatorScreen = ({ userInputs }) => {
  return (
    <section className="calculator-screen">
      <input type="text" name="calculator-numbers" readOnly={true} value={userInputs}/>
    </section>
  );
};

export default CalculatorScreen;
