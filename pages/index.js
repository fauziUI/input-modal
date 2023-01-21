import { useState } from "react";
import { Input } from "../components/Input";
import { Dropdown } from "../components/Dropdown";
import { Modal } from "../components/Modal";
import { Attachment } from "../components/Attachment";

export default function Home() {
  const [value, setValue] = useState("");
  const [valueDropdown, setValueDropdown] = useState("");
  const [valueDropdownDanger, setValueDropdownDanger] = useState("");
  const [valueDropdownMultiple, setValueDropdownMultiple] = useState("");
  const [valueFile, setValueFile] = useState(null);

  const [showModal, setShowModal] = useState("");

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

          <Attachment
            titel="Label"
            required
            placeholder="Input placeholder"
            onChange={setValueFile}
            value={valueFile}
            helper="Input helper text"
          />
        </div>
      </div>

      <div className="md:flex justify-around underline text-blue-500 cursor-pointer py-4">
        <div
          onClick={() => setShowModal("modalSukses")}
          className="hover:scale-105"
        >
          1. Test Modal Sukses
        </div>
        <div
          onClick={() => setShowModal("modalAlert")}
          className="hover:scale-105"
        >
          2. Test Modal Alert
        </div>
        <div
          onClick={() => setShowModal("modalInfo")}
          className="hover:scale-105"
        >
          3. Test Modal Info
        </div>
        <div
          onClick={() => setShowModal("modalDanger")}
          className="hover:scale-105"
        >
          4. Test Modal Danger
        </div>
      </div>

      <Modal
        shown={showModal === "modalSukses"}
        close={() => setShowModal("")}
        type="success"
        titel="Dialog Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos."
        link="https://juraganmaterial.id/reset/fghjk7827hrhrjj3"
        button1="Label"
        button2="Label"
        button3="Label"
        click={() => setShowModal("")}
      />

      <Modal
        shown={showModal === "modalAlert"}
        close={() => setShowModal("")}
        type="alert"
        titel="Dialog Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos."
        link="https://juraganmaterial.id/reset/fghjk7827hrhrjj3"
        button1="Label"
        button2="Label"
        button3="Label"
        click={() => setShowModal("")}
      />

      <Modal
        shown={showModal === "modalInfo"}
        close={() => setShowModal("")}
        type="info"
        titel="Dialog Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos."
        link="https://juraganmaterial.id/reset/fghjk7827hrhrjj3"
        button1="Label"
        button2="Label"
        button3="Label"
        click={() => setShowModal("")}
      />

      <Modal
        shown={showModal === "modalDanger"}
        close={() => setShowModal("")}
        type="danger"
        titel="Dialog Title"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos."
        link="https://juraganmaterial.id/reset/fghjk7827hrhrjj3"
        button1="Label"
        button2="Label"
        button3="Label"
        click={() => setShowModal("")}
      />
    </>
  );
}
