import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../css/Profile.css";
import "../css/Login.css";
import "react-phone-number-input/style.css";
import { useAuth } from "../hook/useAuth";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import PhoneInput from "react-phone-number-input";
import {
  GetProfileUserService,
  ProfileUpdateService,
} from "../Service/AuthService";
import toast, { Toaster } from "react-hot-toast";
import AuthLayout from "./layouts/AuthLayout";

const Profile = () => {
  const { user } = useAuth();
  const [userName, setUserName] = useState("");

  const isMounted = useRef(false);
  const [formData, setFormData] = useState({
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone ? "+" + user.phone.toString() : "",
    image: user.image
      ? user.image
      : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  });

  const GetUserInfo = useCallback(async () => {
    await GetProfileUserService(user._id).then((res) => {
      console.log(" -- GetUserInfo --", res);
      if (res.status === 200) {
        let data = res.data;
        setUserName(`${data.firstName} ${data.lastName}`);
        setFormData({
          _id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone ? "+" + data.phone.toString() : "",
          image: data.image,
        });
      }
    });
  }, [user._id]);

  useEffect(() => {
    if (!isMounted.current) {
      GetUserInfo();
      isMounted.current = true;
    }
  }, [GetUserInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangePhone = (e) => {
    setFormData({
      ...formData,
      phone: e,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await ProfileUpdateService(formData).then(async (res) => {
      console.log("Update Profile Res -- ", res);
      if (res.code === "ERR_BAD_REQUEST") {
        toast.error(res.response.data.message);
      } else if (res.code === "ERR_NETWORK") {
        toast.error(res.message);
      } else if (res.status) {
        toast.success(res.data.message);
        await GetUserInfo();
      }
    });
  };

  return (
    <>
      <AuthLayout>
        <section className="profile-section">
          <Toaster />
          <div className="container">
            <div className="profile-content">
              <div className="p-2 md:p-4">
                <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                  <h2 className="pl-6 text-2xl font-bold sm:text-xl mt-3">
                    My profile
                  </h2>
                  <div className="mt-6 profile-img">
                    <img
                      className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                      src={formData.image}
                      alt={user.firstName.toLowerCase() + "_img"}
                    />
                  </div>
                  <h2 className="pl-6 text-2xl font-bold sm:text-xl mt-3">
                    {userName}
                  </h2>
                  <div className="grid max-w-2xl mx-auto">
                    <div className="items-center mt-8 text-[#202142]">
                      <form onSubmit={handleSubmitForm}>
                        <div className="flex flex-col w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                          <div className="form-group">
                            <label htmlFor="firstName">
                              <FaUser />
                            </label>
                            <Input
                              type="text"
                              name="firstName"
                              id="firstName"
                              placeholder="First Name *"
                              value={formData.firstName}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-group">
                            <Input
                              type="text"
                              name="lastName"
                              id="lastName"
                              placeholder="Last Name *"
                              value={formData.lastName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">
                            <IoMdMail />
                          </label>
                          <Input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>

                        <PhoneInput
                          defaultCountry="IN"
                          placeholder="Enter phone number"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChangePhone}
                        />

                        <div className="flex justify-end">
                          <Button name="Save" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AuthLayout>
    </>
  );
};

export default Profile;
