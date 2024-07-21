import Card from "./Card";

const cardData = [
  {
    title: "IELTS/Duolingo Tutoring",
    description:
      "Expert assistance to help you excel in language proficiency tests.",
  },
  {
    title: "Non-Degree Programs",
    description:
      "SOP/LOR Writing: Tailored support in crafting compelling statements of purpose and letters of recommendation.",
  },
  {
    title: "Off-Campus Programs",
    description:
      "University Selection Guidance: Personalized advice to help you choose the right university for your academic and career goals.",
  },
  {
    title: "Hybrid Distance Programs",
    description:
      "Country Selection Guidance: Insightful recommendations to aid you in selecting the ideal study destination.",
  },
  {
    title: "Hybrid Distance Programs",
    description:
      "Application Form Assistance: Step-by-step guidance through the application process.",
  },
  {
    title: "Hybrid Distance Programs",
    description:
      "Visa Support: Navigational assistance and resources to simplify the visa application process.",
  },
  {
    title: "Hybrid Distance Programs",
    description:
      "Loan Assistance: Guidance and support in exploring financial aid options, including loan facilities.",
  },
  {
    title: "Online Degree Programs",
    description:
      "Job Assistance: Resources and advice to facilitate your transition into the job market post-graduation.",
  },
];

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
