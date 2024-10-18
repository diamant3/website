export function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center py-10 font-mono">
            <a
                href="https://linkedin.com/in/diamant3"
                className="text-2xl hover:text-blue-600"
                target="blank"
            >LinkedIn</a>
            <a
                href="https://github.com/diamant3"
                className="text-2xl hover:text-blue-600"
                target="blank"
            >GitHub</a>
            <a
                href="https://x.com/me_diamant3"
                className="text-2xl hover:text-blue-600"
                target="blank"
            >X(Twitter)</a>
            <a
                href="mailto:diamant3@proton.me"
                className="text-2xl hover:text-blue-600"
                target="blank"
            >E-Mail</a>
        </div>

    );
}