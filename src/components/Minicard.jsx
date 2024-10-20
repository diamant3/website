export function Minicard({ name, description, year }) {
    return (
        <>
        <div className="text-center font-mono py-2 m-2 border-2 border-slate-200">
            <h2 className="text-3xl font-mono text-center py-4">{name}</h2>
            <h3 className="text-xl font-mono text-center">{description}</h3>
            <h4 className="font-mono text-center italic">{year}</h4>
        </div>
        </>
    );
}