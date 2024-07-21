import CardList from "../components/CardList";

const Services = () => {
  return (
    <div>
      <div className="py-32 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Services
        </h2>
      </div>

      <div className="bg-red-200">
        <p className="py-10 text-center text-white px-4">OUR SERVICES</p>
        <h1 className="font-bold text-center py-10 px-4 text-5xl">
          <span className="text-orange-400">Services</span> We Are Offering.
        </h1>
        <p className="text-center py-3 px-4 text-gray-800">
          At Suvidha Overseas, we offer a comprehensive range of free services
          to ensure your smooth transition to international education
        </p>
        <div className=" min-h-screen flex items-center justify-center p-6">
          <CardList />
        </div>
      </div>
    </div>
  );
};
export default Services;
