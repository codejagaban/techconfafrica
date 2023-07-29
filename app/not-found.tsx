import Image from "next/image";
import background from ".././public/body-bg.svg";

export default function NotFound() {
  return (
    <section>
      <div className="absolute -z-10 w-full">
        <Image
          src={background}
          alt="background grid for the page body"
          className="w-full"
          width={1000}
          height={1000}
        />
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center items-center p-4">
          <div className="w-2/6 h-64 ml-52 mt-32 gap-14">
            <h1 className="text-7xl font-bold text-red-600 mb-2">Oops</h1>
            <p className="text-4xl font-semi-bold text-gray-500 mb-2">
              Something went wrong
            </p>
            <p className="text-xl font-normal text-gray-500 mb-14">
              You landed on the wrong page. Please check the link again, go back
              Home or reach out to us
            </p>

            {/* button */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-black text-white"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
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
              </a>
              <a
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white text-black ring-1 ring-black"
                href="/support"
              >
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
              </a>
            </div>
          </div>

          {/* image */}
          <div className="mt-32 ml-32">
            <Image
              src="/page-image.svg"
              alt="page image"
              width="421"
              height="418"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
