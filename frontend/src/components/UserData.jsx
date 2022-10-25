import React from "react";
import rider from "../assets/rider.jpg";
import Lottie from "react-lottie";
import * as animationData from "../assets/guy.json";
const UserData = ({ user }) => {
  user.number = "+92 305 7134189"
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  console.log(user.name);
  return (
    <div className="h-[350px] w-full flex  my-10 p-10   ">
      <div id="details" className="w-1/2 border ml-10 p-3 rounded-lg">
        <div id="profile" className="flex  h-1/2 p-2">
          <div
            id="profile imaeg"
            className="flex w-32 h-32 rounded-full border "
            style={{
              backgroundImage:
                "url(" +
                `https://avatars.dicebear.com/api/micah/${user.nickname}.svg` +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            id="name"
            className="flex h-full items-center justify-center  mt-auto mb-auto ml-5 text-lg font-semibold flex-col"
          >
            <div>{user.name}</div>
            <div
              id="tag"
              className="p-1 rounded-md bg-yellow-400 w-20 text-center text-white mr-auto"
            >
              Rider
            </div>
          </div>
        </div>
        <div className=" h-1/2 flex   ">
          <div className="h-full w-5/6 flex flex-col   justify-center mt-3">
            <div className="bg-gray-300 w-3/4 h-9 rounded ml-2 p-1 text-center text-gray-500">{user.email}</div>
            <div className="bg-gray-300 w-3/4 h-9 rounded ml-2 mt-2 p-1 text-center text-gray-500">{user.number}</div>
          </div>
          <div className=" w-1/6 flex item-end justify-end">
            <button className="p-3 bg-rose-500 rounded-lg  text-white font-bold ml-auto mt-auto w-full mb-3">
              Edit
            </button>
          </div>
        </div>
      </div>
      <div id="rider" className="w-1/2  solid  h-full">
        <Lottie options={defaultOptions} height={300} width={500} />
      </div>
    </div>
  );
};

export default UserData;
