import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-44 cursor-pointer"
        src={LOGO}
        alt="netflix-logo"
        onClick={toggleDropdown}
      />
      <div className="relative">
        {user && (
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            alt="user-icon"
            src={user?.photoURL}
            onClick={toggleDropdown}
          />
        )}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg p-2">
            <button
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
