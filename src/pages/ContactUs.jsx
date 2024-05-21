import React, { useState } from "react";
import { useFormik } from "formik";
import { contactusSchema } from "../schema/contactusSchema";
const ContactUs = () => {

  const onSubmit = (values) => {
    console.log("Submitted")
    console.log(values)
  }
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: ""
    },
    validationSchema: contactusSchema,
    onSubmit
  });
  const [showInfo, setShowInfo] = useState(true);

  const closeContainer = () => {
    setShowInfo(false);
  };


  return (
    <>
      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 mx-auto">
          <h1 className="text-6xl font-medium title-font text-gray-900 mb-12 text-center">
            CONTACT US
          </h1>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container mx-auto grid gap-8 lg:grid-cols-3">
          <div className="h-[600px] lg:h-full lg:col-span-2 bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5143602432317!2d78.366001575166!3d17.435078583460236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ee678824ed%3A0x432c5d16526c95ee!2sJyothi%20Imperial%2C%20Old%20Mumbai%20Hwy%2C%20Janardana%20Hills%2C%20Lumbini%20Avenue%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1716293695014!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              loading="lazy"
            >
            </iframe>

            {showInfo && (
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Blumin LLP, 4th Floor, Jyothi Imperial Building, Old Mumbai Hway, Gachibowli, Hyderabad-500032
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:info@bluminiic.com"
                    className="text-indigo-500 leading-relaxed"
                  >
                    info@bluminiic.com
                  </a>
                </div>
                <button
                  className="absolute top-0 right-0 mr-4 mt-4 text-gray-600"
                  onClick={closeContainer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className="p-4 bg-white flex flex-col md:ml-auto w-full md:px-8 md:py-8 mt-8 md:mt-0 rounded-2xl">
            <p className="leading-relaxed mb-5 text-gray-600">
              We are here to answer any questions you may have about our
              services, collaborations, or partnerships. Reach out to us via the
              contact form below or directly through our contact details. We
              look forward to hearing from you
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${errors.name && touched.name ? "border-red-500" : "border-gray-300"
                    } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.name && touched.name ?
                  <span className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </span> : null
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${errors.email && touched.email ? "border-red-500" : "border-gray-300"
                    } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.email && touched.email ?
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </span> : null
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="organization"
                  className="leading-7 text-sm text-gray-600"
                >
                  Organization*
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={values.organization}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${errors.organization && touched.organization ? "border-red-500" : "border-gray-300"
                    } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.organization && touched.organization ?
                  < span className="text-red-500 text-xs mt-1">
                    {errors.organization}
                  </span> : null
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone*
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${errors.phone && touched.phone ? "border-red-500" : "border-gray-300"
                    } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
                {errors.phone && touched.phone ?
                  <span className="text-red-500 text-xs mt-1">
                    {errors.phone}
                  </span> : null
                }
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  className={`w-full bg-white rounded border ${errors.message && touched.message ? "border-red-500" : "border-gray-300"
                    } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                ></textarea>
                {errors.message && touched.message ?
                  <span className="text-red-500 text-xs mt-1">
                    {errors.message}
                  </span> : null
                }
              </div>
              <button
                type="submit"
                className="text-white bg-[#001b71] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send Message
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div >
      </section >
    </>
  );
};

export default ContactUs;
