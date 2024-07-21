const examsData = [
  {
    title: "IELTS",
    description:
      "The International English Language Testing System (IELTS) is a standardized test that measures the English language proficiency of non-native speakers who wish to study, work, or migrate to English-speaking countries. It is recognized and accepted by educational institutions, employers, and governments worldwide. The test assesses all four language skills — listening, reading, writing, and speaking. IELTS is available in two test versions: Academic, for those applying for higher education or professional registration, and General Training, which is focused on basic survival skills in broad social and workplace contexts. The scores are graded on a unique 9-band scale to clearly identify levels of proficiency, from non-user (band score 1) through to expert (band score 9).",
    image: "https://suvidhaoverseas.org/assets/images/icons/ielts.png",
  },
  {
    title: "DUOLINGO",
    description:
      "Duolingo is a popular language-learning platform that offers courses in multiple languages for speakers of various base languages. It is accessible via a website and mobile app, making it convenient for users on the go. Duolingo uses a gamified approach to education, presenting lessons in small, manageable chunks and rewarding users with points and badges to encourage consistent study habits. The platform covers a wide range of linguistic skills including vocabulary, grammar, listening, and speaking. It is well-suited for beginners and intermediate learners looking to build foundational language skills. Duolingo also offers a proficiency test called the Duolingo English Test, which is accepted by a number of educational institutions worldwide as evidence of English language proficiency.",
    image: "https://suvidhaoverseas.org/assets/images/icons/duolingo.png",
  },
  {
    title: "GRE",
    description:
      "The Graduate Record Examination (GRE) is a standardized test that is an admissions requirement for many graduate schools primarily in the United States and Canada. It assesses the potential of applicants for advanced study in various fields and is used to supplement undergraduate records and other qualifications for graduate-level study. The test evaluates analytical writing, quantitative reasoning, and verbal reasoning skills. Administered by the Educational Testing Service (ETS), the GRE is available at testing centers worldwide or through a home testing option. The GRE General Test is the most commonly required version, whereas GRE Subject Tests assess knowledge in specific fields such as Physics, Chemistry, or Mathematics, although these subject tests have been discontinued after April 2021. Scores from the GRE are used by admissions panels to compare applicants from diverse backgrounds on a common measure.",
    image: "https://suvidhaoverseas.org/assets/images/icons/gre.jpg",
  },
  {
    title: "GMAT",
    description:
      "The Graduate Management Admission Test (GMAT) is a standardized test designed primarily for admission to graduate business programs, such as MBA programs globally. It is developed and administered by the Graduate Management Admission Council (GMAC) and is used by over 2,300 business schools worldwide. The GMAT assesses analytical writing, quantitative problem-solving, verbal reasoning, and integrated reasoning skills. The test is structured into four main sections: Analytical Writing Assessment, Integrated Reasoning, Quantitative, and Verbal sections. The GMAT is known for its computer-adaptive testing format, meaning the test adjusts its difficulty level based on the test-taker's responses as the exam progresses. This feature helps to accurately measure an individual's ability level. GMAT scores are a crucial part of the admissions process, offering business schools a standardized measure of applicants' preparedness for the rigors of graduate business study.",
    image: "https://suvidhaoverseas.org/assets/images/icons/gmat.jpg",
  },

  {
    title: "TOEFL",
    description:
      "The Test of English as a Foreign Language (TOEFL) is a standardized test that measures the English language ability of non-native speakers wishing to enroll in English-speaking universities. The test is accepted by many academic and professional institutions in English-speaking countries, making it one of the most recognized English proficiency exams. TOEFL assesses the test taker's ability in four key language areas: reading, listening, speaking, and writing. It is designed to test how well an individual uses and understands English at the university level. The test format includes tasks that require integrating multiple skills to respond, mimicking the kind of tasks encountered in academic settings. Administered by the Educational Testing Service (ETS), TOEFL is available in two formats: TOEFL iBT (internet-based test), which is the more common format and is taken online at testing centers, and the TOEFL Paper-delivered Test, which is available only in locations where internet testing is not feasible. Scores from TOEFL are crucial for admissions decisions, especially for applicants whose native language is not English.",
    image: "https://suvidhaoverseas.org/assets/images/icons/toefl.png",
  },
  {
    title: "SAT",
    description:
      "The SAT assesses the critical reading, mathematical reasoning, and writing skills that are needed for academic success in college. It consists of four sections: Reading, Writing and Language, Math (with and without a calculator), and an optional Essay. The questions are mostly multiple choice, and the essay requires test takers to analyze a passage. Scores on the SAT range from 400 to 1600, combining test results from two 800-point sections: Mathematics, and Critical Reading and Writing. The SAT is administered by the College Board, a non-profit organization in the United States. The test is offered nationally every year in August, October, November, December, March, May, and June.",
    image: "https://suvidhaoverseas.org/assets/images/icons/sat.png",
  },
  {
    title: "PTE",
    description:
      "The Pearson Test of English Academic (PTE Academic) is a computer-based academic English language test aimed at non-native English speakers who wish to study abroad. It tests reading, writing, listening, and speaking skills. PTE Academic is known for its fast processing times, typically delivering results within five business days, making it a popular choice among students and professionals seeking quick turnaround times for their language proficiency results. The test is widely recognized by universities, colleges, and governments around the world. PTE Academic offers a unique testing environment as all test takers answer questions by speaking into a microphone, typing on a computer, and reading and listening through headphones, ensuring an integrated and comprehensive assessment of their English language abilities. The scoring is automated using advanced AI technology, which ensures a bias-free and consistent assessment. The test format includes multiple-choice questions, essay writing, and interpreting information based on audio and video clips. PTE Academic scores are reported on a scale from 10 to 90, with detailed score reports highlighting communicative skills and enabling in-depth feedback on performance.",
    image: "https://suvidhaoverseas.org/assets/images/icons/pte.png",
  },
];

const ExamCard = ({ title, description, image }) => (
  <div className="h-full w-full bg-gray-900 rounded-2xl shadow-md overflow-hidden  my-5 p-6">
    <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
    <div className="flex flex-row mx-5 gap-10">
      <p className="text-white mb-6">{description}</p>
      <img src={image} alt={title} className="w-60  h-60" />
    </div>
    <div className="flex items-center justify-center space-x-40">
      <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
        Know More
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Enquire Now
      </button>
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
        Book Your Seat
      </button>
    </div>
  </div>
);

const ExamCards = () => (
  <div className="flex flex-col items-center gap-6 p-6 w-full">
    {examsData.map((exam, index) => (
      <ExamCard
        key={index}
        title={exam.title}
        description={exam.description}
        image={exam.image}
      />
    ))}
  </div>
);

export default ExamCards;
