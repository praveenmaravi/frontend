// frontend/src/views/ErrorPage/ErrorPage.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPage from './ErrorPage';

// Mock the retryAction function
const mockRetryAction = jest.fn();

describe('ErrorPage', () => {
  test('renders error message and retry button when an error occurs', () => {
    render(<ErrorPage retryAction={mockRetryAction} />);

    // Simulate error scenario (you can trigger it manually or mock it)
    fireEvent.click(screen.getByText('Retry'));

    // Assert that the error message is shown
    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    expect(screen.getByText('Retry')).toBeInTheDocument();
  });

  test('calls retryAction when Retry button is clicked', () => {
    render(<ErrorPage retryAction={mockRetryAction} />);

    // Simulate retry button click
    fireEvent.click(screen.getByText('Retry'));

    // Assert that the retryAction function was called
    expect(mockRetryAction).toHaveBeenCalledTimes(1);
  });

  test('displays correct error message and code for network error', () => {
    const error = {
      response: null,
      request: {},
      message: 'Network error',
    };

    // Mock the errorService or error handling logic (if necessary)
    const errorDetails = {
      message: 'Network error. Please check your internet connection.',
      errorCode: 503,
    };

    render(<ErrorPage retryAction={mockRetryAction} />);

    // Assert that the error message and code are displayed
    expect(screen.getByText(errorDetails.message)).toBeInTheDocument();
    expect(screen.getByText(`Error ${errorDetails.errorCode}`)).toBeInTheDocument();
  });

  test('displays error image on error', () => {
    render(<ErrorPage retryAction={mockRetryAction} />);

    // Check if the error image is present
    const errorImage = screen.getByAltText('Error illustration');
    expect(errorImage).toBeInTheDocument();
  });
});
