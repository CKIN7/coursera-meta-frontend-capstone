import { Link } from 'react-router-dom';
import bannerImg from '../images/servingfood.jpg';

export const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Authentic Mediterranean cuisine, rooted in family
                        tradition
                    </p>
                    <Link to="/booking">
                        <button aria-label="On Click">Reserve Table</button>
                    </Link>
                </div>
                <div className="banner-img">
                    <img
                        src={bannerImg}
                        alt={bannerImg}
                    />
                </div>
            </section>
        </header>
    );
};
