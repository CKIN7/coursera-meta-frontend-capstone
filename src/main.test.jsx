import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';

import { describe, expect, it } from 'vitest';

describe('Testing Components', () => {
    it('Renders the Header heading', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        const headingElement = screen.getByText('Reserve Table');
        expect(headingElement).toBeInTheDocument();

        const reserveButton = screen.getByRole('button');
        fireEvent.click(reserveButton);

        const headingElementNew = screen.getByText('Choose Date');
        expect(headingElementNew).toBeInTheDocument();
    });

    it('Initialize/Update Times', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        const reserveButton = screen.getByRole('button');
        fireEvent.click(reserveButton);
    });
});
