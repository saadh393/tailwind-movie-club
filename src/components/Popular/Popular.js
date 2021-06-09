/*  
💥 Title : Popular
📃 Description : Popular Movies
✍ Author : Saad Hasan
⌚ Date : 09/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { useEffect, useState } from "react";
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination]);

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0b26a0a913bc48f344a353cd9a5f77c4&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
        // setMovies[data.results];
      });
  }, []);

  return (
    <>
      <section className="p-10 pt-32">
        <h3 className="text-4xl text-center font-semibold">Popular Movies</h3>
        <div className="flex flex-wrap gap-5 justify-center mt-14">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {movies.map((movie) => (
              <SwiperSlide>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Popular;
