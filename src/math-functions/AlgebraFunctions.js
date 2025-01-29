import manageLinearEquation from './algebra/LinearEquation';
import bhaskaraEquation from './algebra/BhaskaraEquation';
import logarithmSimple from './algebra/logarithmSimple';
import logarithmNatural from './algebra/logarithmNatural.js';

const useAlgebraFunctions = () => {
  const manageEquations = (type, values) => {
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
      default:
        console.error('Invalid equation type');
    }
    return result;
  };

  return {
    manageEquations,
  };
};

export default useAlgebraFunctions;
