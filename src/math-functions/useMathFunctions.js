import manageLinearEquation from './algebra/LinearEquation.js';
import bhaskaraEquation from './algebra/BhaskaraEquation.js';
import logarithmSimple from './algebra/LogarithmSimple.js';
import logarithmNatural from './algebra/LogarithmNatural.js';
import conversionDegreesRadians from './angle/ConversorDegreesRadians.js';
import internalAnglePolygon from './angle/InternalAnglePolygon.js';
import sumInternalAnglePolygon from './angle/SumInternalAnglePolygon.js';
import CentralAngleCircle from './angle/CentralAngleCircle.js';
import RectangleArea from './geometry/RectangleArea.js';
import PerimeterRectangle from './geometry/PerimeterRectangle.js';
import CircleArea from './geometry/CircleArea.js';
import CirclePerimeter from './geometry/CirclePerimeter.js';
import AreaTriangle from './geometry/AreaTriangle.js';
import PerimeterTriangle from './geometry/PerimeterTriangle.js';
import VolumeCube from './geometry/VolumeCube.js';
import CylinderVolume from './geometry/CylinderVolume.js';
import TotalCylinderArea from './geometry/TotalCylinderArea.js';
import PercentageValue from './percent/PercentageValue.js';
import RelativePercentage from './percent/RelativePercentage.js';

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
    case 'rectangleArea':
      result = RectangleArea(values);
      break;
    case 'perimeterRectangle':
      result = PerimeterRectangle(values);
      break;
    case 'circleArea':
      result = CircleArea(values);
      break;
    case 'circlePerimeter':
      result = CirclePerimeter(values);
      break;
    case 'areaTriangle':
      result = AreaTriangle(values);
      break;
    case 'perimeterTriangle':
      result = PerimeterTriangle(values);
      break;
    case 'volumeCube':
      result = VolumeCube(values);
      break;
    case 'cylinderVolume':
      result = CylinderVolume(values);
      break;
    case 'totalCylinderArea':
      result = TotalCylinderArea(values);
      break;
    case 'percentageValue':
      result = PercentageValue(values);
      break;
    case 'relativePercentage':
      result = RelativePercentage(values);
      break;
    default:
      console.error('Invalid equation type');
  }
  return result;
};

export default useMathFunctions;
