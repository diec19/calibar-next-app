import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";


// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from "swiper";

  

const Carousel = () => {

  const poke =[{
    id:120555,
    desc:"CAFE CON LECHE 300cc. (BAR)",
    picture:"https://i.blogs.es/421374/cafe-con-leche2/450_1000.jpg",
    precio:390       
},{
    id:54133,
    desc:"VASO GASEOSA (BAR)",
    picture:"https://img.freepik.com/fotos-premium/bebida-gaseosa-marron-vaso-hielo_159938-66.jpg?w=2000",
    precio:230
},{
    id:54629,
    desc:"LICUADO DURAZNO 300cc. (BAR)",
    picture:"https://estag.fimagenes.com/img/3/1/R/y/V/1RyV_900.jpg",
    precio:630
},{
    id:54630,
    desc:"LICUADO BANANA 300cc. (BAR)",
    picture:"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/03/recetas-de-licuados-nutritivos-para-desayunar.jpg",
    precio:600
},{
    id:55771,
    desc:"CHIPA c/u (BAR)",
    picture:"https://alicante.com.ar/uploads/recetas/91_receta.jpg",
    precio:300
},{
    id:56418,
    desc:"SANDWICH BAGUETTE + 1 VASO COCA COLA 300cc.",
    picture:"https://tiendup.b-cdn.net/business/11334/products/We7bNz_6373bb9956758_medium.png",
    precio:230
},{
    id:52722,
    desc:"CAFE NEGRO DOBLE 300cc.  (BAR)",
    picture:"https://s10.s3c.es/imag/_v0/770x420/2/3/d/600x400_Una-taza-con-cafe-negro-en-su-interior--iStock.jpg",
    precio:390
}

]


  return (

     <div>
  
    
  <Swiper
          modules={[Navigation,Pagination,Scrollbar,A11y,Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{clickable:true}}
          scrollbar={{draggable:true}}
          onSlideChange={()=>console.log('slide change')}
          onSwiper={(swiper)=>console.log(swiper)}
          >
            {
                poke.map((s)=>(
                  
                  <SwiperSlide key={s.id}>
                    <div className='card text-bg-dark'>
                    <img src={s.picture} alt=''/>
                    <div className='card-img-overlay'>
                    <h5 clasName='card-title'>{s.desc}</h5>
                    <p className='card-text'>{s.precio}</p>
                    </div>
                    </div>
                  </SwiperSlide>
                 
                ))

            }
          </Swiper>
 
      
    
    </div>
  )
}

export default Carousel