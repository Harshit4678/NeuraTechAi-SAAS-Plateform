import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Email is invalid";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFocus(e) {
    setFocus({ ...focus, [e.target.name]: true });
  }

  function handleBlur(e) {
    setFocus({ ...focus, [e.target.name]: false });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }, 1500);
    }
  }

  const getLabelClasses = (field) => {
    return `absolute left-3 text-sm text-gray-500 transition-all
      ${
        focus[field] || formData[field] !== ""
          ? "top-0 text-blue-600"
          : "top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400"
      }`;
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-center mb-10">
          <div className="flex justify-center text-blue-600 text-4xl mb-3">
            <FaEnvelopeOpenText />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6 text-left"
        >
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=" "
              className={`peer w-full border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600
                ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            <label htmlFor="name" className={getLabelClasses("name")}>
              Your Name
            </label>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=" "
              className={`peer w-full border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600
                ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            <label htmlFor="email" className={getLabelClasses("email")}>
              Your Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder=" "
              rows="5"
              className={`peer w-full border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none
                ${errors.message ? "border-red-500" : "border-gray-300"}`}
            ></textarea>
            <label htmlFor="message" className={getLabelClasses("message")}>
              Your Message
            </label>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </Motion.button>
        </form>

        {/* Success Message */}
        {submitted && (
          <Motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-green-600 font-semibold"
          >
            Thank you for reaching out! We will get back to you soon.
          </Motion.p>
        )}
      </div>
    </section>
  );
}
