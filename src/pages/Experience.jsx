export function Experience() {
  const experiences = [
    {
      title: "Education",
      items: [
        {
          institution: "University of Makati",
          degree: "Bachelor of Science in Computer Science",
          years: "2019 - Present",
        },
        {
          institution: "MCA Montessori School",
          degree: "Information Communication and Technology",
          years: "2017 - 2019",
        },
      ],
    },
    {
      title: "Career",
      items: [
        {
          company: "Company A",
          role: "Position A",
          years: "2025 - Present",
        },
        {
          company: "Station Square East Commercial Corporation",
          role: "OJT - Finance Department",
          years: "2018",
        },
      ],
    },
    {
      title: "Volunteering",
      items: [
        {
          organization: "Open Source Contributor",
          role: "Developer",
          years: "2021 - Present",
        },
        {
          organization: "Local Tech Community",
          role: "Mentor & Speaker",
          years: "2022 - Present",
        },
      ],
    },
  ];

  return (
    <div className="py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white relative mb-8">
        Experience
      <span className="block h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h1>
      <div className="relative w-full max-w-2xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>

        {experiences.map((section, index) => (
          <div key={index} className="relative flex flex-col items-center mb-10">

            {/* Section Box */}
            <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-gray-900 p-4 rounded-md shadow">
                    <p className="text-lg text-white font-semibold">{item.role || item.degree}</p>
                    <p className="text-gray-300">{item.company || item.institution}</p>
                    <p className="text-gray-400">{item.years}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
