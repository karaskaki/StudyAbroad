const AboutUs = () => {
  return (
    <div className="font-serif w-full min-h-screen grid items-center bg-gray-100 py-10">
      <div className="w-4/5 max-w-[1170px] mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 overflow-x-hidden px-4">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            src="https://suvidhaoverseas.org/assets/images/about.jpg"
            alt="About Us"
          />
        </div>
        <div className="flex flex-col justify-center p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Success in{" "}
            <span className="text-orange-500">International Education</span>{" "}
            Starts Here
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Suvidha Overseas is a dynamic and dedicated professional firm
            committed to guiding students who aspire to pursue their education
            abroad. The company is headquartered in Hyderabad and has a strong
            presence in Nagpur. Understanding the complexities of studying in
            countries like the USA, UK, Australia, and Canada, Suvidha Overseas
            has successfully unraveled these challenges. They offer a
            comprehensive step-by-step service that covers every aspect of the
            application process.
          </p>
          <a
            href="#"
            className="inline-block text-center bg-orange-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
