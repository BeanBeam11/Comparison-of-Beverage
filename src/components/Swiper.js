import { Carousel } from 'antd';
export default function Swiper(){
    return(
        <>
            <Carousel autoplay className="swiper">
                <div className="swiper-box">
                    <img className="swiper-img" src="./img/mockup_all.png"/>
                </div>
                <div className="swiper-box">
                    <img className="swiper-img" src="./img/mockup_iphone.png"/>
                </div>
                <div className="swiper-box">
                    <img className="swiper-img" src="./img/mockup_macbook.png"/>
                </div>
            </Carousel>
        </>
    );
}