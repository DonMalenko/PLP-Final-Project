import { useState } from "react";


const FAQ = () => {
  const questions = [
    {
      question: "What is telemedicine?",
      answer: "Telemedicine allows you to consult with doctors remotely using online video, audio, or messaging.",
    },
    {
      question: "How do I book an appointment?",
      answer: "After signing up, you can browse our list of doctors and schedule an appointment at your convenience.",
    },
    {
      question: "Are my consultations private?",
      answer: "Yes, we prioritize your privacy and ensure all consultations are secure and confidential.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="container mx-auto space-y-4">
        {questions.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left font-semibold text-lg focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;