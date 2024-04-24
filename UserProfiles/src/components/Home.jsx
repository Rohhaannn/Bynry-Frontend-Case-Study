import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-screen bg-[#ebeeee]">

        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-20 bg-[#ebeeee]">
          <div className="w-full md:w-1/2 mt-12 md:mt-24 order-2 md:order-1">
            <div className="space-y-12 mt-10">
              <h1 className="text-4xl">
                {" "}
                Hello Welcome{" "}
                <span className="text-[#3977d2]">
                  {" "}
                  Employement Registration{" "}
                </span>{" "}
              </h1>

              <p className="text-xl text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                harum nemo beatae quidem quo ipsum adipisci! Adipisci maxime illo
                ex? Accusantium similique atque modi optio dignissimos tenetur at
                sed. Quo?
              </p>

              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <button className="mt-6 px-3 py-2 rounded-lg bg-[#3977d2] hover:text-white">
              Send
            </button>
          </div>

          <div className="order-1 w-full md:w-1/2 px-10 mt-12 md:mt-24">
            <img
              src="https://assets.website-files.com/6174a877844b8d384f2230b9/621405faf156b68381c89877_Untitled%20design.gif"
              className="w-75 h-115 mb-10"
              alt="Banner Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
