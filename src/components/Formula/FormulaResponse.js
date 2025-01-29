import React from 'react';

const FormulaResponse = ({
  example,
  inputIDs = [],
  inputValues = [],
  results,
}) => {
  const [value, setValue] = React.useState({});
  const [isLoading, setisLoading] = React.useState(0);
  const [error, setError] = React.useState(false);
  const numberExamples = inputValues.length - 1;
  const isValid = inputIDs?.length === inputValues?.length;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
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
            />
          </li>
        ))}
      </ul>
      {error && (
        <span className="error">
          Por favor, preencha somente os campos necessários.
        </span>
      )}
      <h4>Respostas: </h4>
      <ul>
        {!results
          ? inputValues.map((input, index) => (
              <li key={input + index}>
                <strong>{input}: </strong>
                <span
                  className="result-value"
                  id={`result-${
                    inputIDs &&
                    inputIDs.length === inputValues.lenght &&
                    inputIDs[index]
                  }`}
                >
                  0
                </span>
              </li>
            ))
          : results.map((result, index) => (
              <li key={result + index}>
                <strong>{result}: </strong>
                <span
                  className="result-value"
                  id={`result-${
                    inputIDs &&
                    inputIDs.length === inputValues.lenght &&
                    inputIDs[index]
                  }`}
                >
                  0
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
    </form>
  );
};

export default FormulaResponse;
