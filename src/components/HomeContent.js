import { Carousel } from 'antd';
import {Button,BackTop} from 'antd'
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
export default function HomeContent(){
    const params = {
        direction: 'horizontal',
        slidesPerView: 15, //显示数量
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 2000,  // 设置轮播的时间
          disableOnInteraction: false,  // 这一行是为了避免手动滑动轮播图后，自动轮播失效，默认为true
        },
      }
    return(
        <>
        <div className="swiper">
        <Swiper {...params}>
          <img className="swiper-img" src="http://kebuke.com/wp-content/uploads/2021/03/WORKS_201912%E8%8C%B6%E7%BD%90%E7%A6%AE%E7%9B%92_0-scaled.jpg"/>
          <img className="swiper-img" src="http://kebuke.com/wp-content/uploads/2021/02/WORKS_201911_%E6%A3%92%E7%90%83_0.jpg"/>
          <img className="swiper-img" src="http://kebuke.com/wp-content/uploads/2021/03/WORKS_201912%E8%8C%B6%E7%BD%90%E7%A6%AE%E7%9B%92_0-scaled.jpg"/>
          <img className="swiper-img" src="http://kebuke.com/wp-content/uploads/2021/02/WORKS_201911_%E6%A3%92%E7%90%83_0.jpg"/>
          <img className="swiper-img" src="http://kebuke.com/wp-content/uploads/2021/03/WORKS_201912%E8%8C%B6%E7%BD%90%E7%A6%AE%E7%9B%92_0-scaled.jpg"/>
        </Swiper>
      </div>
      <div className="home-compare-bt-box">
        <Button className="home-compare-bt">開始比較</Button>
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