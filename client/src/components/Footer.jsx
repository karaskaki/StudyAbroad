import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 space-y-9">
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
            <p className="font-medium tracking-wide text-gray-300">
              Important Links
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/Work_with_us"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Work with Us
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-medium tracking-wide text-gray-300">
              Study Abroad
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/Destinations/AboutUSA"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Study in USA
                </a>
              </li>
              <li>
                <a
                  href="/Destinations/AboutGermany"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Study in Germany
                </a>
              </li>
              <li>
                <a
                  href="/Destinations/AboutEngland"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Study in England
                </a>
              </li>
              <li>
                <a
                  href="/Destinations/AboutCanada"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Study in Canada
                </a>
              </li>
              <li>
                <a
                  href="/Destinations/AboutAustralia"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Study in Australia
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-medium tracking-wide text-gray-300">Test Prep</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="exams"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  IELTS
                </a>
              </li>
              <li>
                <a
                  href="/exams"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  DUOLINGO
                </a>
              </li>
              <li>
                <a
                  href="/exams"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  GRE
                </a>
              </li>
              <li>
                <a
                  href="/exams"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  GMAT
                </a>
              </li>
              <li>
                <a
                  href="/exams"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  TOEFL
                </a>
              </li>
              <li>
                <a
                  href="/exams"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  SAT
                </a>
              </li>
              <li>
                <a
                  href="/exams"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  PTE
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-medium tracking-wide text-gray-300">Offerings</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/loans"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Loans
                </a>
              </li>
              <li>
                <a
                  href="/Scholarships"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Scholarships
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-medium tracking-wide text-gray-300">
              Other Links
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/privicy"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-medium tracking-wide text-gray-300">Contacts</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/FAQ"
                  className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-72">
          <div className="flex flex-col">
            <p className="font-medium text-gray-300">Hyderabad Headquarter</p>
            <p className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
              Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-gray-300">Nagpur Headquarter</p>
            <p className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
              Suvidha Overseas, Annamod, Santnagar, Khaperkheda - Nagpur,
              Maharashtra 441102
            </p>
          </div>
        </div>
        <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
          <p className="font-medium tracking-wide text-gray-300">
            Subscribe for updates
          </p>
          <form className="mt-4 flex flex-col md:flex-row">
            <input
              type="email"
              name="email"
              id="email"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-lg text-gray-500 font-medium ">
            ℗ Copyright 2024 | All Rights Reserved by{" "}
            <a href="/" className="text-orange-400">
              Suvidha Overseas
            </a>
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://www.linkedin.com/company/suvidha-overseas/"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/suvidha.overseas/"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61553478092558"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=917620086320&text=&source=&data="
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
