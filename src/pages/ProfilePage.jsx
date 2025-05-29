import { useState } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("Martin Johnson");
  const [bio, setBio] = useState("Hi Everyone, I am Using QuickChat");

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-4xl  backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
        <form className="flex flex-col gap-5 p-10 flex-1" action="">
          <h3 className="text-lg">Profile details</h3>
          <label
            htmlFor="avator"
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id="avator"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : assets.avatar_icon
              }
              alt=""
              className={`w-12 h-12 ${selectedImg && "rounded-full"}`}
            />
            upload profile image
          </label>
          <input
            onChange={() => setName(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            type="text"
            value={name}
            placeholder="Your name"
            required
          />
          <textarea
            onChange={() => setBio(e.target.value)}
            value={bio}
            rows={4}
            placeholder="Write profile bio"
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            required
          ></textarea>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer"
          >
            Save
          </button>
        </form>
        <img
          className="max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10"
          src={assets.logo_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfilePage;
