import { Header } from "../components/Header.jsx";
import { Minicard } from "../components/Minicard.jsx";

export function AboutMe() {
    const education = [
        {
            id: 0,
            name: "University of Makati",
            desc: "Bachelor of Science in Computer Science",
            year: "2019 - current",
            website: "https://umak.edu.ph"
        },
        {
            id: 1,
            name: "MCA Montessori School",
            desc: "Information Communication and Technology",
            year: "2017 - 2019",
            website: "https://mcams.edu.ph/"
        },
    ]

    const career = [
        {
            id: 0,
            name: "Station Square East Commercial Corporation",
            desc: "On-the-Job Training in the Finance Department",
            year: "2018(80 Hours)",
            website: "#" // no website
        }
    ]

    const organization = [
        {
            id: 0,
            name: "PSPDEV",
            desc: "Member / Contributor",
            year: "2024 - Current",
            website: "https://pspdev.github.io"
        }
    ]

    const eduList = education.map(edu =>
        <div key={edu.id} className="w-full">
            <Minicard 
                name={edu.name}
                description={edu.desc}
                year={edu.year}
                website={edu.website}
            />
        </div>
    );

    const careerList = career.map(job =>
        <div key={job.id} className="w-full">
            <Minicard
                name={job.name}
                description={job.desc}
                year={job.year}
                website={job.website}
            />
        </div>
    );

    const organizationList = organization.map(org =>
        <div key={org.id} className="w-full">
            <Minicard
                name={org.name}
                description={org.desc}
                year={org.year}
                website={org.website}
            />
        </div>
    );

    return (
        <>
            <Header />
            <h1 className="text-4xl font-mono text-center text-blue-600 pt-2 mt-4">Education</h1>
            {eduList}

            <h1 className="text-4xl font-mono text-center text-blue-600 pt-2">Careers</h1>
            {careerList}

            <h1 className="text-4xl font-mono text-center text-blue-600 pt-2">Organizations</h1>
            {organizationList}
        </>
    );
}