import { Select,Input,Button } from 'antd';
import {useState} from "react";
import kebuke from "../json/kebuke.json";
import fiftylan from "../json/50lan"; 
import milkshop from "../json/milkshop.json";
import macu from "../json/macu.json";
import chingshin from "../json/chingshin.json";
export default function AddComment() {
    
    const { Option } = Select;
    const provinceData = ['可不可熟成紅茶', '五十嵐',"麻古茶坊","迷克夏","清心福全"];
    const [cities, setCities] = useState(kebuke);
    const [secondCity, setSecondCity] = useState(kebuke.name);
    const handleProvinceChange = value => {
      console.log(value);
        switch (value){
          case "可不可熟成紅茶":
            console.log("kbk");
            setCities(kebuke);
            setSecondCity(kebuke.name);
            break;
          case "五十嵐":
            console.log("50");
            setCities(fiftylan);
            setSecondCity(fiftylan.name);
            break;
          case "麻古茶坊":
            console.log("macu");
            setCities(macu);
            setSecondCity(macu.name);
            break;
          case "迷克夏":
            console.log("milk");
            setCities(milkshop);
            setSecondCity(milkshop.name);
            break;
          case "清心福全":
            console.log("ching");
            setCities(chingshin);
            setSecondCity(chingshin.name);
            break;
          
        }

       
      };
    
      const onSecondCityChange = value => {
        setSecondCity(value);
      };
    // console.log(cityData);
    console.log(cities);
    return(
        <>
            <div class="comment-add">
                <img class="comment-add-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEZZf3-Qc1z5MtboZNbXh-EcVyYQcMyWEbQ&usqp=CAU"/>
                <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select defaultValue="請選擇飲料" style={{ width: 120 }} onChange={onSecondCityChange}>
        {cities.map(city => (
          
          <Option key={city.name}>{city.name}</Option>
        ))}
      </Select>
      <img src="https://image.flaticon.com/icons/png/128/1837/1837512.png" class="comment-add-icon"/>
      <Input placeholder="寫點評論..." className="comment-input"/>
      <Button className="comment-publish">發布</Button>
            </div>
            
        </>
    );
}