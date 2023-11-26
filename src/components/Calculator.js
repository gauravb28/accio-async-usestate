import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleClick = (e) => {
    setShow(true);

    if (!num1 || num1 === '') {
      setError(true);
      setErrorMsg('Please enter Num1');
    } else if (!num2 || num2 === '') {
      setError(true);
      setErrorMsg('Please enter Num2');
    } else if (isNaN(num1)) {
      setError(true);
      setErrorMsg('Num1 should be a number');
    } else if (isNaN(num2)) {
      setError(true);
      setErrorMsg('Num2 should be a number');
    } else if (e.target.classList.contains('divide') && +num2 === 0) {
      setError(true);
      setErrorMsg('Cannot divide by 0');
    } else {
      if (e.target.classList.contains('add')) {
        setResult(+num1 + parseFloat(num2));
      } else if (e.target.classList.contains('subtract')) {
        setResult(+num1 - parseFloat(num2));
      } else if (e.target.classList.contains('multiply')) {
        setResult(+num1 * parseFloat(num2));
      } else {
        setResult(+num1 / parseFloat(num2));
      }
      setError(false);
      setErrorMsg('');
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          id="num1"
          name="num1"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          id="num2"
          name="num2"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="buttons">
        <div className="btn add" onClick={handleClick}>
          +
        </div>
        <div className="btn subtract" onClick={handleClick}>
          -
        </div>
        <div className="btn multiply" onClick={handleClick}>
          *
        </div>
        <div className="btn divide" onClick={handleClick}>
          /
        </div>
      </div>
      {show && (
        <>
          <div className={error ? 'error' : 'result'}>
            {error ? 'Error' : 'Success'}
          </div>
          <div>
            {error ? (
              <div className="error">{errorMsg}</div>
            ) : (
              <div className="result">The result is {result}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Calculator;
