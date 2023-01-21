import { useState } from "react";

export const Input = ({
  titel,
  required,
  currency,
  placeholder,
  helper,
  value,
  onChange,
  disabled,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [simbol, setSimbol] = useState(0);

  return (
    <div className="w-full max-w-lg py-2">
      {/* title */}
      <label htmlFor={`input_${titel}`} className="flex items-center py-2">
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
      </label>

      {/* input section */}
      <div className="relative">
        {/* input */}
        <input
          id={`input_${titel}`}
          placeholder={placeholder}
          className={`focus:outline-none border border-[#DFDFDF] py-2.5 rounded-lg w-full ${
            disabled
              ? `pl-16`
              : `pl-24 hover:border-[#99C2C1]  focus:border-[#338583]`
          }`}
          type="text"
          onChange={(e) => onChange(e.target.value)}
          onClick={() => setDropDown(false)}
          value={value}
          disabled={disabled}
        />

        {/* drop down depan input */}
        <div
          onClick={() => setDropDown(!dropDown)}
          className="absolute top-px left-px cursor-pointer"
        >
          <div className="flex items-center px-4 py-2.5 bg-[#F1F1F1] rounded-l-lg">
            <span className="font-bold">
              {currency ? currency[simbol] : "Rp"}
            </span>
            {!disabled && (
              <span className="mt-1 px-2">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.800049 0.93335L4.00005 4.13335L7.20005 0.93335"
                    stroke="#6C6C6C"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>

        {/* pilihan dropdown*/}
        {dropDown && currency ? (
          <div className="absolute cursor-pointer shadow-xl z-50">
            <div className=" border mt-8  py-2.5 bg-white ">
              {currency.map((e, i) => {
                return (
                  <div
                    onClick={() => {
                      setSimbol(i);
                      setDropDown(false);
                    }}
                    key={i}
                    className="hover:bg-[#F1F1F1] w-full px-6"
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* icon silang */}
        <div
          onClick={() => onChange("")}
          className={
            value && !disabled
              ? "absolute top-4 right-3 cursor-pointer"
              : "hidden"
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00004 14.6667C11.6667 14.6667 14.6667 11.6667 14.6667 8.00004C14.6667 4.33337 11.6667 1.33337 8.00004 1.33337C4.33337 1.33337 1.33337 4.33337 1.33337 8.00004C1.33337 11.6667 4.33337 14.6667 8.00004 14.6667Z"
              stroke="#1A2128"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.11328 9.88661L9.88661 6.11328"
              stroke="#1A2128"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.88661 9.88661L6.11328 6.11328"
              stroke="#1A2128"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* helper text */}
      <div className="text-[#1A2128] font-medium py-2">{helper}</div>
    </div>
  );
};
