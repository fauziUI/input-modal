import { useState } from "react";
import { Input } from "../components/Input";
import { Dropdown } from "../components/Dropdown";

export default function Home() {
  const [value, setValue] = useState("");
  const [valueDropdown, setValueDropdown] = useState("");
  const [valueDropdownDanger, setValueDropdownDanger] = useState("");
  const [valueDropdownMultiple, setValueDropdownMultiple] = useState("");

  return (
    <>
      <div className="flex items-center bg-blue-200 min-h-screen ">
        <div className="bg-white w-full max-w-lg mx-auto px-2 md:my-8 md:rounded-lg">
          <Input
            titel="Label"
            required
            currency={["Rp", "$", "€", "¥", "₹"]}
            placeholder="Input placeholder"
            onChange={setValue}
            value={value}
            helper="Input helper text"
          />

          <Input
            titel="Label"
            required
            placeholder="Input placeholder"
            helper="Input helper text"
            disabled
          />

          <Dropdown
            titel="Label"
            required
            list={[
              { label: "Label satu", helper: "Helper Text satu" },
              { label: "Label dua", helper: "Helper Text dua" },
              { label: "Label tiga", helper: "Helper Text tiga" },
              { label: "Label empat", helper: "Helper Text empat" },
              { label: "Label lima", helper: "Helper Text lima" },
            ]}
            placeholder="Input placeholder"
            onChange={setValueDropdown}
            value={valueDropdown}
            helper="Input helper text"
          />

          <Dropdown
            titel="Label"
            required
            list={[
              { label: "Label satu", helper: "Helper Text satu" },
              { label: "Label dua", helper: "Helper Text dua" },
              { label: "Label tiga", helper: "Helper Text tiga" },
              { label: "Label empat", helper: "Helper Text empat" },
              { label: "Label lima", helper: "Helper Text lima" },
            ]}
            placeholder="Input placeholder"
            onChange={setValueDropdownDanger}
            value={valueDropdownDanger}
            helper="Input helper text"
            danger
          />

          <Dropdown
            titel="Label"
            required
            list={[
              { label: "Label satu", helper: "Helper Text satu" },
              { label: "Label dua", helper: "Helper Text dua" },
              { label: "Label tiga", helper: "Helper Text tiga" },
              { label: "Label empat", helper: "Helper Text empat" },
              { label: "Label lima", helper: "Helper Text lima" },
            ]}
            placeholder="Input placeholder"
            onChange={setValueDropdownMultiple}
            value={valueDropdownMultiple}
            helper="Input helper text"
            multiple
          />

          <Dropdown
            titel="Label"
            required
            placeholder="Input placeholder"
            helper="Input helper text"
            disabled
          />
        </div>
      </div>
    </>
  );
}
