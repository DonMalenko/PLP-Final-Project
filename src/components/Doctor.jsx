import { useRecoilValue } from 'recoil';
import {ThemeMode } from '../Recoil/State';

const Doctor = ({ doctor} ) => {

const themeMode = useRecoilValue(ThemeMode);

  return (
    <div className={`${themeMode === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-600'} p-6 shadow-lg rounded-md text-center`}>
            <h3 className="font-semibold text-lg">{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <p>{doctor.location}</p>
          </div>
  )
}

export default Doctor