const RadicationWithIndex = (values) => {
  const {
    'input-RaizComIndice-indice': indice,
    'input-RaizComIndice-radicando': radicando,
    'input-RaizComIndice-resultado': resultado,
  } = values;

  if (indice && radicando && !resultado) {
    return [{ resultName: 'r', resultValue: Math.pow(radicando, 1 / indice) }];
  } else if (indice && !radicando && resultado) {
    return [{ resultName: 'x', resultValue: Math.pow(resultado, indice) }];
  } else if (!indice && radicando && resultado) {
    return [
      {
        resultName: 'n',
        resultValue: Number(
          (Math.log(resultado) / Math.log(radicando)).toFixed(2),
        ),
      },
    ];
  } else {
    console.error('invalid input');
  }
};

export default RadicationWithIndex;
