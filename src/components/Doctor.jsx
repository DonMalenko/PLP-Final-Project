

const Doctor = ({ doctor} ) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-md text-center">
            <h3 className="font-semibold text-lg">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-gray-500">{doctor.location}</p>
          </div>
  )
}

export default Doctor