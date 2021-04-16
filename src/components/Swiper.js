import { Carousel } from 'antd';
export default function Swiper(){
    return(
        <>
            <Carousel autoplay className="swiper">
                <div >
                    <img className="swiper-img" src="./img/swiper_50lan.jpeg"/>
                </div>
                <div>
                    <img className="swiper-img" src="./img/swiper_kebuke.jpeg"/>
                </div>
                <div>
                    <img className="swiper-img" src="./img/swiper_milkshop.jpeg"/>
                </div>
                <div >
                    <img className="swiper-img" src="./img/swiper_macu.jpeg"/>
                </div>
                <div >
                    <img className="swiper-img"src="./img/swiper_chingshin.jpeg"/>
                </div>
            </Carousel>
        </>
    );
}