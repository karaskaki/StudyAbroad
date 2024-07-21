const AboutAustralia = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Banner Section */}
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcShqVFJTkbSs4kQBlfOFPGPwX3pBwMAvO4donHnibyfeho83tFvi1L66YvRnCfoxxIs-3bFqIbNE13qTRJhgS9fOfbWy_4dVA5jfZykfA"
          alt="About USA Banner"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-3xl font-bold text-white text-center px-4">
            Your Australian Dream Starts Here
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">About Australia</h2>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to our About USA page. Here, we provide essential insights
            into studying in the United States. From top universities to
            cultural experiences, discover what makes the Australia a prime
            destination for international students. Explore visa requirements,
            academic programs, and the vibrant student life that awaits you.
            Whether you are drawn to bustling cities or serene campuses, let us
            be your guide to unlocking the endless opportunities that the
            Australia has to offer. Your Australian dream starts here.
          </p>
        </div>
      </section>

      {/* Why Study in the USA Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Why Study in Australia?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Studying in the Australia offers unparalleled opportunities for
            academic excellence, cultural enrichment, and personal growth.
            Renowned for its top-ranked universities, innovative research
            facilities, and diverse communities, the Australia provides a
            dynamic learning environment. With access to cutting-edge
            technology, world-class faculty, and a vast array of academic
            programs, students can pursue their passions and expand their
            horizons. Additionally, the Australia reputation for innovation and
            entrepreneurship opens doors to exciting career prospects. Beyond
            academics, the country rich cultural tapestry, vibrant cities, and
            scenic landscapes offer unforgettable experiences. Discover why
            studying in the Australia is the gateway to a bright future.
          </p>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Applying to Australian Universities for MS/PhD Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ol className="list-decimal pl-6">
                <li className="mb-4">
                  <h3 className="font-semibold">
                    Research and Shortlist Universities:
                  </h3>
                  <p>
                    Research universities offering MS/PhD programs in your field
                    of interest. Consider factors such as program reputation,
                    faculty expertise, research opportunities, location, and
                    cost of living. Create a list of universities that align
                    with your academic and personal preferences.
                  </p>
                </li>
                <li className="mb-4">
                  <h3 className="font-semibold">
                    Evaluate Admission Requirements:
                  </h3>
                  <p>
                    Visit the official websites of the shortlisted universities
                    and review their admission requirements for MS/PhD programs.
                    Note down application deadlines, required standardized test
                    scores (e.g., GRE, GMAT, TOEFL, IELTS), letters of
                    recommendation, statement of purpose (SOP), and additional
                    documents.
                  </p>
                </li>
                {/* Add more steps here similarly */}
                <li className="mb-4">
                  <h3 className="font-semibold">Prepare for Departure:</h3>
                  <p>
                    Once you receive your visa, make necessary travel
                    arrangements, including booking flights and arranging
                    accommodation. Familiarize yourself with the university
                    orientation and enrollment procedures, and prepare for your
                    transition to studying in the Australia.
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <img
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                src="https://suvidhaoverseas.org/assets/images/AboutAustralia.jpg"
                alt="Study in USA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="bg-gray-200 py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Top Universities of Australia
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Explore the prestigious universities in the Australia that offer
            world-class education and research opportunities. Discover
            institutions that are renowned for their academic excellence and
            innovative programs.
          </p>
          <div className="flex flex-row items-center justify-center gap-40">
            <a
              href="#"
              className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Consult an Expert for Free
            </a>
            <a
              className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
              href="https://www.webometrics.info/en/Europe/Germany/1000?page=5"
            >
              Top Universities of Australia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutAustralia;
