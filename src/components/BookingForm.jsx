import { useState } from 'react';

export const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState('');
    const [booking, setBooking] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);
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
                                {availableTimes.availableTimes.map(
                                    (availableTime) => {
                                        return (
                                            <option key={availableTime}>
                                                {availableTime}
                                            </option>
                                        );
                                    }
                                )}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">
                                Number of Guests:
                            </label>
                            <input
                                id="book-guests"
                                min={'1'}
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="booking-a-table">
                                Booking a Table:
                            </label>
                            <select
                                id="booking-a-table"
                                key={booking}
                                value={booking}
                                onChange={(e) => setBooking(e.target.value)}>
                                <option>Birthday Celebration</option>
                                <option>Anniversary Dinner</option>
                            </select>
                        </div>

                        <div className="btnReceive">
                            <input
                                aria-label="On Click"
                                type="submit"
                                value={'Make Your Reservation'}
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};
