import Link from "next/link";

const QuestionnaireList = () => {
  const questionnaires = [
    {
      id: 1,
      title: "Kuesioner Alumni",
      description: "Isi kuesioner ini untuk membantu kami memahami perkembangan karir Anda.",
      link: "/questionnaire/alumni",
    },
    {
      id: 2,
      title: "Kuesioner Kepuasan",
      description: "Bagikan pengalaman Anda selama berkuliah untuk meningkatkan kualitas pendidikan.",
      link: "/questionnaire/satisfaction",
    },
    {
      id: 3,
      title: "Kuesioner Lainnya",
      description: "Isi kuesioner lainnya untuk memberikan masukan berharga bagi kami.",
      link: "/questionnaire/other",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 flex flex-col">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Daftar Kuesioner</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {questionnaires.map((questionnaire) => (
          <div
            key={questionnaire.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
          >
            <h2 className="text-lg font-semibold text-gray-800">{questionnaire.title}</h2>
            <p className="text-sm text-gray-600 my-4">{questionnaire.description}</p>
            <Link href={questionnaire.link}>
              <button className="rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
                Isi Kuesioner
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionnaireList;
