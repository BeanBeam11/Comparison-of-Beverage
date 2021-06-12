import React from 'react';
import {Button,BackTop,Carousel} from 'antd'
import { Link } from "react-router-dom";


export default function HomeContent(){
  
  const contentStyle = {
    height: '160px',
    color: '#fff',
    width:'100px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
    return(
      <> 
      <div className="intro" id="intro-1">
        <div className="intro-text-1">
          瀏覽各家菜單
          <div className="intro-bt-box-1">
            <Link to='/menu'>
              <Button ghost className="intro-bt-1">菜單</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="intro-space"></div>
      <div className="intro" id="intro-2">
        <div className="intro-text-2">
          將想喝的飲料加入比較
          <div className="intro-bt-box-2">
            <Link to='/menu'>
              <Button ghost className="intro-bt-1">加入比較</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="intro-space"></div>
      <div className="intro" id="intro-3">
        <div className="intro-text-3">
          開始比較想喝的飲料
          <div className="intro-bt-box-3">
            <Link to='/compare'>
              <Button ghost className="intro-bt-1">飲料比較</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="intro-space"></div>

      <div className="home-title-box">
        <p className="home-title">各家主打商品</p>
      </div>
      <div className="home-card-wrapper">
        <div className="home-card">
          <div className="home-card-img-box">
            <img className="home-card-img" src="./img/kebuke_apple_black_tea.jpeg"/>
          </div>
          <div className="home-card-text">
            <div className="home-card-title">可不可</div>
            <div className="home-card-product"> - 春蘋紅茶</div>
            <div className="home-card-description">酸甜柔和的青森蘋果汁，融合麗春紅茶特有的花意香氣，與粉嫩的櫻花晶球浸潤於口中，逐漸漫入微甘清爽的尾韻，如同遍地群花於心頭紛飛，在大地甦醒的喜悅中，一掃過往的陰霾，為生活揭開新的序幕，帶著輕盈的心，迎向嶄新的一年。
            </div>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-img-box">
            <img className="home-card-img" src="./img/macu_pineapple.jpeg"/>
          </div>
          <div className="home-card-text">
            <div className="home-card-title">麻古茶坊</div>
            <div className="home-card-product"> - 金鑽鳳梨梅蜜</div>
            <div className="home-card-description">
              麻古經典「梅蜜🍯」尬上新朋友「金鑽鳳梨🍍」，還有全新配料「葡萄波波🍇」，新鮮金鑽鳳梨與酸甜的梅蜜尬成綿密冰沙✨，搭配上Q彈葡萄波波，清爽解膩❣️回味無窮的新滋味😋
            </div>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-img-box">
            <img className="home-card-img" src="./img/milkshop_strawberry.jpeg"/>
          </div>
          <div className="home-card-text">
            <div className="home-card-title">迷客夏</div>
            <div className="home-card-product">  - 草莓庫莉鮮奶</div>
            <div className="home-card-description">
              選用苗栗大湖香水草莓，在最佳熟度急速冷凍保存製成凍果，完美展現香水草莓的酸甜風味以及細緻香氣，導入法式Coulis輕烹技法，由門市手工費時製成，香甜的天然草莓果漿
            </div>
          </div>
        </div>  
      </div>
      
      <BackTop/>
      </>
    );
}