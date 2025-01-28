import React from 'react';

const FormulaResponse = ({example, inputValues, inputIDs}) => {
  return (
    <div className="formula-response">
      <p className="example">{example}</p>
      <h4>Preencha {inputValues.length} valores</h4>
      <ul>
        {inputValues.map((input, index) => (
          <li key={input + index}>
            <strong>{input}: </strong>
            <input type="number" name="" id={inputIDs &&  inputIDs.length === inputValues.lenght && `input-${inputIDs[index]}`} className="input-value" />
          </li>
        ))}
      </ul>
      <h4>Respostas: </h4>
      <ul>
        {inputValues.map((input, index) => (
          <li key={input + index}>
            <strong>{input}: </strong>
            <span className="result-value" id={`result-${inputIDs && inputIDs.length === inputValues.lenght && inputIDs[index]}`}>
              0
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormulaResponse;
