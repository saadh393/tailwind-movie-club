/*  
💥 Title : Subscription
📃 Description : Subscription
✍ Author : Saad Hasan
⌚ Date : 09/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import image from "../../assets/images/cruella.png";

const Subscription = () => {
  return (
    <>
      <section className="p-10">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-2/4 p-8 w-full">
            <img src={image} alt="" className="w-full " />
          </div>
          <div className="flex flex-col pt-20 sm:w-2/4 p-8 w-full">
            <h1 className="sm:text-5xl text-3xl leading-normal">
              Stream <span className="font-bold">Movie Club</span>'s Cruella for S$38.98 with a Disney+ subscription
            </h1>

            <p className="font-light text-gray-100 mt-4 text-justify">
              See <span className="font-bold">Movie Club</span>'s Cruella before it's available to all{" "}
              <span className="font-bold">Movie Club</span>+ subscribers on 27 August. Watch as many times as you like
              with Premier Access for S$38.98 and your <span className="font-bold">Movie Club</span>+ subscription .
              <a href="#" className="text-indigo-500 font-bold cursor-pointer">
                {" "}
                Learn more.
              </a>
            </p>
            <button
              className="mx-auto sm:mx-px bg-white-500 my-4 w-max py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
            >
              GET IT NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
