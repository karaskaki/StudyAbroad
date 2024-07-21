import Banner from "../components/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clients from "../components/ReviewSlider";

const data = [
  {
    name: `John Morgan`,
    img: `https://suvidhaoverseas.org/assets/images/advisors/Shourya.jpg`,
    review: `Lorem ipsum dolor sit amet, `,
  },
  {
    name: `Ellie Anderson`,
    img: `https://suvidhaoverseas.org/assets/images/advisors/Saloney.jpg`,
    review: `Lorem ipsum dolor sit amet, `,
  },
  {
    name: `Nia Adebayo`,
    img: `https://suvidhaoverseas.org/assets/images/advisors/Vishnu.jpg`,
    review: `Lorem ipsum dolor sit amet, `,
  },
  {
    name: `Rigo Louie`,
    img: `https://suvidhaoverseas.org/assets/images/advisors/SaiSowmya.jpg`,
    review: `Lorem ipsum dolor sit amet, `,
  },
  {
    name: `Mia Williams`,
    img: `https://suvidhaoverseas.org/assets/images/advisors/Nishthaa.jpg`,
    review: `Lorem ipsum dolor sit amet, `,
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="bg-gray-300">
      {/* Banner */}
      <Banner />

      {/* About */}
      <div>
        <div className="flex flex-col h-10 mt-28 ">
          <h1 className="font-bold text-black text-center text-5xl">
            Why Choose <span className="text-orange-500">Suvidha ?</span>
          </h1>
          <p className="text-center mt-10">
            Cultivating Dreams, Empowering Futures: Your Trustworthy Partner in
            Global Education
          </p>
        </div>
        <div className="relative flex p-20 m-40 gap-8 max-w-7xl mx-auto">
          <div className="absolute top-0 left-0 text-9xl opacity-10 font-bold">
            Suvidha
          </div>

          <div className="w-1/2 flex flex-col">
            <h2 className="text-4xl font-bold mb-4">
              <span className="uppercase text-5xl">Y</span>our
              <br />
              Success in International EducationStarts Here
            </h2>

            <div className="space-y-4">
              <p>
                Welcome to Suvidha Overseas, your gateway to global education.
                We are dedicated to providing free consultation services to
                Indian students aiming for higher education in the US and
                Germany. Our experienced consultants offer personalized guidance
                at every step, from university exploration to application
                assistance, all at no cost. Empowering students and breaking
                barriers, Suvidha Overseas is your trusted partner for a
                transformative educational journey. Join us today and make your
                dreams of studying abroad a reality.
              </p>
            </div>
          </div>

          <div className="w-1/2 flex flex-wrap gap-8 justify-center relative">
            <img
              src="https://suvidhaoverseas.org/assets/images/about.jpg"
              className="relative w-full max-w-xs object-cover"
              alt="About"
            />
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className="container mx-auto items-center justify-center py-10 bg-cream">
        <p className="text-center mt-10 mb-10 text-sm">
          EXPLORE YOUR DESTINATIONS
        </p>
        <h1 className="text-center text-4xl mb-10 font-bold ">
          Find the Perfect Country for Your Studies Abroad
        </h1>
        <div className="flex justify-center">
          <div className="gallery flex flex-wrap gap-2 justify-center items-center">
            <figure className="card w-1/4 mb-5 relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFtZXJpY2ElMjBjaXR5fGVufDB8fDB8fHww"
                alt="Image 1"
                className="w-full h-auto object-cover grayscale transition duration-500 hover:grayscale-0 hover:shadow-2xl "
              />

              <figcaption className="absolute bottom-0 left-0 w-full p-6 text-lg font-semibold text-white bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="/Destinations/AboutUSA">USA</a>
              </figcaption>
            </figure>
            <figure className="card w-1/4 mb-5 relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1065188752/photo/chicago-river-cityscape-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=gitzyKEFh_htiZn-hebC9nYh5FJInqJE1sLApnEK0ko="
                alt="Image 2"
                className="w-full h-full object-cover grayscale transition duration-500 hover:grayscale-0 hover:shadow-2xl"
              />
              <figcaption className="absolute bottom-0 left-0 w-full p-6 text-lg font-semibold text-white bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="/Destinations/AboutCanada">CANADA</a>
              </figcaption>
            </figure>
            <figure className="card w-1/4 mb-5 relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1065188752/photo/chicago-river-cityscape-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=gitzyKEFh_htiZn-hebC9nYh5FJInqJE1sLApnEK0ko="
                alt="Image 3"
                className="w-full h-full object-cover grayscale transition duration-500 hover:grayscale-0 hover:shadow-2xl"
              />
              <figcaption className="absolute bottom-0 left-0 w-full p-6 text-lg font-semibold text-white bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="/Destinations/AboutGermany">GERMANY</a>
              </figcaption>
            </figure>
            <figure className="card w-1/4 mb-5 relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1204528107/photo/busy-traffic-in-downtown-los-angeles-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=-iHMFz-US_pHie0fhpB5qr1VBq0aq4b6rxyU23IZNNM="
                alt="Image 4"
                className="w-full h-full object-cover grayscale transition duration-500 hover:grayscale-0 hover:shadow-2xl"
              />
              <figcaption className="absolute bottom-0 left-0 w-full p-6 text-lg font-semibold text-white bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="/Destinations/AboutEngland">ENGLAND</a>
              </figcaption>
            </figure>
            <figure className="card w-1/4 mb-5 relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1410710980/photo/philadelphia.webp?b=1&s=170667a&w=0&k=20&c=FFVrMQo-3lKvAWGj3xJFLFU4bBz5ZniclS3IEeniGPY="
                alt="Image 5"
                className="w-full h-full object-cover grayscale transition duration-500 hover:grayscale-0 hover:shadow-2xl"
              />
              <figcaption className="absolute bottom-0 left-0 w-full p-6 text-lg font-semibold text-white bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="/Destinations/AboutAustralia">AUSTRALIA</a>
              </figcaption>
            </figure>
            <figure className="card w-1/4 mb-5 relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://media.istockphoto.com/id/1089200736/photo/the-empire-state.webp?b=1&s=170667a&w=0&k=20&c=ChVjSCn6scX7fFZHfbP6RSJ-EbhzF-qGAs-SAfVWuzw="
                alt="Image 6"
                className="w-full h-full object-cover grayscale transition duration-500 hover:grayscale-0 hover:shadow-2xl"
              />
              <figcaption className="absolute bottom-0 left-0 w-full p-6 text-lg font-semibold text-white bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                <a href="/Destinations/AboutUSA">RUSSIA</a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Academic Crousal */}
      <div className="w-3/4 m-auto pb-32">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-orange-500 h-[450px] text-black rounded-xl"
              >
                <div className="h-56 bg-gray-800 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4 ">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <button className="bg-gray-800 text-white px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Review */}
      <Clients />
    </div>
  );
};
export default Home;
