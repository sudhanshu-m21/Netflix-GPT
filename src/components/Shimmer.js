import React from "react";

const Spinner = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px; /* Adjust as necessary */
        }
        .spinner {
          border: 8px solid #f3f3f3; /* Light grey */
          border-top: 8px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 40px; /* Size of the spinner */
          height: 40px; /* Size of the spinner */
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
