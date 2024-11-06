import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

Modal.setAppElement("#root");

export const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState(null); // State for profile picture

  useEffect(() => {
    setName(localStorage.getItem("username") || "");
    setEmail(localStorage.getItem("useremail") || "");
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", name);
    localStorage.setItem("useremail", email);
    if (profilePic) {
      // You can handle profile picture upload logic here if needed
    }
    setIsEditing(false);
  };

  const openPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const closePasswordModal = () => {
    setShowPasswordModal(false);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert("Password updated successfully!");
    closePasswordModal();
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-2xl mb-5">Account Details</h1>
      <form
        onSubmit={handleSubmit}
        className="w-72 p-4 border border-gray-300 rounded-lg"
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-red-600 text-white rounded-lg px-4 py-1"
            onClick={handleEdit}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>
        <div className="mt-4">
          <label>Profile Picture</label>
          <input
            type="file"
            className="w-full"
            onChange={handleProfilePicChange}
            disabled={!isEditing}
          />
          {profilePic && (
            <img
              src={profilePic}
              alt="Profile Preview"
              className="mt-2 w-20 h-20 rounded-full"
            />
          )}
        </div>
        <div className="mt-4">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            disabled={!isEditing}
          />
        </div>
        <div className="mt-4">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            disabled={!isEditing}
          />
        </div>
        <div className="mt-4">
          <label>Password</label>
          <input
            type="password"
            value="**********"
            className="w-full p-2 border border-gray-300 rounded-lg cursor-pointer"
            disabled={!isEditing}
            onClick={openPasswordModal}
          />
        </div>
        {isEditing && (
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 mt-5 rounded-lg"
          >
            Save
          </button>
        )}
      </form>

      {/* Password Change Modal */}
      <Modal
        isOpen={showPasswordModal}
        onRequestClose={closePasswordModal}
        contentLabel="Change Password Modal"
        className="flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <form onSubmit={handlePasswordChange}>
            <div className="mt-4">
              <label className="block text-sm font-medium">
                Current Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">New Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-2 mt-5 rounded-lg"
            >
              Save
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default UserProfile;
