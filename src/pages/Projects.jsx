import { Header } from "../components/Header.jsx";
import { Card } from "../components/Card.jsx";

export function Projects() {
    const projects = [
        {
            id: 0,
            name: 'sysig',
            description: 'Simple application to gather your system information in your computer. 🔍',
            link: 'https://github.com/diamant3/sysig',
        },
        {
            id: 1,
            name: 'psp-controller',
            description: 'Remotely control Wi-Fi based microcontrollers with the PSP.',
            link: 'https://github.com/diamant3/psp-controller',
        },
        {
            id: 2,
            name: 'chip-walo',
            description: 'CHIP-8 Interpreter',
            link: 'https://github.com/diamant3/chip-walo',
        },
        {
            id: 3,
            name: 'LBP',
            description: 'Bytepusher VM',
            link: 'https://github.com/diamant3/LBP',
        },
        {
            id: 4,
            name: 'vchip8',
            description: 'CHIP-8 interpreter written in V',
            link: 'https://github.com/diamant3/vchip8',
        },
        {
            id: 5,
            name: 'SRTF-Visualizer',
            description: 'SRTF scheduling solver',
            link: 'https://github.com/diamant3/SRTF-Visualizer',
        }
    ]

    const projectList = projects.map(project =>
        <div key={project.id} className="w-full sm:w-1/2 md:w-1/3">
            <Card 
                name={project.name}
                description={project.description}
                link={project.link}
            />
        </div>
    );

    return (
        <>
            <Header />
            <div className="flex flex-wrap">
                {projectList}
            </div>
        </>
    );
}