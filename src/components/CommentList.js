import { Select } from 'antd';
import {useState} from "react";
import kebuke from "../json/kebuke.json";
import fiftylan from "../json/50lan"; 
import milkshop from "../json/milkshop.json";
import macu from "../json/macu.json";
import chingshin from "../json/chingshin.json";
export default function CommentList() {
    
    const { Option } = Select;
    const provinceData = ['可不可熟成紅茶', '五十嵐',"麻古茶坊","迷克夏","清心福全"];
    const [cities, setCities] = useState(kebuke);
    const [secondCity, setSecondCity] = useState(kebuke.name);
    const handleProvinceChange = value => {
        switch (value){
          case ("可不可熟成紅茶"):
            setCities(kebuke);
            setSecondCity(kebuke.name);
          case ("五十嵐"):
            setCities(fiftylan);
            setSecondCity(fiftylan.name);
          case ("麻古茶坊"):
            setCities(macu);
            setSecondCity(macu.name);
          case ("迷克夏"):
            setCities(milkshop);
            setSecondCity(milkshop.name);
          case ("清心福全"):
            setCities(chingshin);
            setSecondCity(chingshin.name);
        }

       
      };
    
      const onSecondCityChange = value => {
        setSecondCity(value);
      };
    // console.log(cityData);
    // console.log(cities)
    return(
        <>
            <div class="comment-add">
                <img class="comment-add-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEZZf3-Qc1z5MtboZNbXh-EcVyYQcMyWEbQ&usqp=CAU"/>
                <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select defaultValue="請選擇飲料" style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
        {cities.map(city => (
          
          <Option key={city.name}>{city.name}</Option>
        ))}
      </Select>
            </div>
        </>
    );
}