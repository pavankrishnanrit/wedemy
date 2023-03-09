import Card from "../components/card.component";
import Footer from "../components/footer.component";
import Navbar from "../components/navbar.component";
import Popup from "../components/popup.component";
import { useState } from "react";
import { useSelector } from "react-redux";

const Homepage = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [note, setNote] = useState();

  const { user } = useSelector((state) => ({ ...state }));

  return (
    <>
      {isPopup && <Popup note={note} setIsPopup={setIsPopup} />}

      <div className=" bg-cover lg:bg-[url('https://wallpaperaccess.com/full/2721432.jpg')] min-h-screen ">
        <Navbar />
        {user.displayName ? (
          <h1 className="text-black text-4xl font-semibold ml-7 flex flex-row lg:flex lg:flex-col justify-start lg:items-center items-start pt-5">
            Welcome {user.displayName}
          </h1>
        ) : (
          <h1 className="text-black text-4xl font-semibold ml-7 flex flex-row lg:flex lg:flex-col justify-start lg:items-center items-start pt-5">
            Welcome {user.username}
          </h1>
        )}

        <div className="lg:ml-32 ">
          <div className="mx-2 my-7">
            <p className="text-black text-4xl ml-5 font-medium flex flex-col justify-end">
              Published Notes
            </p>
          </div>
          <Card setIsPopup={setIsPopup} setNote={setNote} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
