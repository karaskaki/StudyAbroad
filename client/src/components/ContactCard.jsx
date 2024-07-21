const ContactCard = () => {
  return (
    <div className="max-w-3xl rounded-lg overflow-hidden shadow-lg m-4 bg-white p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-4 text-gray-800 border-b-2 pb-2 border-orange-500">
          Contact Us
        </div>
        <div className="text-gray-700 text-base mb-4">
          <p className="flex items-center mb-2">
            <svg
              className="w-6 h-6 text-orange-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884l-.35 2.145a1 1 0 00.516 1.042l2.095 1.047a11.045 11.045 0 004.8 4.8l1.047 2.095a1 1 0 001.042.516l2.145-.35a1 1 0 00.874-.874l.35-2.145a1 1 0 00-.516-1.042L11.5 9.89a1 1 0 00-1.042.516l-.35 2.145a9.037 9.037 0 01-4.8-4.8l2.145-.35A1 1 0 009.89 6.5L7.973 4.483a1 1 0 00-1.042-.516l-2.145.35a1 1 0 00-.874.874z"></path>
            </svg>
            Phone: +91-7020044091
          </p>
          <p className="flex items-center mb-2">
            <svg
              className="w-6 h-6 text-orange-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.94 2.94a1.5 1.5 0 011.06-.44h12a1.5 1.5 0 011.06.44l2.5 2.5a1.5 1.5 0 01.44 1.06v12a1.5 1.5 0 01-1.5 1.5H3.5A1.5 1.5 0 012 18.5v-12a1.5 1.5 0 01.44-1.06l2.5-2.5zM3.5 4a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-12zM6 5a.5.5 0 01.5.5V9a.5.5 0 01-1 0V5.5A.5.5 0 016 5zm8 0a.5.5 0 01.5.5V9a.5.5 0 01-1 0V5.5a.5.5 0 01.5-.5zM4 10v4.5a.5.5 0 001 0V10H4zm8 0v4.5a.5.5 0 001 0V10h-1zm-4 0v4.5a.5.5 0 001 0V10H8zm-4.5 6a.5.5 0 00-.5.5v2.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-2.5a.5.5 0 00-.5-.5h-9z"></path>
            </svg>
            Email: info@suvidhaoverseas.org
          </p>
        </div>
        <div className="text-gray-700 text-base mb-4">
          <h3 className="font-bold text-xl mb-2 text-gray-800">
            Send a Message
          </h3>
          <p className="mb-4">
            We are here to answer any questions you may have. Reach out to us
            and we will respond as soon as we can.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
