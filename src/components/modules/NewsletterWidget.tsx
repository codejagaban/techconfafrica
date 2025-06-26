import React from "react";
import userIcon from "../../images/user-icon.svg";
import mailIcon from "../../images/mail-icon.svg";
import mailIconWhite from "../../images/mail-white.svg";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const locationOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const animatedComponents = makeAnimated();
function NewsLetterWidget() {
  // const [selectedOption, setSelectedOption] = useState("");
  // const handleSelectChange = (e) => {
  //   // Update state or perform actions based on the new selection (newValue)
  //   setSelectedOption(e.value);
  // };
  return (
    <form className="border p-4 rounded-2xl bg-gray-50">
      <div className="form-group relative">
        <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="block w-full rounded-lg py-2 px-10 border border-gray-300 outline-black"
          placeholder="Enter name or nickname"
        />
        <img src={userIcon.src} className="absolute top-9 left-3" />
      </div>
      <div className="form-group relative mt-5">
        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
          Email Address
        </label>
        <input
          type="email"
          required
          name="email"
          className="block w-full rounded-lg py-2 px-10 border border-gray-300 outline-black"
          placeholder="Enter a valid email address"
        />
        <img src={mailIcon.src} className="absolute top-9 left-3" />
      </div>

      <div className="form-group mt-5">
        <label htmlFor="location" className="block text-sm text-gray-600 mb-1">
          Location preference
        </label>
        <Select
          defaultValue={[locationOptions[1], locationOptions[2]]}
          options={locationOptions}
          isMulti
          name="location"
          components={animatedComponents}
          placeholder="select your preferred location(s)"
          unstyled
          classNames={{
            control: () =>
              "block w-full rounded-lg py-1.5 px-5 bg-white border border-gray-300 outline-black placeholder:text-gray-500",
            multiValue: () =>
              "bg-gray-50 py-1 px-2 rounded-full mr-2 text-gray-700 border border-gray-300 text-sm",
            multiValueRemove: () => "hover:text-red-600",
            menuList: () => "p-3 rounded-lg bg-white border ",
            clearIndicator: () => "cursor:pointer",
            placeholder: () => "text-gray-400",
            option: () => "p-2 hover:bg-gray-50 rounded-lg text-sm",
          }}
        />
        <p className="text-gray-500 text-sm mt-1">
          We'll send you newsletter of events happening in these locations.
        </p>
      </div>

      <div className="form-group mt-5">
        <label htmlFor="profession" className="block text-sm text-gray-600 mb-1">
          Profession
        </label>
        <Select
          defaultValue={[locationOptions[1], locationOptions[2]]}
          options={locationOptions}
          isMulti
          name="profession"
          components={animatedComponents}
          placeholder="select your preferred location(s)"
          unstyled
          classNames={{
            control: () =>
              "block w-full rounded-lg py-1.5 px-5 bg-white border border-gray-300 outline-black placeholder:text-gray-500",
            multiValue: () =>
              "bg-gray-50 py-1 px-2 rounded-full mr-2 text-gray-700 border border-gray-300 text-sm",
            multiValueRemove: () => "hover:text-red-600",
            menuList: () => "p-3 rounded-lg bg-white border ",
            clearIndicator: () => "cursor:pointer",
            placeholder: () => "text-gray-400",
            option: () => "p-2 hover:bg-gray-50 rounded-lg text-sm",
          }}
        />
        <p className="text-gray-500 text-sm mt-1">
          We'll send you newsletter of events that targets these professions..
        </p>
        <div className="mt-5">
          <button
            type="submit"
            className="rounded-lg border-solid border py-3 w-full text-center px-10 text-base text-white bg-zinc-800 hover:bg-black flex justify-center items-center"
          >
            <span>Subscribe</span> <img src={mailIconWhite.src} className="ml-2" />{" "}
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewsLetterWidget;
