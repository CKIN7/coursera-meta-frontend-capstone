import { Navbar } from './components/Navbar';
import './App.css';

import { Main } from './components/Main';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

export const App = () => {
    return (
        <>
            <Navbar />
            <Main />
            <Menu />
            <Footer />
        </>
    );
};
