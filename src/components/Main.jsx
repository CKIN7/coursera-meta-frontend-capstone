import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Booking } from './Booking';
import { useReducer } from 'react';

export const Main = () => {
    const seedRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = (s * a) % m) / m;
        };
    };

    const fetchAPI = function (date) {
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() > 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const initialState = { availableTimes: fetchAPI(new Date()) };
    const [state, dispatch] = useReducer(updateTimes, initialState);

    const updateTimes = (state, date) => {
        return { availableTimes: fetchAPI(new Date()) };
    };
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<Header />}
                />
                <Route
                    path="/booking"
                    element={
                        <Booking
                            availableTimes={state}
                            dispatch={dispatch}
                            SubmitForm={SubmitForm}
                        />
                    }
                />
                <Route
                    path="/"
                    element={<Header />}
                />
            </Routes>
        </main>
    );
};
