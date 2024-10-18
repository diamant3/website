import { Logo } from './Logo.jsx'
import Nav from './Nav.jsx';

export function Header() {
    return (
        <header className="text-black font-mono">
            <div className="mx-auto flex flex-col justify-around items-center py-6">
                <Logo />
                <Nav />
            </div>
        </header>
    );
}