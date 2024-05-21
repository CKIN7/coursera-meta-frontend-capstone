import { BookingForm } from './BookingForm';

export const Booking = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );
};
