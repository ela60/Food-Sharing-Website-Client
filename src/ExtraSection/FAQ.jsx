import React, { useState } from "react";

const faqs = [
  {
    question: "What is Food Sharing?",
    answer:
      "Food sharing is a way to reduce food waste by connecting people with surplus food to those who need it.",
  },
  {
    question: "How can I share food?",
    answer:
      "You can list extra food on our platform and connect with people nearby who need it. Simply create an account and start sharing!",
  },
  {
    question: "Is the food safe?",
    answer:
      "Yes! We encourage food safety guidelines and suggest sharing fresh, properly stored food items only.",
  },
  {
    question: "Do I need to pay to use this platform?",
    answer:
      "No, our platform is completely free to use for both food givers and receivers.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out to us via our contact page or email us at support@foodshare.com.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-3 text-lg font-medium text-gray-700 focus:outline-none"
            >
              {faq.question}
              <span className="text-purple-800">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
