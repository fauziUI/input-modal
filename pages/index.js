import { useState } from "react";
import { Input } from "../components/Input";
import { Dropdown } from "../components/Dropdown";

export default function Home() {
  const [value, setValue] = useState("");
  const [valueDropdown, setValueDropdown] = useState("");
  const [valueDropdownDanger, setValueDropdownDanger] = useState("");

  return (
    <>
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
        value="Input placeholder"
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
    </>
  );
}
