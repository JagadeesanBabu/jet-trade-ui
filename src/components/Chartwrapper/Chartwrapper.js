
import './ChartWrapper.css';
import { buildChart } from "../builders/builderChart";

export const Chartwrapper = (props) => {
    const {data, type} = props;
    console.log(`The type is ${type} and Data is ${data}`);
    return buildChart(data, type)
}

export default Chartwrapper;