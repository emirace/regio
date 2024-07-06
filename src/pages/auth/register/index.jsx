import React, { useState } from "react";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import DrawerModal from "../../../components/Modals/DrawerModal";
import Button from "../../../components/Button";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TextInput from "../../../components/TextInput";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [tab, setTab] = useState("register");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const renderForm = () => {
    switch (tab) {
      case "register":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <TextInput
                label="Vorname"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextInput
                label="Nachname"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <TextInput
              label="E-Mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextInput
              label="Passwort erstellen"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              iconComponent={
                showPassword ? (
                  <IoEyeOffOutline
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoEyeOutline
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )
              }
            />
            <TextInput
              label="Passwort wiederholen"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              iconComponent={
                showConfirmPassword ? (
                  <IoEyeOffOutline
                    onClick={() => setShowConfirmPassword(!showPassword)}
                  />
                ) : (
                  <IoEyeOutline
                    onClick={() => setShowConfirmPassword(!showPassword)}
                  />
                )
              }
            />
            <div className="flex items-center space-x-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={formData.termsAccepted}
                name="termsAccepted"
                class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleChange}
              />

              <label className="text-sm">
                Ich akzeptiere die{" "}
                <Link to="#" className="underline font-medium">
                  AGB
                </Link>
              </label>
            </div>
            <Button type="submit" className="w-full rounded-lg">
              Registrieren
            </Button>
          </form>
        );
      case "login":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
              label="E-Mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextInput
              label="Passwort erstellen"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              iconComponent={
                showPassword ? (
                  <IoEyeOffOutline
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoEyeOutline
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )
              }
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  checked={formData.termsAccepted}
                  name="termsAccepted"
                  class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handleChange}
                />

                <label htmlFor="default-checkbox" className="text-sm">
                  Angemeldet bleiben
                </label>
              </div>
              <Link to="/auth/forgot-password" className="text-primary">
                Passwort vergessen
              </Link>
            </div>
            <Button type="submit" className="w-full rounded-lg">
              Anmelden
            </Button>
          </form>
        );

      default:
        break;
    }
  };

  return (
    <DrawerModal isRounded={true}>
      <div className="min-h-screen flex flex-col items-center md:justify-start justify-center">
        <div className=" w-full ">
          <div className="flex justify-around mb-6">
            <button
              onClick={() => setTab("register")}
              className={`flex items-center ${
                tab === "register"
                  ? "bg-primary text-white "
                  : "border border-gray-300 "
              }px-4 py-2 rounded-full focus:outline-none`}
            >
              <FaUserPlus className="mr-2" />
              Regestrieren
            </button>
            <button
              onClick={() => setTab("login")}
              className={`flex items-center px-4 py-2 rounded-full focus:outline-none ${
                tab === "login"
                  ? "bg-primary text-white "
                  : "border border-gray-300 "
              }`}
            >
              <FaSignInAlt className="mr-2" />
              Anmelden
            </button>
          </div>
          {renderForm()}
        </div>
        <Link to="/auth/register-seller" className="text-primary mt-4">
          Als Verkaufer regestieren
        </Link>
        <FaLocationDot className="text-primary z-20 absolute bottom-5 text-xl" />
      </div>
    </DrawerModal>
  );
};

export default Register;
