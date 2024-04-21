import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user}) => {
  return (
    <div>
      <div className="relative h-[380px] w-[280px]">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="AirMax Pro"
          className="z-0 w-full h-full rounded-md object-cover items-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{user.username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <Link>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View Profile &rarr;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
