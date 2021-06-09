/*  
💥 Title : MovieCard
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 09/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import image from "../../assets/images/hero.jpg";

const MovieCard = ({ movie }) => {
  const { poster_path, original_title } = movie;
  return (
    <>
      <div className="bg-gray-800 shadow overflow-hidden sm:rounded-lg ">
        <img
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt=""
          className="w-full h-72 object-cover object-top"
        />
        <div className="p-3">
          <h4 className="text-white text-lg font-medium">{original_title}</h4>
          <p className="text-gray-400 p-0 m-0">other info</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
