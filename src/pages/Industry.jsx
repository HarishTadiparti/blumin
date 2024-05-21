import React, { useState } from "react";
import pic1 from "../assets/indus-1.jpeg";
import FAQ from "../components/FAQ";
import industry1 from "../assets/industry1.jpg";
import industry2 from "../assets/industry2.jpg";
import industry3 from "../assets/industry3.jpg";

const Industry = () => {
  const [showFAQs, setShowFAQs] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleFAQ = (index) => {
    const newShowFAQs = [...showFAQs];
    newShowFAQs[index] = !newShowFAQs[index];
    setShowFAQs(newShowFAQs);
  };
  return (
    <>
      <section className="text-gray-600 body-font py-16">
        <div className="container px-5 mx-auto">
          <h1 className="text-6xl font-medium title-font text-gray-900 mb-12 text-center">
            INDUSTRY
          </h1>
        </div>
      </section>
      <div className="container mx-auto px-5 py-10 bg-white rounded-2xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="w-full h-[400px]">
            <img src={pic1} alt="Your Image" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-4">
            <h2 className="text-4xl font-medium text-gray-900">
              How we aim to help the Industry?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              BLUMIN facilitates strategic partnerships between industry
              leaders, academic institutions, and global innovators to drive
              growth and foster innovation. Access top talent, leverage
              cutting-edge research, and accelerate R&D initiatives with us.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto px-5 py-24 flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center">

          <div className="md:w-1/2 px-10 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">FAQ'S</h2>
              <div className="space-y-4 min-w-full">
                <FAQ
                  question="Global Connections"
                  answer="BLUMINAccess global networks for talent, partnerships, and funding. Partnerships with governments, incubators, and key companies."
                  isOpen={showFAQs[0]}
                  toggle={() => toggleFAQ(0)}
                />
                <FAQ
                  question="Innovators Community"
                  answer="Collaborative model with top researchers. Flexible project plans and shared talent investments."
                  isOpen={showFAQs[1]}
                  toggle={() => toggleFAQ(1)}
                />
                <FAQ
                  question="Business Innovation"
                  answer="Embrace challenges, boost ROI in R&D. Connect with global expertise for projects."
                  isOpen={showFAQs[2]}
                  toggle={() => toggleFAQ(2)}
                />
                <FAQ
                  question="Building the Right Team"
                  answer="Find expertise before job postings. Consider interns for reduced risk. Align strategy with talent needs."
                  isOpen={showFAQs[3]}
                  toggle={() => toggleFAQ(3)}
                />
                <FAQ
                  question="Talent Solutions"
                  answer="100+ advisors for support. Identify and recruit skilled talent."
                  isOpen={showFAQs[4]}
                  toggle={() => toggleFAQ(4)}
                />
                <FAQ
                  question="Guidance from Start to Finish"
                  answer="Receive guidance at every project stage."
                  isOpen={showFAQs[5]}
                  toggle={() => toggleFAQ(5)}
                />
                <FAQ
                  question="Budget Efficiency"
                  answer="Seek funding support through IIC. Leverage investments for expanded budgets."
                  isOpen={showFAQs[6]}
                  toggle={() => toggleFAQ(6)}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="mt-24 container mx-auto text-gray-600 body-font">
        <h2 className="mb-4 text-4xl font-medium text-gray-900">Why choose us</h2>
        <div className="p-4 bg-white rounded-xl">
          <div className="grid lg:grid-cols-3 gap-4">
            <div>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={industry1}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                INDUSTRY ENGAGEMENT AND PROBLEM IDENTIFICATION
              </h2>
              <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                <li>Initiate discussions with potential industry partners.</li>
                <li>
                  Arrange introductory meetings with industry representatives
                  and gather insights.
                </li>
              </ul>
            </div>
            <div>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={industry2}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                NEEDS ASSESSMENT AND PROBLEM DEFINITION
              </h2>
              <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                <li>
                  Analyze industry trends, market dynamics, and regulations.
                </li>
                <li>
                  Collaborate with stakeholders to define challenges and
                  opportunities.
                </li>
              </ul>
            </div>
            <div>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={industry3}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                DEPARTMENTAL ALLOCATION
              </h2>
              <ul className="text-base leading-relaxed mt-2 ml-4 list-disc">
                <li>Assign requirements based on identified challenges.</li>
                <li>
                  Form cross-functional teams and Allocate tasks to departments
                  as per capabilities and expertise.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-24 mb-12 container mx-auto flex items-center justify-center">
        <div className="w-full lg:w-[800px] flex flex-col items-center">

          <div className="w-full">
            <div className="w-full text-center">
              <h2 className="text-2xl font-bold mb-4">FAQ'S</h2>
              <div className="space-y-4 min-w-full">
                <FAQ
                  question="Global Connections"
                  answer="BLUMINAccess global networks for talent, partnerships, and funding. Partnerships with governments, incubators, and key companies."
                  isOpen={showFAQs[0]}
                  toggle={() => toggleFAQ(0)}
                />
                <FAQ
                  question="Innovators Community"
                  answer="Collaborative model with top researchers. Flexible project plans and shared talent investments."
                  isOpen={showFAQs[1]}
                  toggle={() => toggleFAQ(1)}
                />
                <FAQ
                  question="Business Innovation"
                  answer="Embrace challenges, boost ROI in R&D. Connect with global expertise for projects."
                  isOpen={showFAQs[2]}
                  toggle={() => toggleFAQ(2)}
                />
                <FAQ
                  question="Building the Right Team"
                  answer="Find expertise before job postings. Consider interns for reduced risk. Align strategy with talent needs."
                  isOpen={showFAQs[3]}
                  toggle={() => toggleFAQ(3)}
                />
                <FAQ
                  question="Talent Solutions"
                  answer="100+ advisors for support. Identify and recruit skilled talent."
                  isOpen={showFAQs[4]}
                  toggle={() => toggleFAQ(4)}
                />
                <FAQ
                  question="Guidance from Start to Finish"
                  answer="Receive guidance at every project stage."
                  isOpen={showFAQs[5]}
                  toggle={() => toggleFAQ(5)}
                />
                <FAQ
                  question="Budget Efficiency"
                  answer="Seek funding support through IIC. Leverage investments for expanded budgets."
                  isOpen={showFAQs[6]}
                  toggle={() => toggleFAQ(6)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
