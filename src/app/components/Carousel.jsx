
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";




import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from "swiper";
import { Box } from '@mui/material';




const Carousel = () => {




  const poke = [{
    id: 120555,
    desc: "CAFE CON LECHE 300cc. (BAR)",
    picture: "https://www.californiasa.com.ar/wp-content/uploads/12055.jpg",
    precio: 390
  }, {
    id: 54133,
    desc: "VASO GASEOSA (BAR)",
    picture: "https://www.californiasa.com.ar/wp-content/uploads/54133.jpg",
    precio: 230
  }, {
    id: 54629,
    desc: "LICUADO DURAZNO 300cc. (BAR)",
    picture: "https://www.californiasa.com.ar/wp-content/uploads/54629.jpg",
    precio: 630
  }, {
    id: 54630,
    desc: "LICUADO BANANA 300cc. (BAR)",
    picture: "https://www.californiasa.com.ar/wp-content/uploads/54630.jpg",
    precio: 600
  }, {
    id: 56418,
    desc: "SANDWICH BAGUETTE + 1 VASO COCA COLA 300cc.",
    picture: "https://www.californiasa.com.ar/wp-content/uploads/56418.jpg",
    precio: 230
  }, {
    id: 52722,
    desc: "CAFE NEGRO DOBLE 300cc.  (BAR)",
    picture: "https://www.californiasa.com.ar/wp-content/uploads/52722.jpg",
    precio: 390
  }

  ]


  return (

    <div>





      <Swiper className='container p-2'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {
          poke.map((s) => (

            <SwiperSlide key={s.id}>



      <Box display="flex" alignItems="flex-start" justifyContent="center">     
      <Card sx={{ maxWidth: 600 }} >
        <CardMedia
          sx={{ height: 600,
                with:500
           }}
          image={s.picture}
          title="green iguana"
        />
        <CardContent >
          <div style={{ overflow:"auto"}}>
          <Typography gutterBottom variant="h3" component="div" color="red">
            {s.desc}
          </Typography>
          <Typography gutterBottom variant="h2"  color="text.secondary">
            $ {s.precio}
          </Typography>
          </div>
        </CardContent>
        
      </Card>
             
      </Box> 

        

            </SwiperSlide>

          ))

        }
      </Swiper>



    </div>
  )
}

export default Carousel