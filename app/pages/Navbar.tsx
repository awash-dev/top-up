"use client";

import { auth } from "@/Firebase";
import { useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

const Navbar: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const provider = new GoogleAuthProvider();

  const handleLogin = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user: User = result.user;
      const profileImageUrl = user.photoURL;
      setProfileImage(profileImageUrl);
      localStorage.setItem("profilePic", profileImageUrl || "");
      console.log("Profile Image URL:", profileImageUrl);
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedProfilePic = localStorage.getItem("profilePic");
    if (storedProfilePic) {
      setProfileImage(storedProfilePic);
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfileImage(user.photoURL);
      } else {
        setProfileImage(null);
        localStorage.removeItem("profilePic");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async (): Promise<void> => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      setProfileImage(null); // Clear profile image on sign out
      localStorage.removeItem("profilePic"); // Clear local storage on sign out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="w-full h-[80px] flex items-center">
      <div className="h-[80px] bg-blue-950/90 w-full fixed z-50 flex items-center justify-around xl:justify-between text-center">
        <div>
          <h1 className="h1 sm:pl-20 pl-5 text-[25px]">TOP-UP</h1>
        </div>
        <div>
          <ul className="hidden xl:flex sm:gap-4">
            <li>
              <a className="hover:border-b-2" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:border-b-2" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:border-b-2" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="relative xl:pr-32 pr-10">
            {profileImage ? (
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div
                    className="opacity-0 hover:opacity-70 cursor-pointer absolute  left-0 bg-white  text-black p-2 rounded-full transition-opacity duration-300"
                    onClick={handleSignOut}
                  >
                    Log Out
                  </div>
                  <img
                    src={profileImage}
                    width={60}
                    height={60}
                    alt="Profile"
                    className="rounded-full cursor-pointer z-10  "
                    onError={() => setProfileImage(null)} // Reset if image fails to load
                  />
                </div>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="border-2 text-[20px] px-6 p-2 rounded-[9px] hover:bg-white hover:text-black transition-all duration-300"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Loading..." : "Login"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
