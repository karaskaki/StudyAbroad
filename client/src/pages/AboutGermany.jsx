const AboutGermany = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Banner Section */}
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ3rJMAvRHuXJNw5zl9eZ-Vs7IHj749sxtOY4onCd1BRjK9uRYNE5o4VgZfKvju1USxl3gXYtgJkYklQbn38B6zCmZRkznoERRd3LGoiA"
          alt="About USA Banner"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-3xl font-bold text-white text-center px-4">
            Your Germany Dream Starts Here
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">About Germany</h2>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to our About Germany page, your gateway to understanding why
            Germany stands as a premier destination for international students.
            Here, we delve into the rich tapestry of opportunities awaiting
            those seeking higher education in this dynamic country. Explore our
            insights into Germany esteemed universities, renowned research
            facilities, and innovative academic programs. With a strong emphasis
            on practical learning, cultural immersion, and career advancement,
            Germany offers a transformative educational experience like no
            other.
          </p>
        </div>
      </section>

      {/* Why Study in the USA Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Why Study In Germany?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Germany emerges as a beacon of academic excellence, innovation, and
            cultural richness, making it a prime destination for international
            students. Renowned for its world-class universities, cutting-edge
            research opportunities, and tuition-free education system, Germany
            offers an exceptional learning environment that fosters intellectual
            growth and personal development. With a strong emphasis on practical
            skills and hands-on experience, students benefit from a holistic
            education that prepares them for global careers. Additionally,
            Germany rich history, diverse culture, and vibrant cities provide an
            immersive experience that extends beyond the classroom. Discover why
            studying in Germany is not just an academic endeavor, but a
            transformative journey towards a brighter future.
          </p>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Applying to Germany Universities for MS/PhD Programs
          </h1>
          <h3 className="text-sm font-medium text-center mb-6">
            Below is a detailed step-by-step procedure for students applying to
            universities in the Germany for MS/PhD programs, covering everything
            from university selection to departure:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ol className="list-decimal pl-6">
                <li className="mb-4">
                  <h3 className="font-semibold">
                    Research and Shortlist Universities:
                  </h3>
                  <p>
                    Research universities and programs in Germany that offer
                    your desired course of study. Consider factors such as
                    program reputation, faculty expertise, language of
                    instruction, location, and cost of living. Create a list of
                    universities and programs that align with your academic and
                    personal preferences.
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
                    transition to studying in the USA.
                  </p>
                </li>
              </ol>
            </div>
            <div>
              <img
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                src="https://suvidhaoverseas.org/assets/images/AboutGermany.jpg"
                alt="Study in USA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="bg-gray-200 py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-lg leading-relaxed mb-6">
            Explore the prestigious universities in the Germany that offer
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
              Top Universities of Germany
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutGermany;
