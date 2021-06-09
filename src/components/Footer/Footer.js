/*  
💥 Title : Footer
📃 Description : Footer
✍ Author : Saad Hasan
⌚ Date : 09/ June/ 2021 
*/

/*  🔥 React Dependencies 🔥 */

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900">
        <div className="text-center p-10">
          <h4 className="text-3xl text-gray-300 font-medium">Movie Club</h4>
          <ul className="flex text-center mx-auto justify-center mt-2">
            <li className="text-gray-500 mr-4">Subscriber</li>
            <li className="text-gray-500 mr-4">Privacy</li>
            <li className="text-gray-500 mr-4">Policy</li>
            <li className="text-gray-500 mr-4">Help</li>
            <li className="text-gray-500">About us</li>
          </ul>
          <p className="mt-2 text-gray-400">© 2021 Movie Club and its related entities. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
