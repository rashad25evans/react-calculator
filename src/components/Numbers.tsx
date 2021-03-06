import * as React from "react";
import { useCallback, useEffect } from 'react';
import { useStoreActions } from '../hooks';

const Numbers: React.FC = () => {
  const numbers = useStoreActions(actions => actions.buttons.numbers);
  const decimal = useStoreActions(actions => actions.buttons.decimal);
  const keys = useStoreActions(actions => actions.buttons.keyPress);


  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  // Keyboard interaction
  const handleKeyPress = useCallback((e) => {
    const value = e.key
    keys(value);
  }, [keys]);

  // Numbers
  const handleNumbers = useCallback((e) => {
    const value = e.target.value
    numbers(value);
  }, [numbers]);

  // Decimal
  const handleDecimal = useCallback(() => {
    decimal("");
  }, [decimal]);


  return (
    <div className="numbers-item">
      <button id="seven" onClick={handleNumbers} value="7">
        7
      </button>
      <button id="eight" onClick={handleNumbers} value="8">
        8
      </button>
      <button id="nine" onClick={handleNumbers} value="9">
        9
      </button>
      <button id="four" onClick={handleNumbers} value="4">
        4
      </button>
      <button id="five" onClick={handleNumbers} value="5">
        5
      </button>
      <button id="six" onClick={handleNumbers} value="6">
        6
      </button>
      <button id="one" onClick={handleNumbers} value="1">
        1
      </button>
      <button id="two" onClick={handleNumbers} value="2">
        2
      </button>
      <button id="three" onClick={handleNumbers} value="3">
        3
      </button>
      <button id="zero" onClick={handleNumbers} value="0">
        0
    </button>
      <button id="decimal" onClick={handleDecimal} value=".">
        .
      </button>
    </div>
  );
};

export default Numbers;
