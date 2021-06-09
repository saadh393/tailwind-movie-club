/*  
💥 Title : Trending
📃 Description : Trending Movies
✍ Author : Saad Hasan
⌚ Date : 09/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import TrendingCard from "../TrendingCard/TrendingCard";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Trending = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=0b26a0a913bc48f344a353cd9a5f77c4&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setTrending([...data.results]);
      });
    console.log(trending);
  }, []);
  return (
    <>
      <section className="p-10">
        <h1 className="text-center font-bold text-4xl my-10">Trending Movies</h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          {trending.map((trend) => (
            <SwiperSlide>
              <TrendingCard trend={trend} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Trending;
