import React, { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    pincode: "",
    city: "",
    state: "",
    flatNo: "",
    area: "",
    landmark: "",
    addressType: "HOME",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddressTypeChange = (type) => {
    setFormData({ ...formData, addressType: type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // Proceed to payment or handle form submission here
    navigate("/payment"); // Redirect to payment page
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Wrapping the form in a flex container for centering */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Add Address</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full border p-2 rounded mb-3"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              className="w-full border p-2 rounded mb-3"
              required
            />
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              placeholder="Pincode/Postal Code/Zipcode"
              className="w-full border p-2 rounded mb-3"
              required
            />
            <div className="flex space-x-4 mb-3">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <input
              type="text"
              name="flatNo"
              value={formData.flatNo}
              onChange={handleInputChange}
              placeholder="Flat no/Building, Street name"
              className="w-full border p-2 rounded mb-3"
              required
            />
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              placeholder="Area/Locality"
              className="w-full border p-2 rounded mb-3"
              required
            />
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleInputChange}
              placeholder="Landmark (Optional)"
              className="w-full border p-2 rounded mb-3"
            />

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Save Address As
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`border py-2 px-4 rounded-md ${
                    formData.addressType === "HOME"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleAddressTypeChange("HOME")}
                >
                  HOME
                </button>
                <button
                  type="button"
                  className={`border py-2 px-4 rounded-md ${
                    formData.addressType === "OFFICE"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleAddressTypeChange("OFFICE")}
                >
                  OFFICE
                </button>
                <button
                  type="button"
                  className={`border py-2 px-4 rounded-md ${
                    formData.addressType === "OTHER"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleAddressTypeChange("OTHER")}
                >
                  OTHER
                </button>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-6 rounded-md"
              >
                CONTINUE
              </button>
              <button
                type="button"
                className="border py-2 px-6 rounded-md text-gray-700"
                onClick={() => navigate(-1)} // Go back to the previous page
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Checkout;
