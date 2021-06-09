/*  
💥 Title : Hero
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 09/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */

const Hero = () => {
  return (
    <>
      <main className="px-4 bg-heroMobile sm:bg-hero bg-cover bg-no-repeat overflow-hidden h-screen w-screen align-bottom ">
        <div className="container p-20 align-bottom h-full flex sm:justify-center flex-col justify-end">
          <h1 className="sm:text-7xl text-5xl sm:text-left text-center text-white font-semibold">Movie Club</h1>
          <p className="text-white md:w-1/2 my-4 align-bottom w-full">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
          </p>
          <button
            className="bg-white-500 mx-auto sm:mx-px w-max py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
          >
            Get Started
          </button>
        </div>
      </main>
    </>
  );
};

export default Hero;
