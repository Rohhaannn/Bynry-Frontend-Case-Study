import React from "react";
import usersList from "../../public/usersList.json";

const Card = ({ user, onOpenProfile }) => {
  const openProfile = () => {
    onOpenProfile(user);
  };

  const imgUrl = usersList[user.id - 1]?.imgUrl || ''; // Accessing imgUrl directly from usersList based on user id

  return (
    <div>
      <div className="relative h-[380px] w-[280px] hover:cursor-pointer">
        <img
          src={imgUrl}
          alt={user.name}
          className="z-0 w-full h-full rounded-md object-cover items-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{user.name}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={openProfile}>
            View Profile &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
