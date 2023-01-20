import { useState } from "react";

export const Dropdown = ({
  titel,
  required,
  list,
  placeholder,
  helper,
  value,
  onChange,
  disabled,
  danger,
}) => {
  const [dropDown, setDropDown] = useState(false);
  let list_filter = list;

  if (value) {
    list_filter = list.filter((e) => {
      return e.label.toLowerCase().includes(value.toLowerCase());
    });
  }

  return (
    <div className="w-full max-w-xs py-2">
      {/* title */}
      <div className="flex items-center py-2">
        <span className="text-[#1A2128] font-medium">{titel}</span>
        {required && <span className="text-[#A74032] font-medium">*</span>}
        <span className="px-1">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99999 10.6V8.99999H9.53333C10.417 8.99999 11.1333 8.28365 11.1333 7.39999V7.29333C11.1333 6.46858 10.4647 5.79999 9.63999 5.79999H8.99999C8.11634 5.79999 7.39999 6.51634 7.39999 7.39999M8.46666 12.2H9.53333M8.99999 16.4667C4.87627 16.4667 1.53333 13.1237 1.53333 8.99999C1.53333 4.87627 4.87627 1.53333 8.99999 1.53333C13.1237 1.53333 16.4667 4.87627 16.4667 8.99999C16.4667 13.1237 13.1237 16.4667 8.99999 16.4667Z"
              stroke="#434D56"
              strokeWidth="1.5"
            />
          </svg>
        </span>
      </div>

      {/* input section */}
      <div className="relative" onClick={() => setDropDown(!dropDown)}>
        {/* input */}
        <input
          placeholder={placeholder}
          className={`focus:outline-none pl-12 border border-[#DFDFDF] py-2.5 rounded-lg w-full ${
            !disabled && !danger
              ? `hover:border-[#99C2C1] focus:border-[#338583]`
              : `hover:border-[#DCB3AD] focus:border-[#B9665B]`
          }`}
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={value}
          disabled={disabled}
        />

        {/* icon depan input */}
        <div className="absolute top-px left-px">
          <div className="mt-1.5 px-4 py-2.5 ">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4 6.99998C13.4 10.5346 10.5346 13.4 6.99998 13.4C3.46535 13.4 0.599976 10.5346 0.599976 6.99998C0.599976 3.46535 3.46535 0.599976 6.99998 0.599976C10.5346 0.599976 13.4 3.46535 13.4 6.99998ZM7.79998 10.2C7.79998 10.6418 7.4418 11 6.99998 11C6.55815 11 6.19998 10.6418 6.19998 10.2C6.19998 9.75815 6.55815 9.39997 6.99998 9.39997C7.4418 9.39997 7.79998 9.75815 7.79998 10.2ZM6.99998 2.99998C6.55815 2.99998 6.19998 3.35815 6.19998 3.79998V6.99998C6.19998 7.4418 6.55815 7.79998 6.99998 7.79998C7.4418 7.79998 7.79998 7.4418 7.79998 6.99998V3.79998C7.79998 3.35815 7.4418 2.99998 6.99998 2.99998Z"
                fill="#A74032"
              />
            </svg>
          </div>
        </div>

        {/* icon panah atas & bawah */}
        <div className="absolute top-4 right-3 cursor-pointer visible peer-focus:invisible">
          {dropDown ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.28 10.0333L8.9333 5.68664C8.41997 5.1733 7.57997 5.1733 7.06664 5.68664L2.71997 10.0333"
                stroke="#1A2128"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33313 6.40015L8.53313 9.60015L11.7331 6.40015"
                stroke="black"
                strokeLinecap="square"
              />
            </svg>
          )}
        </div>

        {/* pilihan dropdown*/}
        {dropDown && list && (
          <div className="absolute shadow-xl z-50 w-full border mt-8 bg-white rounded-lg">
            {list_filter.map((e, i) => {
              return (
                <div
                  onClick={() => {
                    console.log(`${e.label}`);
                    onChange(e.label);
                    setDropDown(false);
                  }}
                  key={i}
                  className={`cursor-pointer w-full px-4 py-1.5 ${
                    danger ? "hover:bg-[#DCB3AD]" : "hover:bg-[#CCE0E0] "
                  }`}
                >
                  <div className="flex items-center ">
                    <div className="font-medium">{e.label}</div>
                    <div className="mt-1 ml-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99999 10.6V8.99999H9.53333C10.417 8.99999 11.1333 8.28365 11.1333 7.39999V7.29333C11.1333 6.46858 10.4647 5.79999 9.63999 5.79999H8.99999C8.11634 5.79999 7.39999 6.51634 7.39999 7.39999M8.46666 12.2H9.53333M8.99999 16.4667C4.87627 16.4667 1.53333 13.1237 1.53333 8.99999C1.53333 4.87627 4.87627 1.53333 8.99999 1.53333C13.1237 1.53333 16.4667 4.87627 16.4667 8.99999C16.4667 13.1237 13.1237 16.4667 8.99999 16.4667Z"
                          stroke="#434D56"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs">{e.helper}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* helper text */}
      <div className="text-[#1A2128] font-medium py-2">{helper}</div>
    </div>
  );
};
