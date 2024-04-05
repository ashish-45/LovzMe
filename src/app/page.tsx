import Image from "next/image";
import clock from "@/app/images/clock.png";
import cards from "@/app/images/cards.png";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between p-5 items-center">
        <div className="bg-white rounded-3xl p-2 w-72 h-9 flex justify-around items-center mt-4">
          <p className="text-black text-2xl font-bold">BNBUSD</p>
          <p className="text-1xl text-black ">$228.5322</p>
        </div>
        <div className="text-white flex items-center bg-white rounded-2xl h-6 p-4 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00FF00"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-600 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <Image src={cards} alt="not found" className="h-16 w-16" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-green-600 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        <div className="text-white flex justify-between mt-4">
          <div className="flex bg-white p-2 rounded-3xl relative h-9">
            <p className="font-bold text-black mr-3">0.038</p>
            <p className="text-black mr-7">5m</p>
            <Image
              src={clock}
              alt="not found"
              className="h-10 w-10 absolute left-24 top-0"
            />
          </div>
          <div className="bg-gray-500 p-2 rounded-xl ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="bg-gray-500 p-2 rounded-xl ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
              />
            </svg>
          </div>
          <div className="bg-gray-300 p-2 rounded-xl ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="carousel carousel-center max-w-full p-4 space-x-4 rounded-box">
        <div className="carousel-item">
          <div className="justify-center flex ">
            <div className="card w-96 bg-gray-200 shadow-xl ">
              <div className="flex justify-between p-2 border-y-blue-600 border-t-blue-600 bg-gray-300 rounded-tl-xl rounded-tr-xl">
                <p className="text-black flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#9CA3AF"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>

                  <span className="ml-1 text-gray-400 text-1xl">Expired</span>
                </p>
                <p className="text-gray-400 text-1xl">#21567836</p>
              </div>
              <div className="relative w-full ">
                <div className="absolute top-0 left-0 h-full bg-blue-600 w-4/5"></div>
                <div className="absolute top-0 left-0 w-full h-full border-b-2 border-t-2 border-gray-300"></div>
              </div>
              <div className="min-h-52 flex justify-center">
                <div className="border-2 border-pink-600 rounded-xl h-44 w-80  mt-4">
                  <p className="text-gray-500 ml-3 mt-3">Last Price</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-pink-500 font-bold ml-3 mt-3 text-2xl">
                        <span className="decoration-dashed border-b-2 border-gray-500">
                          $228.553
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="bg-pink-500 p-2 mr-3 rounded-md flex">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                          />
                        </svg>
                        $-0.4241
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5 mb-0">
                    <p className="text-black ml-3 text-1xl">Locked Price:</p>
                    <p className="text-black mr-3 text-1xl">$228.9473</p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-black ml-3 text-1xl font-semibold">
                      Price Pool:
                    </p>
                    <p className="text-black mr-3 text-1xl font-semibold">
                      8.5143 BNB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item">
            <div className="justify-center flex">
              <div className="card w-96 bg-gray-200 shadow-xl ">
                <div className="flex justify-between p-2 border-y-blue-600 border-t-blue-600 bg-gray-300 rounded-tl-xl rounded-tr-xl">
                  <p className="text-black flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#9CA3AF"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>

                    <span className="ml-1 text-gray-400 text-1xl">Expired</span>
                  </p>
                  <p className="text-gray-400 text-1xl">#21567836</p>
                </div>
                <div className="relative w-full ">
                  <div className="absolute top-0 left-0 h-full bg-blue-600 w-4/5"></div>
                  <div className="absolute top-0 left-0 w-full h-full border-b-2 border-t-2 border-gray-300"></div>
                </div>
                <div className="min-h-52 flex justify-center">
                  <div className="border-2 border-pink-600 rounded-xl h-44 w-80  mt-4">
                    <p className="text-gray-500 ml-3 mt-3">Last Price</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-pink-500 font-bold ml-3 mt-3 text-2xl">
                          <span className="decoration-dashed border-b-2 border-gray-500">
                            $228.553
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="bg-pink-500 p-2 mr-3 rounded-md flex">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                            />
                          </svg>
                          $-0.4241
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-5 mb-0">
                      <p className="text-black ml-3 text-1xl">Locked Price:</p>
                      <p className="text-black mr-3 text-1xl">$228.9473</p>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-black ml-3 text-1xl font-semibold">
                        Price Pool:
                      </p>
                      <p className="text-black mr-3 text-1xl font-semibold">
                        8.5143 BNB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="justify-center flex">
            <div className="card w-96 bg-white shadow-xl ">
              <div className="flex justify-between p-2 border-y-blue-600 border-t-blue-600">
                <p className="text-black flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                  <span className="ml-1 text-blue-600">Live</span>
                </p>
                <p className="text-blue-600">#21567836</p>
              </div>
              <div className="relative w-full h-3">
                <div className="absolute top-0 left-0 h-full bg-blue-600 w-4/5"></div>
                <div className="absolute top-0 left-0 w-full h-full border-b-2 border-t-2 border-gray-300"></div>
              </div>
              <div className="min-h-52 flex justify-center">
                <div className="border-2 border-pink-600 rounded-xl h-44 w-80  mt-4">
                  <p className="text-gray-500 ml-3 mt-3">Last Price</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-pink-500 font-bold ml-3 mt-3 text-2xl">
                        <span className="decoration-dashed border-b-2 border-gray-500">
                          $228.553
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="bg-pink-500 p-2 mr-3 rounded-md">
                        $-0.4241
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5 mb-0">
                    <p className="text-black ml-3 text-1xl">Locked Price:</p>
                    <p className="text-black mr-3 text-1xl">$228.9473</p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-black ml-3 text-1xl font-semibold">
                      Price Pool:
                    </p>
                    <p className="text-black mr-3 text-1xl font-semibold">
                      8.5143 BNB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="justify-center flex">
            <div className="card w-96 bg-white shadow-xl ">
              <div className="flex justify-between p-2 border-y-blue-600 border-t-blue-600 bg-blue-600 rounded-tl-xl rounded-tr-xl">
                <p className="text-black flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                  <span className="ml-1 text-white">Live</span>
                </p>
                <p className="text-white">#21567836</p>
              </div>
              <div className="relative w-full ">
                <div className="absolute top-0 left-0 h-full bg-blue-600 w-4/5"></div>
                <div className="absolute top-0 left-0 w-full h-full border-b-1 border-t-1 border-gray-300 "></div>
              </div>
              <div className="min-h-52 flex justify-center">
                <div className="border-2 border-green-600 rounded-xl h-44 w-80  mt-4">
                  <div className="flex justify-between mt-3">
                    <p className="text-black font-bold ml-3">Price Pool:</p>
                    <p className="text-black font-bold mr-3">2.3760 BNB</p>
                  </div>
                  <div className="pl-4 pr-4">
                    <button className="bg-green-400 p-4 rounded-3xl w-full mt-2">
                      Enter UP
                    </button>
                    <button className="bg-pink-400 p-4 rounded-3xl w-full mt-2">
                      Enter DOWN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="justify-center flex">
            <div className="card w-96 bg-white shadow-xl ">
              <div className="flex justify-between p-2 border-y-blue-600 border-t-blue-600 bg-gray-300 rounded-tl-xl rounded-tr-xl">
                <p className="text-black flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span className="ml-1 text-black">Later</span>
                </p>
                <p className="text-black">#21567836</p>
              </div>
              <div className="relative w-full h-0">
                <div className="absolute top-0 left-0 h-full bg-blue-600 w-4/5"></div>
                <div className="absolute top-0 left-0 w-full h-full border-b-1 border-t-1 border-gray-200"></div>
              </div>
              <div className="min-h-52 flex justify-center items-center">
                <div className="border-2 border-gray-400 rounded-xl h-20 w-80  mt-4  items-center">
                  <p className="text-black text-center mt-2">Entry Starts</p>
                  <p className="font-bold text-3xl text-black text-center">
                    ~00:38
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
