import { useState } from "react";
import IssueForm from "./IssueForm";
import FeedBackForm from "./shareFeedBack";
import Suggestoin from "./Suggesion";
import ContactUsForm from "./ContactUs";
import './ran.css'
const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnyActive, setIsAnyActive] = useState(false);

  const [popUpData, setPopUpData] = useState([
    {
      id: "1",
      content: "Report an issue",
      iconUrl: "/assets/issue.png",
      isActive: false,
      component: <IssueForm />,
    },
    {
      id: "2",
      content: "Share Feedback",
      iconUrl: "/assets/feedback.png",
      isActive: false,
      component: <FeedBackForm />,
    },
    {
      id: "3",
      content: "Give Suggestion",
      iconUrl: "/assets/suggestion.png",
      isActive: false,
      component: <Suggestoin />,
    },
    {
      id: "4",
      content: "Contact Us",
      iconUrl: "/assets/contact.png",
      isActive: false,
      component: <ContactUsForm />,
    },
  ]);

  const handleCloseBtn = () => {
    // if box not opened
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    const newData = [...popUpData];
    for (let i = 0; i < newData.length; i++) {
      newData[i].isActive = false;
    }
    setIsAnyActive(false);
    setIsOpen(false);
    setPopUpData([...newData]);
  };

  const handleActive = (id) => {
    const newData = [...popUpData];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === id && newData[i].isActive) {
        newData[i].isActive = false;
        setIsAnyActive(false);
      } else if (newData[i].id === id) {
        newData[i].isActive = true;
        setIsAnyActive(true);
      } else {
        newData[i].isActive = false;
      }
    }
    setPopUpData([...newData]);
  };

  return (
    <div className="fixed  right-5 z-20 bottom_resp ">
      <button
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white"
        onClick={handleCloseBtn}
      >
        <img
          src={`${isOpen ? "/assets/close.png" : "/assets/popUp.png"}`}
          alt={`${isOpen ? "close pop up" : "open pop up"}`}
          className={`${isOpen ? "w-7 h-7" : "h-6 w-6"}`}
        />
      </button>

      {/* showing the pop up options */}
      {isOpen && (
        <ul
          className={`absolute w-auto flex gap-3 ${
            isAnyActive
              ? "flex-row bottom-0 right-20"
              : "flex-col bottom-20 right-0"
          }`}
        >
          {popUpData.length > 0 &&
            popUpData?.map((data) => {
              return (
                <li key={data?.id} className="flex items-center gap-5 self-end">
                  {!isAnyActive && (
                    <p className="bg-white px-2 py-1 rounded-sm text-sm font-medium whitespace-nowrap">
                      {data?.content}
                    </p>
                  )}

                  <button
                    className={`w-14 h-14 flex items-center justify-center bg-white rounded-full ${
                      data?.isActive ? "ring" : ""
                    }`}
                    onClick={() => handleActive(data?.id)}
                  >
                    <img
                      src={data?.iconUrl}
                      alt={data?.content}
                      className="h-5 w-5"
                    />
                  </button>

                  {data?.isActive && data?.component}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default PopUp;
