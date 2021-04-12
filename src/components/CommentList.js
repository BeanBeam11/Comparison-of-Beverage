import { Select } from 'antd';
import {useState} from "react";
import kek from "../json/kebuke.json";
export default function CommentList() {
    const { Option } = Select;
    const provinceData = ['可不可熟成紅茶', '五十嵐',"麻古茶坊","迷克夏","清心福全"];
    const cityData = {
    可不可熟成紅茶: {kek},
      
    };
    const [cities, setCities] = useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
    const handleProvinceChange = value => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
      };
    
      const onSecondCityChange = value => {
        setSecondCity(value);
      };
    console.log(cityData[provinceData[0]]);
    console.log(cities)
    return(
        <>
            {/* <div class="comment-add">
                <img class="comment-add-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEZZf3-Qc1z5MtboZNbXh-EcVyYQcMyWEbQ&usqp=CAU"/>
                <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
            </div> */}
        </>
    );
}