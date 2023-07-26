import Image from "next/image";
import background from ".././public/body-bg.svg";

export default function NotFound() {
  return (
    <div>
      <div className="absolute -z-10 w-full">
        <Image
          src={background}
          alt="background grid for the page body"
          className="w-full"
          width={1000}
          height={1000}
        />
      </div>

      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-9/12 h-3/6 flex justify-center items-center p-6">
          <div>
            <h1 className="text-6xl font-bold text-red-600">Oops</h1>
            <p className="text-4xl font-semi-bold text-gray-500">
              Something went wrong
            </p>
            <p className="text-xl font-normal text-gray-500 pb-14">
              You landed on the wrong page. Please check the link again, go back
              Home or reach out to us
            </p>

            <div className="gap-8">
              <button className="bg-black text-white font-bold py-5 px-10 rounded inline-flex tracking-wider mr-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="ml-2">Home</span>
              </button>

              <button className="border border-gray-200 bg-white text-black font-bold py-5 px-10 mt-5 rounded inline-flex tracking-wider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M3.83464 3.33301H17.168C18.0846 3.33301 18.8346 4.08301 18.8346 4.99967V14.9997C18.8346 15.9163 18.0846 16.6663 17.168 16.6663H3.83464C2.91797 16.6663 2.16797 15.9163 2.16797 14.9997V4.99967C2.16797 4.08301 2.91797 3.33301 3.83464 3.33301Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8346 5L10.5013 10.8333L2.16797 5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="ml-2">Contact Support</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/page-image.svg"
            alt="page image"
            width="421"
            height="418"
          />
        </div>
      </div>
    </div>
  );
}
