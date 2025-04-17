import { render, screen, fireEvent } from '@testing-library/react';
import { BookingTable } from './BookingTable';

describe('BookingTable Component', () => {
  const mockAvailableTimes = {
    availableTimes: ['17:00', '18:00', '19:00', '20:00']
  };

  beforeEach(() => {
    render(<BookingTable availableTimes={mockAvailableTimes} />);
  });

  test('renders the form correctly', () => {
    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test('displays error messages when empty fields are submitted', () => {
    const submitButton = screen.getByText('Make Your Reservation');
    fireEvent.click(submitButton);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
    expect(screen.getByText('Valid email is required')).toBeInTheDocument();
    expect(screen.getByText('Phone number is required')).toBeInTheDocument();
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
    expect(screen.getByText('Valid number of guests is required')).toBeInTheDocument();
    expect(screen.getByText('Occasion is required')).toBeInTheDocument();
  });

  test('validates the email format correctly', () => {
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByText('Make Your Reservation');
    fireEvent.click(submitButton);

    expect(screen.getByText('Valid email is required')).toBeInTheDocument();
  });

  test('validates the number of guests correctly', () => {
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    fireEvent.change(guestsInput, { target: { value: '0' } });
    
    const submitButton = screen.getByText('Make Your Reservation');
    fireEvent.click(submitButton);

    expect(screen.getByText('Valid number of guests is required')).toBeInTheDocument();
  });

  test('clears errors when the user starts typing', () => {
    const firstNameInput = screen.getByLabelText(/First Name/i);
    
    // Primero mostrar el error
    const submitButton = screen.getByText('Make Your Reservation');
    fireEvent.click(submitButton);
    expect(screen.getByText('First name is required')).toBeInTheDocument();

    // Luego escribir algo y verificar que el error desaparece
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(screen.queryByText('First name is required')).not.toBeInTheDocument();
  });
}); 