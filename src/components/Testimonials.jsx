const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This telemedicine service has been a lifesaver! I can consult with my doctor from home.",
      location: "New York, USA",
    },
    {
      name: "Jane Smith",
      feedback: "Great service! The doctors are very professional and helpful.",
      location: "London, UK",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-md">
            <p className="italic">"{testimonial.feedback}"</p>
            <h3 className="mt-4 font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
