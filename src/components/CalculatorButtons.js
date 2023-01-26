import React from "react";

const CalculatorButtons = ({ userInputs, setUserInputs }) => {
  // Obj contain the operations Functions
  const operationFunctions = {
    DEL: () => {
      setUserInputs((lastValue) => {
        if (lastValue.length > 0) return lastValue.slice(0, -1);
        else return lastValue;
      });
    },
    RESET: () => {
      setUserInputs((lastValue) => "");
    },
  };
  // handle the On Click Event
  const handleBtnClick = (el) => {
    if (el.target.tagName === "BUTTON") {
      let btnValue = el.target.innerHTML;
      if (btnValue === "∕") btnValue = "÷";
      // Chick The value of the button
      switch (btnValue) {
        case "DEL":
          operationFunctions.DEL();
          break;
        case "RESET":
          operationFunctions.RESET();
          break;
        case "=":
          let result = "";
          let validOperation = "";

          // to make the not valid operations [÷,×] valid Operration to eval function
          [...userInputs].forEach((el) => {
            if (el === "÷") validOperation += "/";
            else if (el === "×") validOperation += "*";
            else validOperation += el;
          });
          // Chick if the value of the input is valid
          // eslint-disable-next-line no-useless-escape
          if (/^[\d+\-*/×÷\.]+$/.test(validOperation)) {
            try {
              // eslint-disable-next-line no-eval
              result = eval(validOperation);
              if (Number.isInteger(result)) result = result.toString();
              else result = result.toFixed(2);
            } catch {
              result = "invalid Operation";
            }
            setUserInputs(() => result);
          } else setUserInputs(() => "invalid Operation");
          break;
        default:
          // if the value of the button is number save it to the state
          setUserInputs((lastValue) => (lastValue += btnValue));
          break;
      }
    }
  };

  return (
    <section className="calculator-keypad" role="grid" onClick={handleBtnClick}>
      <div className="keypad-num-operations" role="rowgroup">
        <button className="number-btn" role="gridcell" aria-label="7">
          7
        </button>
        <button className="number-btn" role="gridcell" aria-label="8">
          8
        </button>
        <button className="number-btn" role="gridcell" aria-label="9">
          9
        </button>
        <button
          className="operation-btn del-reset-btn"
          role="gridcell"
          aria-label="Delete"
        >
          DEL
        </button>
        {/* ------------------------------------------------------------------------ */}
        <button className="number-btn" role="gridcell" aria-label="4">
          4
        </button>
        <button className="number-btn" role="gridcell" aria-label="5">
          5
        </button>
        <button className="number-btn" role="gridcell" aria-label="6">
          6
        </button>
        <button className="operation-btn" role="gridcell" aria-label="add">
          +
        </button>
        {/* ------------------------------------------------------------------------ */}
        <button className="number-btn" role="gridcell" aria-label="1">
          1
        </button>
        <button className="number-btn" role="gridcell" aria-label="2">
          2
        </button>
        <button className="number-btn" role="gridcell" aria-label="3">
          3
        </button>
        <button className="operation-btn" role="gridcell" aria-label="subtract">
          -
        </button>
        {/* ------------------------------------------------------------------------ */}
        <button className="number-btn" role="gridcell" aria-label=".">
          .
        </button>
        <button className="number-btn" role="gridcell" aria-label="0">
          0
        </button>
        <button className="operation-btn" role="gridcell" aria-label="divide">
          &#8725;
        </button>
        <button className="operation-btn" role="gridcell" aria-label="multiply">
          &#215;
        </button>
        {/* ------------------------------------------------------------------------ */}
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className="operations-group" role="group">
        <button className="operation-btn del-reset-btn" aria-label="Reset">
          RESET
        </button>
        <button className="operation-btn equal-btn" aria-label="Equal">
          =
        </button>
      </div>
    </section>
  );
};

export default CalculatorButtons;
