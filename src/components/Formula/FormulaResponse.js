import React from 'react';
import useMathFunctions from '../../math-functions/useMathFunctions';

const FormulaResponse = ({
  example,
  inputIDs = [],
  inputValues = [],
  results,
  type,
  numberExamples,
}) => {
  const [value, setValue] = React.useState({});
  const [isLoading, setisLoading] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [answers, setAnswers] = React.useState(null);

  numberExamples = numberExamples ? numberExamples : inputValues.length - 1;
  const isValid = inputIDs?.length === inputValues?.length;

  results = results ? results : inputValues;

  const valideInput = (e) => {
    const sanitizedInput = e.target.value.replace(/[^0-9.]/g, '');
    e.target.value = sanitizedInput;

    setValue((prev) => {
      if (sanitizedInput === '') {
        delete prev[e.target.name];
        return {
          ...prev,
        };
      }
      return {
        ...prev,
        [e.target.name]: Number(sanitizedInput),
      };
    });
  };

  const showResults = (answers) => {
    setisLoading(false);
    setError(false);
    setAnswers(answers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    if (Object.values(value).length != numberExamples) {
      setisLoading(false);
      setError(true);
    } else {
      const results = useMathFunctions(type, value);
      showResults(results);
    }
  };

  return (
    <form className="formula-response" onSubmit={handleSubmit}>
      <p className="example">{example}</p>
      <h4>
        Preencha {numberExamples} {numberExamples <= 1 ? 'valor' : 'valores'}
      </h4>
      <ul>
        {inputValues.map((input, index) => (
          <li key={input + index}>
            <label htmlFor={`input-${inputIDs[index]}`}>{input}: </label>
            <input
              type="text"
              name={`input-${inputIDs[index]}`}
              id={isValid ? `input-${inputIDs[index]}` : ``}
              className="input-value"
              aria-invalid={!isValid}
              onChange={valideInput}
              autoComplete="off"
            />
          </li>
        ))}
      </ul>
      <h4>Respostas: </h4>
      <ul>
        {results && !answers
          ? results.map((result, index) => (
              <li key={result + index}>
                <strong>{result}: </strong>
                <span
                  className="result-value"
                  id={isValid ? `result-${inputIDs[index]}` : ``}
                >
                  0
                </span>
              </li>
            ))
          : answers.map((answer, index) => (
              <li key={answer.resultName + index}>
                <strong>{answer.resultName}: </strong>
                <span
                  className="result-value"
                  id={isValid ? `result-${inputIDs[index]}` : ``}
                >
                  {`${answer.resultValue}`}
                </span>
              </li>
            ))}
      </ul>
      {isLoading ? (
        <button className="button-calculate" disabled>
          Carregando
          <div className="dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      ) : (
        <button className="button-calculate">Calcular</button>
      )}
      {error && (
        <span className="error">
          Por favor, preencha somente os campos necessários.
        </span>
      )}
    </form>
  );
};

export default FormulaResponse;
