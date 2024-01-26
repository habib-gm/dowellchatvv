import { useState } from "react";
import DowellChat from "../Chat/DowellChat";

const Home = ({ position }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className={`${position}`}>
      <button
        className={`${modal ? "bg-red-300" : "bg-blue-300"} p-3 rounded-full`}
        onClick={toggleModal}
      >
        chat
      </button>
      {modal && (
        <DowellChat
          title='Dowell Customer Support'
          ContainerPosition={
            "fixed bottom-16 left-16 sm:right-16 md:right-24 lg:right-28"
          }
          inputStyle={
            "rounded-lg h-10 appearance-none bg-transparent border text-gray-700 px-1 focus:outline-none"
          }
          buttonStyle={
            "rounded-lg border-4 border-double border-white bg-blue-300 py-1 px-2 h-10"
          }
        />
      )}
    </div>
  );
};
export default Home;
