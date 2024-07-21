const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-600 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2 mb-2">
          #study
        </span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2 mb-2">
          #education
        </span>
        <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-800 mr-2 mb-2">
          #career
        </span>
      </div>
    </div>
  );
};

export default Card;
