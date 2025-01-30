import manageLinearEquation from './algebra/LinearEquation.js';
import bhaskaraEquation from './algebra/BhaskaraEquation.js';
import logarithmSimple from './algebra/LogarithmSimple.js';
import logarithmNatural from './algebra/LogarithmNatural.js';
import conversionDegreesRadians from './angle/ConversorDegreesRadians.js';
import internalAnglePolygon from './angle/InternalAnglePolygon.js';
import sumInternalAnglePolygon from './angle/SumInternalAnglePolygon.js';
import CentralAngleCircle from './angle/CentralAngleCircle.js';

const useMathFunctions = (type, values) => {
  let result;

  switch (type) {
    case 'linear':
      result = manageLinearEquation(values);
      break;
    case 'bhaskara':
      result = bhaskaraEquation(values);
      break;
    case 'logarithmSimple':
      result = logarithmSimple(values);
      break;
    case 'logarithmNatural':
      result = logarithmNatural(values);
      break;
    case 'conversionDegreesRadians':
      result = conversionDegreesRadians(values);
      break;
    case 'internalAnglePolygon':
      result = internalAnglePolygon(values);
      break;
    case 'sumInternalAnglePolygon':
      result = sumInternalAnglePolygon(values);
      break;
    case 'centralAngleCircle':
      result = CentralAngleCircle(values);
      break;
    default:
      console.error('Invalid equation type');
  }
  return result;
};

export default useMathFunctions;
