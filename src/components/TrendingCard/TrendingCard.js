/*  
💥 Title : TrendingCard
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 09/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import rating from "../../assets/icons/star.svg";

const TrendingCard = ({ trend }) => {
  const { backdrop_path, original_title, vote_average } = trend;
  const rating = (vote_average * 5) / 10;
  const stars = Array(Math.floor(rating));
  return (
    <>
      <div className="w-4/5 h-full relative mx-auto">
        <img
          src={"https://image.tmdb.org/t/p/original" + backdrop_path}
          alt=""
          className="w-full object-fill  object-center rounded"
          //   style={{ height: "500px" }}
        />
        <div className="absolute p-10  w-full bg-gradient-to-t from-black" style={{ left: "0%", bottom: "0" }} s>
          <h4 className="text-2xl">{original_title}</h4>
          <div className="flex gap-2">
            {stars.map(() => (
              <img src={rating} className="w-4 mt-3" alt="Rating" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCard;
