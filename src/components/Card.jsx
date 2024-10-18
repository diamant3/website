

export function Card({ name, description, link }) {
    return (
        <>
        <div className="text-center font-mono bg-white shadow-lg border border-blue-500 rounded-md w-auto py-4 m-2">
            <h1 className="font-extrabold text-4xl uppercase py-2">{name}</h1>
            <h2 className="py-4">{description}</h2>
            <a className="pt-4 pb-2" target="blank" href={link}>
                <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 rounded-full text-md p-2 text-center">Source Code</button>
            </a>
        </div>
        </>
    );
}