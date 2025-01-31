import ManageLinearEquation from './algebra/LinearEquation.js';
import BhaskaraEquation from './algebra/BhaskaraEquation.js';
import LogarithmSimple from './algebra/LogarithmSimple.js';
import LogarithmNatural from './algebra/LogarithmNatural.js';
import ConversionDegreesRadians from './angle/ConversorDegreesRadians.js';
import InternalAnglePolygon from './angle/InternalAnglePolygon.js';
import SumInternalAnglePolygon from './angle/SumInternalAnglePolygon.js';
import CentralAngleCircle from './angle/CentralAngleCircle.js';
import RectangleArea from './geometry/RectangleArea.js';
import RectanglePerimeter from './geometry/RectanglePerimeter.js';
import CircleArea from './geometry/CircleArea.js';
import CirclePerimeter from './geometry/CirclePerimeter.js';
import AreaTriangle from './geometry/AreaTriangle.js';
import PerimeterTriangle from './geometry/PerimeterTriangle.js';
import VolumeCube from './geometry/VolumeCube.js';
import CylinderVolume from './geometry/CylinderVolume.js';
import TotalCylinderArea from './geometry/TotalCylinderArea.js';
import PercentageValue from './percent/PercentageValue.js';
import RelativePercentage from './percent/RelativePercentage.js';
import SquareRoot from './rooting/SquareRoot.js';
import CubicRoot from './rooting/CubicRoot.js';
import RadicationWithIndex from './rooting/RadicationWithIndex.js';
import ForceCalculation from './strength/ForceCalculation.js';
import AverageSpeed from './strength/AverageSpeed.js';
import AverageAcceleration from './strength/AverageAcceleration.js';
import uMotion from './strength/UMotion.js';
import AcceleratedPosition from './strength/AcceleratedPosition.js';
import Weight from './strength/Weight.js';

const mathFunctions = {
  linear: ManageLinearEquation,
  bhaskara: BhaskaraEquation,
  logarithmSimple: LogarithmSimple,
  logarithmNatural: LogarithmNatural,
  conversionDegreesRadians: ConversionDegreesRadians,
  internalAnglePolygon: InternalAnglePolygon,
  sumInternalAnglePolygon: SumInternalAnglePolygon,
  centralAngleCircle: CentralAngleCircle,
  rectangleArea: RectangleArea,
  perimeterRectangle: RectanglePerimeter,
  circleArea: CircleArea,
  circlePerimeter: CirclePerimeter,
  areaTriangle: AreaTriangle,
  perimeterTriangle: PerimeterTriangle,
  volumeCube: VolumeCube,
  cylinderVolume: CylinderVolume,
  totalCylinderArea: TotalCylinderArea,
  percentageValue: PercentageValue,
  relativePercentage: RelativePercentage,
  squareRoot: SquareRoot,
  cubicRoot: CubicRoot,
  radicationWithIndex: RadicationWithIndex,
  forceCalculation: ForceCalculation,
  averageSpeed: AverageSpeed,
  averageAcceleration: AverageAcceleration,
  uam: uMotion,
  acceleratedPosition: AcceleratedPosition,
  weight: Weight
};

const useMathFunctions = (type, values) => {
  const func = mathFunctions[type];

  if (!func) {
    console.error('Invalid equation type');
    return null;
  }

  return func(values);
};


export default useMathFunctions;
