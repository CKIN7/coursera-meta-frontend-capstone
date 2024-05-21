import { useState } from 'react';

export const BookingForm = ({ dispatch }) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setDate(e);
        dispatch(e);
    };
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Select Date:</label>
                            <input
                                type="date"
                                id="book-date"
                                value={date}
                                required
                                onChange={(e) => handleChange(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="book-time">Select Time:</label>
                            <select
                                id="book-time"
                                value={times}
                                onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a time</option>
                                {}
                            </select>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};
