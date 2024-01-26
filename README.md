## Chat App Component

This documentation provides an overview and usage guide for the React Chat App, a simple chat application developed using React. The app includes a chat button on the main page that, when clicked, opens a chat modal powered by the DowellChat component.

# Home Component
Overview
The Home component serves as the main entry point for the application. It includes a chat button that toggles the visibility of the chat modal when clicked.

# Usage

```
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

```

# Props

    position: Position of the Home component on the page (e.g., "fixed top-0 right-0").

## DowellChat Component
# Overview

The DowellChat component represents the chat modal, providing a simple interface for users to exchange messages. It includes a title, a message display area, an input field, and a send button.

# Usage

```
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

const DowellChat = ({ title, ContainerPosition, inputStyle, buttonStyle }) => {
  const [textMessage, setTextMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendTextMessage = () => {
    if (textMessage.trim() !== "") {
      setMessages([...messages, textMessage]);
      setTextMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendTextMessage();
    }
  };

  return (
    <div
      className={`${ContainerPosition} bg-white flex flex-col justify-center items-center md:w-80 p-2 space-y-5 shadow-lg rounded-lg border-2 border-solid`}
    >
      <h5 className=''>{title} </h5>
      <div className='border-solid w-64 rounded-md h-60 overflow-y-auto border-2 border-[#f4f4f4] space-y-2 p-2'>
        {React.Children.toArray(
          messages.map((message) => (
            <div className='bg-[#f4f4f4] p-1.5 rounded-md'>{message}</div>
          ))
        )}
      </div>
      <div className='flex  flex-col md:flex-row gap-2'>
        <input
          type='text'
          value={textMessage}
          onChange={(e) => setTextMessage(e.target.value)}
          className={`${inputStyle}`}
          onKeyUp={handleKeyPress}
        />

        <button className={`${buttonStyle}`} onClick={sendTextMessage}>
          <IoIosSend size={30} />
        </button>
      </div>
    </div>
  );
};

export default DowellChat;
```

# Props

    title: Title of the chat modal (e.g., "Dowell Customer Support").
    ContainerPosition: Position of the chat modal on the page.
    inputStyle: Styling for the input field.
    buttonStyle: Styling for the send button.

# How to Run Locally

    Clone the repository: git clone https://github.com/LL03-Identity-Dowell/100096-dowell-chat-component.git
    Navigate to the project folder: cd dowell
    Install dependencies: npm install
    Start the development server: npm start

    
    Open your browser and go to http://localhost:3000 to view the app.
