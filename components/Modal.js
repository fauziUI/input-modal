export const Modal = ({
  shown,
  close,
  type,
  titel,
  body,
  link,
  button1,
  button2,
  button3,
  click,
}) => {
  return shown ? (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        onClick={close}
      >
        <div
          className="bg-white rounded-lg shadow-lg w-full max-w-lg"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          {type === "success" ? (
            <div className="w-full bg-[#006664] h-14 flex items-center rounded-t-lg">
              <span className="px-5">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.40005 13L12.2 17L18.6 9.00005M13 24.2C6.81446 24.2 1.80005 19.1856 1.80005 13C1.80005 6.81446 6.81446 1.80005 13 1.80005C19.1856 1.80005 24.2 6.81446 24.2 13C24.2 19.1856 19.1856 24.2 13 24.2Z"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
              </span>
              <span className="text-white font-bold">{titel}</span>
            </div>
          ) : null}

          {type === "alert" ? (
            <div className="w-full bg-[#8E601F] h-14 flex items-center rounded-t-lg">
              <span className="px-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.76 15.92L15.36 4.4C14.5 2.85 13.31 2 12 2C10.69 2 9.49998 2.85 8.63998 4.4L2.23998 15.92C1.42998 17.39 1.33998 18.8 1.98998 19.91C2.63998 21.02 3.91998 21.63 5.59998 21.63H18.4C20.08 21.63 21.36 21.02 22.01 19.91C22.66 18.8 22.57 17.38 21.76 15.92ZM11.25 9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V14C12.75 14.41 12.41 14.75 12 14.75C11.59 14.75 11.25 14.41 11.25 14V9ZM12.71 17.71C12.66 17.75 12.61 17.79 12.56 17.83C12.5 17.87 12.44 17.9 12.38 17.92C12.32 17.95 12.26 17.97 12.19 17.98C12.13 17.99 12.06 18 12 18C11.94 18 11.87 17.99 11.8 17.98C11.74 17.97 11.68 17.95 11.62 17.92C11.56 17.9 11.5 17.87 11.44 17.83C11.39 17.79 11.34 17.75 11.29 17.71C11.11 17.52 11 17.26 11 17C11 16.74 11.11 16.48 11.29 16.29C11.34 16.25 11.39 16.21 11.44 16.17C11.5 16.13 11.56 16.1 11.62 16.08C11.68 16.05 11.74 16.03 11.8 16.02C11.93 15.99 12.07 15.99 12.19 16.02C12.26 16.03 12.32 16.05 12.38 16.08C12.44 16.1 12.5 16.13 12.56 16.17C12.61 16.21 12.66 16.25 12.71 16.29C12.89 16.48 13 16.74 13 17C13 17.26 12.89 17.52 12.71 17.71Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-white font-bold">{titel}</span>
            </div>
          ) : null}

          {type === "info" ? (
            <div className="w-full bg-[#0264AD] h-14 flex items-center rounded-t-lg">
              <span className="px-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM11.2 7.99998V6.38398H12.8V7.99998H11.2ZM12.8 11.2V16H14.4V17.6H9.6V16H11.2V12.8H9.6V11.2H12.8Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-white font-bold">{titel}</span>
            </div>
          ) : null}

          {type === "danger" ? (
            <div className="w-full bg-[#A74032] h-14 flex items-center rounded-t-lg">
              <span className="px-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6.97909 6.97909C7.39565 6.56253 8.07102 6.56253 8.48758 6.97909L12 10.4915L15.5124 6.97909C15.929 6.56253 16.6044 6.56253 17.0209 6.97909C17.4375 7.39565 17.4375 8.07102 17.0209 8.48758L13.5085 12L17.0209 15.5124C17.4375 15.929 17.4375 16.6044 17.0209 17.0209C16.6044 17.4375 15.929 17.4375 15.5124 17.0209L12 13.5085L8.48758 17.0209C8.07102 17.4375 7.39565 17.4375 6.97909 17.0209C6.56253 16.6044 6.56253 15.929 6.97909 15.5124L10.4915 12L6.97909 8.48758C6.56253 8.07102 6.56253 7.39565 6.97909 6.97909Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-white font-bold">{titel}</span>
            </div>
          ) : null}

          <div className="text-sm p-4">{body}</div>
          <div className="flex items-center justify-between px-4">
            <span className="text-sm text-[#006664] font-bold">{link}</span>
            <span className="cursor-pointer hover:scale-105">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2 12.2001V15.4001C12.2 15.9892 11.7224 16.4668 11.1333 16.4668H2.59999C2.01089 16.4668 1.53333 15.9892 1.53333 15.4001V6.86678C1.53333 6.27768 2.01089 5.80011 2.59999 5.80011H5.79999M5.79999 2.60011V11.1334C5.79999 11.7225 6.27755 12.2001 6.86666 12.2001H15.4C15.9891 12.2001 16.4667 11.7226 16.4667 11.1334V2.60011C16.4667 2.01101 15.9891 1.53345 15.4 1.53345H6.86666C6.27755 1.53345 5.79999 2.01101 5.79999 2.60011Z"
                  stroke="#A9B2B9"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center justify-end p-4">
            {type === "alert" ? (
              <button
                onClick={click}
                className=" hover:scale-105 px-6 py-2.5 mx-2 font-bold"
              >
                {button3}
              </button>
            ) : null}
            <button
              onClick={click}
              className=" hover:scale-105 px-6 py-2.5 mx-2 font-bold"
            >
              {button2}
            </button>
            <button
              onClick={click}
              className={`hover:scale-105 px-6 py-2.5 mx-2 text-white rounded-lg ${
                type === "success"
                  ? "bg-[#006664]"
                  : type === "alert"
                  ? "bg-[#8E601F]"
                  : type === "info"
                  ? "bg-[#0264AD]"
                  : type === "danger"
                  ? "bg-[#A74032]"
                  : null
              }`}
            >
              {button1}
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
