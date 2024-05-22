import logo from '../images/Logo .svg';

export const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img
                        src={logo}
                        alt={logo}
                    />
                    <p>
                        Authentic Mediterranean cuisine, rooted in family
                        tradition
                    </p>
                </div>
                <div>
                    <h3>Useful Links</h3>
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
                            <a href="/">Reservation</a>
                        </li>
                        <li>
                            <a href="/">Order Now</a>
                        </li>
                        <li>
                            <a href="/">My Account</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            Address: <br />
                            10137 S Yates Blvd
                        </li>
                        <li>
                            Phone: <br />
                            773 374-2358
                        </li>
                        <li>
                            Email: <br />
                            littlelemon@web.com
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li>
                            <a href="/">Facebook</a>
                        </li>
                        <li>
                            <a href="/">Instagram</a>
                        </li>
                        <li>
                            <a href="/">Whatsapp</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};
