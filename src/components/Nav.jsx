import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <nav className="space-x-8">
                <Link to={`/`} className="hover:text-blue-600 md:text-2xl">
                    Home
                </Link>
                <Link to={`/projects`} className="hover:text-blue-600 md:text-2xl">
                    Projects
                </Link>
                <Link to={`/about_me`} className="hover:text-blue-600 md:text-2xl">
                    About Me
                </Link>
            </nav>
        </>
    );
}
