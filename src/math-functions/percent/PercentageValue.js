import React from 'react'

const PercentageValue = (values) => {

  const {
    'input-PercentualValor-percentual': percentage,
    'input-PercentualValor-resultado': part,
    'input-PercentualValor-valor': value,
  } = values;

  if (percentage === undefined) {
    return [{
      resultName: 'P%',
      resultValue: Number(((part / value) * 100).toFixed(2)),
    }]
  }
  if (part === undefined) {
    return [{
      resultName: 'P',
      resultValue: Number(((percentage * value) / 100).toFixed(2)),
    }]
  }
  if (value === undefined) {
    return [{
      resultName: 'V',
      resultValue: Number(((part * 100) / percentage).toFixed(2)),
    }]
  }
}

export default PercentageValue
