import { useState } from "react";

export const Attachment = ({
  titel,
  required,
  placeholder,
  helper,
  value,
  onChange,
  disabled,
}) => {
  const [nameFile, setNameFile] = useState("");
  return (
    <div className="w-full max-w-lg py-2">
      {/* title */}
      <label htmlFor={`input_file_${titel}`} className="flex items-center py-2">
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
        <div className="flex items-center">
          <input
            id={`input_file_${titel}`}
            type="file"
            className="w-full border absolute top-px left-px py-2 opacity-0 peer"
            onChange={(e) => {
              setNameFile(e.target.files[0].name);
              onChange(e.target.files[0].name);
            }}
          />
          <input
            placeholder={placeholder}
            className="disabled:bg-[#F7F7F7] disabled:border-[#E1E1E1] focus:outline-none pl-12 border border-[#DFDFDF] py-2.5 rounded-lg w-full peer-hover:border-[#99C2C1] peer-focus:border-[#338583]"
            type="text"
            value={nameFile}
            disabled={disabled}
            readOnly
          />
          <button className="flex items-center bg-[#006664] text-white font-bold px-4 py-2.5 ml-2 rounded-lg">
            <span className="px-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.80001 7.93333L2.417 11.3163C1.8512 11.8821 1.53334 12.6495 1.53334 13.4497C1.53334 15.1159 2.88409 16.4667 4.55033 16.4667C5.35048 16.4667 6.11787 16.1488 6.68366 15.583L10.0667 12.2M12.2 10.0667L15.583 6.68365C16.1488 6.11785 16.4667 5.35047 16.4667 4.55031C16.4667 2.88408 15.1159 1.53333 13.4497 1.53333C12.6495 1.53333 11.8821 1.85118 11.3164 2.41698L7.93334 5.79999M5.80001 12.2L12.2 5.79999"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <span>Label</span>
            <span className="px-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.80001 7.93333L2.417 11.3163C1.8512 11.8821 1.53334 12.6495 1.53334 13.4497C1.53334 15.1159 2.88409 16.4667 4.55033 16.4667C5.35048 16.4667 6.11787 16.1488 6.68366 15.583L10.0667 12.2M12.2 10.0667L15.583 6.68365C16.1488 6.11785 16.4667 5.35047 16.4667 4.55031C16.4667 2.88408 15.1159 1.53333 13.4497 1.53333C12.6495 1.53333 11.8821 1.85118 11.3164 2.41698L7.93334 5.79999M5.80001 12.2L12.2 5.79999"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* icon depan input */}
        <div className="absolute top-px left-px mt-1.5 px-4 py-2.5 ">
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

      {/* helper text */}
      <div className="text-[#1A2128] font-medium py-2">{helper}</div>
    </div>
  );
};
