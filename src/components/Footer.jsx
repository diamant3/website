export function Footer() {
    return (
        <div className="flex flex-col md:flex-row justify-evenly items-center font-mono pt-4">
            <a
                href="https://linkedin.com/in/diamant3"
                className="text-2xl hover:text-blue-600 pt-3"
                target="blank"
            >LinkedIn</a>
            <a
                href="https://github.com/diamant3"
                className="text-2xl hover:text-blue-600 pt-3"
                target="blank"
            >GitHub</a>
            <a
                href="https://x.com/me_diamant3"
                className="text-2xl hover:text-blue-600 pt-3"
                target="blank"
            >X(Twitter)</a>
            <a
                href="mailto:diamant3@proton.me"
                className="text-2xl hover:text-blue-600 pt-3"
                target="blank"
            >E-Mail</a>
        </div>

    );
}