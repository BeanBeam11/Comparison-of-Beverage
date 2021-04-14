import React from 'react';
import {Button,BackTop,Carousel} from 'antd'
import { Link } from "react-router-dom";



export default function HomeContent(){
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
    return(
        <> 
        <div className="swiper">
        
              <img className="swiper-img" src="https://i.beauty321.com/816x/https://il.beauty321.com/gallery/gallery/39553/photo-6062a39ac142e.jpg"/>
              
              
              
              <img className="swiper-img" src="http://www.maculife.com.tw/upload/banner/images/220210317141941.JPG"/>
            
             
              <img className="swiper-img" src="https://www.milkshoptea.com/upload/image/%E8%8D%89%E8%8E%93A4-%E4%B8%8B%E8%A8%82%E7%94%A8-%E8%BD%89.jpg"/>
           
            
              <img className="swiper-img" src="https://www.chingshin.tw/upload/image/20210323product001.jpg"/>
    
            
              <img className="swiper-img"src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/p843x403/32498190_1630464020406963_2023021903853125632_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=9267fe&_nc_ohc=JfEfSCUU9g8AX8a0F1Y&_nc_ht=scontent-tpe1-1.xx&tp=6&oh=b14272372a75621c15d80d8e5169244e&oe=609D2753"/>
            
              
              </div>
   

      <div className="home-compare-bt-box">
        <Link to='/menu'>
          <Button className="home-compare-bt">開始比較</Button>
        </Link>
      </div>
      <p className="home-title">各家主打商品</p>
        <div className="home-card">
          <div className="home-card-img-box">
            <img className="home-card-img" src="./img/kebuke_apple_black_tea.jpeg"/>
          </div>
          <div className="home-card-text">
            <p className="home-card-title">可不可 - 春蘋紅茶</p>
            <p className="home-card-description">酸甜柔和的青森蘋果汁，融合麗春紅茶特有的花意香氣，與粉嫩的櫻花晶球浸潤於口中，逐漸漫入微甘清爽的尾韻，如同遍地群花於心頭紛飛，在大地甦醒的喜悅中，一掃過往的陰霾，為生活揭開新的序幕，帶著輕盈的心，迎向嶄新的一年。
            </p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-img-box">
            <img className="home-card-img" src="./img/macu_pineapple.jpeg"/>
          </div>
          <div className="home-card-text">
            <p className="home-card-title">麻古茶坊 - 金鑽鳳梨梅蜜</p>
            <p className="home-card-description">
              麻古經典「梅蜜🍯」尬上新朋友「金鑽鳳梨🍍」，還有全新配料「葡萄波波🍇」，新鮮金鑽鳳梨與酸甜的梅蜜尬成綿密冰沙✨，搭配上Q彈葡萄波波，清爽解膩❣️回味無窮的新滋味😋
            </p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-img-box">
            <img className="home-card-img" src="./img/milkshop_strawberry.jpeg"/>
          </div>
          <div className="home-card-text">
            <p className="home-card-title">迷客夏 - 草莓庫莉鮮奶</p>
            <p className="home-card-description">
              選用苗栗大湖香水草莓，在最佳熟度急速冷凍保存製成凍果，完美展現香水草莓的酸甜風味以及細緻香氣，導入法式Coulis輕烹技法，由門市手工費時製成，香甜的天然草莓果漿
            </p>
          </div>
        </div>
        <BackTop/>
        </>
    );
}