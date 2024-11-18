// // src/components/Loader.jsx
// import React from 'react';
// import { ClipLoader } from 'react-spinners';

// const Loader = ({ loading }) => {
//   return (
//     <div className={`flex justify-center items-center min-h-screen ${loading ? 'block' : 'hidden'}`}>
//       <ClipLoader color="#4B8BF5" size={50} />
//     </div>
//   );
// };

// export default Loader;

import ClipLoader from "react-spinners/clipLoader"


const override = {
    display: 'block',
    margin: '100px, auto'
}

function Loader( {loading}) {
  return (
     <div className={'flex justify-center items-center min-h-screen'}>
      <ClipLoader
          color="#4338ca"
          loading={loading}
          cssOverride={override}
          size={150}
      />
      </div>
  )
}

export default Loader;
