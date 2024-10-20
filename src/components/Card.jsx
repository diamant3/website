export function Card({ name, description, link }) {
    return (
        <>
        <div className="text-center font-mono bg-white shadow-lg border border-blue-500 w-auto py-4 m-2">
            <h1 className="font-extrabold text-4xl py-2">{name}</h1>
            <h2 className="md:px-4 p-6">{description}</h2>
            <a className="pt-4 pb-2" target="blank" href={link}>
                <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 text-md p-2 text-center">Source Code</button>
            </a>
        </div>
        </>
    );
}