import { Carousel } from 'antd';
export default function Swiper(){
    return(
        <>
            <Carousel autoplay className="swiper">
                <div >
                    <img className="swiper-img" src="https://i.beauty321.com/816x/https://il.beauty321.com/gallery/gallery/39553/photo-6062a39ac142e.jpg"/>
                </div>
                <div>
                    <img className="swiper-img" src="http://www.maculife.com.tw/upload/banner/images/220210317141941.JPG"/>
                </div>
                <div>
                    <img className="swiper-img" src="https://www.milkshoptea.com/upload/image/%E8%8D%89%E8%8E%93A4-%E4%B8%8B%E8%A8%82%E7%94%A8-%E8%BD%89.jpg"/>
                </div>
                <div >
                    <img className="swiper-img" src="https://www.chingshin.tw/upload/image/20210323product001.jpg"/>
                </div>
                <div >
                    <img className="swiper-img"src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/p843x403/32498190_1630464020406963_2023021903853125632_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=9267fe&_nc_ohc=JfEfSCUU9g8AX8a0F1Y&_nc_ht=scontent-tpe1-1.xx&tp=6&oh=b14272372a75621c15d80d8e5169244e&oe=609D2753"/>
                </div>
            </Carousel>
        </>
    );
}