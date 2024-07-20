import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-28 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Launch Your Overseas Education Journey:{" "}
          <span className="text-orange-400">
            Get Started with Free Consultation
          </span>
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Dream, Explore, Achieve: Your Journey to Global Education Begins with
          Us.
        </p>
        <div>
          <Link
            to="/about"
            className="font-medium hover:text-orange-500 inline-flex item-center py-1"
          >
            Learn More <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
