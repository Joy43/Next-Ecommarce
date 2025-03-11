
const FailedPaymentPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm">
          <svg
            className="w-16 h-16 text-red-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 1.75a10.25 10.25 0 1 0 0 20.5 10.25 10.25 0 0 0 0-20.5zM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0zm9.25-3.44a.75.75 0 0 1 .75.75v4.38a.75.75 0 0 1-1.5 0V9.31a.75.75 0 0 1 .75-.75zm0 7.19a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Payment Failed
          </h2>
          <p className="text-gray-600 mt-2">
            Unfortunately, your payment could not be processed. Please try again or contact support.
          </p>
          <button
            onClick={() => window.location.href = "/"}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  };
  
  export default FailedPaymentPage;
  
