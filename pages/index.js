import { useState } from "react";
import { Input } from "../components/Input";

export default function Home() {
  const [value, setValue] = useState("");

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
    </>
  );
}
