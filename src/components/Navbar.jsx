import logo from '../images/Logo .svg';
export const Navbar = () => {
    return (
        <nav>
            <a href="/"></a>
            <img
                src={logo}
                alt="logo"
            />
            <div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Now</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
            </ul>
        </nav>
    );
};
