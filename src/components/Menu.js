import {Select} from 'antd'
import Compare from '../pages/Compare';
const {Option} =Select;
function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }
  export default function Menu(){
    return(
        <Select
        className="comparison-select"
        labelInValue
        defaultValue={{ value: 'kebuke' }}
        style={{ width: 250 }}
        onChange={handleChange}
      >
        <Option value="kebuke">可不可熟成紅茶</Option>
        <Option value="50Lan">五十嵐</Option>
        <Option value="macu">麻古茶坊</Option>
        <Option value="milkshop">迷克夏</Option>
        <Option value="Ching-Shin">清心福全</Option>
      </Select>
    );
}
 