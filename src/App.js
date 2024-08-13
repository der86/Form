import React, { useState } from 'react';
import CourseForm from './CourseForm'
import "./App.css"

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className='buttonone'>
      <button onClick={togglePopup}>Add Course</button>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={togglePopup}>Close</button>
            <CourseForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default App



// import React, { useState } from 'react';
// import 'App.css'
// import CourseForm from './CourseForm'; // Adjust the import according to your file structure

// const App = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   return (
//     <div>
//       <button onClick={togglePopup}>Open Course Form</button>

//       {isPopupOpen && (
//         <div className="popup">
//           <div className="popup-inner">
//             <button className="close-btn" onClick={togglePopup}>Close</button>
//             <CourseForm />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
