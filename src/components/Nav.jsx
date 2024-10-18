import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <nav className="space-x-6">
                <Link to={`/`} className="hover:bg-blue-600 hover:rounded-sm hover:text-white">
                    Home
                </Link>
                <Link to={`/projects`} className="hover:bg-blue-600 hover:rounded-sm hover:text-white">
                    Projects
                </Link>
                <Link to={`/about_me`} className="hover:bg-blue-600 hover:rounded-sm hover:text-white">
                    About Me
                </Link>
            </nav>
        </>
    );
}
