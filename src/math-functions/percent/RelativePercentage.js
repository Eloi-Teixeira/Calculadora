const RelativePercentage = (values) => {
  const {
    'input-PercentualRelacao-percentual': percentage,
    'input-PercentualRelacao-valorParte': part,
    'input-PercentualRelacao-valorTotal': total,
  } = values;

  if (percentage === undefined) {
    return [{
      resultName: 'Percentual',
      resultValue: Number(((part / total) * 100).toFixed(2)),
    }]
  }
  if (part === undefined) {
    return [{
      resultName: 'Percentual',
      resultValue: Number(((percentage * total) / 100).toFixed(2)),
    }]
  }
  if (percentage === undefined) {
    return [{
      resultName: 'Percentual',
      resultValue: Number(((part * 100) / percentage).toFixed(2)),
    }]
  }
};

export default RelativePercentage;
