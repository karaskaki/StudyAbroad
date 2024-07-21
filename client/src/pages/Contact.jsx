import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Contact Us <span className="text-orange-500">Page</span>
        </h2>
      </div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
        <ContactCard />
      </div>
    </div>
  );
};
export default Contact;
