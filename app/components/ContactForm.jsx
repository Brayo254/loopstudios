"use client";

import React, { useState } from "react";
import { FaPhone, FaMap, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const emailRegex =
    /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Fixed: lowercase 'i'
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "Firstname cannot be empty!";
    if (!formData.lastName.trim())
      newErrors.lastName = "LastName cannot be empty!";

    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty!";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Wrong email format";
    }

    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty!";

    setError(newErrors);

    // ONLY proceed if NO validation errors
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus({
        type: "",
        message: "",
      });

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          setSubmitStatus({
            type: "success",
            message: "Message sent successfully! We'll get back to you soon.",
          });

          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        } else {
          setSubmitStatus({
            type: "error",
            message: result.message || "Failed to send. Please try again.", // Fixed typo
          });
        }
      } catch (err) {
        console.error("Error:", err);
        setSubmitStatus({
          type: "error",
          message: "Network error. Please check your connection and try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  return (
    <>
      <section className="bg-grey200 p-5 md:h-screen md:flex md:flex-row">
        {/* left */}
        <div className="md:w-[60%] md:flex md:justify-center md:items-start md:flex-col md:p-4 ">
          <div className="mb-3 flex justify-center">
            <h1 className="text-2xl md:text-6xl  font-bold">Get in Touch</h1>
          </div>
          <div className="md:w-full mb-3 flex justify-center">
            <p className="text-lg">
              Whether you have questions or want to schedule a consultation, our
              experienced team is ready to assist you with professionalism and
              care.
            </p>
          </div>

          <div className=" w-full flex justify-center flex-col items-center md:flex md:flex-col md:w-[300px] p-2 md:justify-center md:items-center">
            <div className="flex flex-row justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
              <div className=" md:flex md:justify-center">
                <FaEnvelope className="text-2xl mr-1.5 md:mt-4" />
              </div>
              <div className="md:flex md:flex-col md:items-start md:ml-3">
                <p className="md:text-2xl">Email</p>
                <p className="md:text-lg">help@loopstudios.com</p>
              </div>
            </div>
            <div className="flex flex-row mb-1.5 justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
              <div className="flex">
                <FaMap className="text-2xl mr-1.5 md:mt-4" />
              </div>
              <div className="md:flex md:flex-col md:items-start p-3">
                <p className="md:text-2xl">Location</p>
                <p className="md:text-lg">Mombasa, Kenya</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
              <div className="flex justify-center ">
                <FaPhone className="text-2xl mr-1.5 md:mt-4" />
              </div>
              <div className="md:flex md:flex-col md:items-start p-3">
                <p className="md:text-2xl">Phone</p>
                <p className="md:text-lg">+254 123 456 789</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="md:w-[40%] bg-white md:flex md:flex-col md:justify-center md:items-center p-3.5">
          <form
            onSubmit={handleSubmit}
            className="bg-grey200 p-5 md:w-[500px] md:h-[800px] md:flex md:justify-center md:items-center md:flex-col"
          >
            {/* Status Message */}
            {submitStatus.message && (
              <div
                className={`mb-4 p-3 rounded-md w-full ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="md:p-5 mb-4 md:justify-center">
              <div>
                {error.firstName && (
                  <p className="text-red-500">{error.firstName}</p>
                )}
              </div>
              <label htmlFor="" className="md:mr-[25px]">
                First Name
              </label>
              <input
                className="border-2 border-black h-[40px] rounded-lg w-full"
                type="text"
                placeholder="First name"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="md:p-5 mb-2 md:justify-center relative">
              {error.lastName && (
                <p className="text-red-500">{error.lastName}</p>
              )}

              <label htmlFor="" className="md:mr-[25px]">
                Last Name
              </label>
              <input
                className="border-2 border-black h-[40px] rounded-lg w-full"
                type="text"
                placeholder="Last name"
                onChange={handleChange}
                value={formData.lastName}
                id="lastName"
                name="lastName"
                disabled={isSubmitting}
              />
            </div>
            <div className="md:p-5 mb-2 md:justify-center">
              {error.email && <p className="text-red-500">{error.email}</p>}
              <label htmlFor="" className="md:mr-[25px]">
                Email Address
              </label>
              <input
                className="border-2 border-black h-[40px] rounded-lg w-full"
                type="text"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                disabled={isSubmitting}
              />
            </div>
            <div className="md:p-5 mb-2">
              {error.message && (
                <p className="text-red-500">{error.message} </p>
              )}
              <label htmlFor="" className="md:mr-[25px]">
                Message
              </label>
              <textarea
                className="border-2 border-black rounded-lg h-[100px] w-full"
                name="message"
                id="message"
                placeholder="Write your message"
                onChange={handleChange}
                value={formData.message}
                disabled={isSubmitting}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`cursor-pointer bg-black text-grey200 w-full md:w-[400px] p-3.5 hover:text-black hover:bg-white hover:rounded-sm hover:border hover:border-black ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
