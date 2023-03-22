import React from "react";
import Statistics from "./Statistics";
import Transfer from "./../rightside/Transfer";
import UpcomingBills from "./../rightside/UpcomingBills";

function Content() {
  return (
    <>
      <div className="w-full h-[90vh] space-x-4 items-center justify-center grid grid-col-2 xl:grid-col-3">
        {/* left section */}
        <div className="items-center justify-center flex flex-col col-span-2 h-full py-2 px-3 w-full space-y-4">
          {/* upper section  */}
          <div className="pb-1 pt-12 px-3 w-full h-full space-y-8">
            {/* title + icons */}
            <div className="py-1 px-2 items-center justify-center w-full flex">
              <h1 className="flex items-start justify-start w-full text-2xl xl:text-4xl self-center font-bold text-black">
                Mastercard Gold
              </h1>
              <div className="flex items-end justify-end w-full space-x-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-[45deg]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* center part */}
            <div className="pb-2 pt-4 px-3 items-center justify-center grid grid-cols-2 xl:grid-cols-4 w-full">
              <div className="xl:col-span-1 col-span-2 px-3 py-2 bg-[#f8f8f8] rounded-lf flex items-center w-full justify-between">
                <div className="flex-col items-center justify-center flex- w-full ">
                  <h1 className="text-start items-start justify-start flex w-full font-bold text-black text-xl">
                    ...6000
                  </h1>
                  <div className="flex w-full items-center justify-between space-x-4">
                    <p>05/23</p>
                    <p className="text-[#3c45a0]">CVV</p>
                  </div>
                </div>
                <div className="px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="py-3 px-3 w-full xl:col-span-3 col-span-2 xl:flex items-center justify-between xl:space-y-0 space-y-4 xl:space-x-4">
                <div className="w-full items-start justify-start xl:items-center xl:justify-cneter flex flex-col">
                  <h1 className="font-medium text-gray-500">Cash Available</h1>
                  <h1 className="text-2xl font-bold">$ 60,000</h1>
                </div>
                <div className="w-full items-start justify-start xl:items-center xl:justify-cneter flex flex-col">
                  <h1 className="font-medium text-gray-500">Credit Limit</h1>
                  <h1 className="text-2xl font-bold">$ 800,000</h1>
                </div>
                <div className="w-full items-start justify-start xl:items-center xl:justify-cneter flex flex-col">
                  <h1 className="font-medium text-gray-500">Debt</h1>
                  <h1 className="text-2xl font-bold">$ 200,000</h1>
                </div>
              </div>
            </div>
            <div className="px-3 w-full items-center justify-center flex">
              <div className="py-4 px-6 w-full items-center justify-between xl:space-y-0 space-y-6 lg:flex bg-[#f8f8f8] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 fill-purple-900 stroke-gray-900 lg:inline hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
                <div className="lg:flex justify-between items-center lg:space-x-12">
                  <div className="space-y-2">
                    <h1 className="font-medium text-gray-500 text-lg">
                      Azizi Bank
                    </h1>
                    <h1 className="font-bold text-2xl">300,000 $</h1>
                  </div>
                  <div className="space-y-2">
                    <h1 className="font-medium text-gray-500 text-lg">
                      Payment
                    </h1>
                    <h1 className="font-bold text-2xl">20,000 $</h1>
                  </div>
                </div>

                <div className="lg-w-1/2 w-full items-start justify-start lg:items-end lg:justify-end flex lg:space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 self-center md:inline hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>

                  <button className="bg-black smooth hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900 text-gray-100 py-3 px-8 border border-transparent rounded-md">
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* lower section  */}
          <div className="py-1 px-3 w-full h-full">
            <Statistics />
          </div>
        </div>
        {/* right section  */}
        <div className="col-span-1 h-full xl:flex xl:felx-col hidden space-y-6 py-2 px-6 w-full ">
          <Transfer />
          <UpcomingBills />
        </div>
      </div>
    </>
  );
}

export default Content;
