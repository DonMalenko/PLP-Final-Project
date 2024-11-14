const services = [
  { title: "Virtual Consultations", description: "Consult with doctors from home.", icon: "💻" },
  { title: "24/7 Care", description: "Access medical help anytime.", icon: "⏰" },
  { title: "Instant Prescriptions", description: "Receive prescriptions instantly.", icon: "💊" },
];

const Services = () => (
  <div className="bg-white py-16">
    <h2 className="text-center text-3xl font-bold">Our Services</h2>
    <div className="flex flex-wrap justify-center mt-8 gap-8">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-md w-64">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
