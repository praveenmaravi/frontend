import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatbotInterface from './ChatbotInterface';
import { useChatbot } from '../../hooks/useChatbot';
import { useEmotionAnalysis } from '../../hooks/useEmotionAnalysis';
import { useQuickReplies } from '../../hooks/useQuickReplies';

// Mocking the hooks used in the ChatbotInterface
jest.mock('../../hooks/useChatbot');
jest.mock('../../hooks/useEmotionAnalysis');
jest.mock('../../hooks/useQuickReplies');

describe('ChatbotInterface', () => {
  
  // Set up mock return values for the hooks
  beforeEach(() => {
    useChatbot.mockReturnValue({
      sendMessage: jest.fn(),
      messages: [],
    });
    useEmotionAnalysis.mockReturnValue({
      emotion: 'neutral',
      analyzeEmotion: jest.fn(),
    });
    useQuickReplies.mockReturnValue({
      quickReplies: ['Yes', 'No'],
    });
  });

  test('renders the chatbot interface', () => {
    render(<ChatbotInterface />);

    // Check if the chatbot window is rendered
    expect(screen.getByRole('chat-window')).toBeInTheDocument();
    expect(screen.getByRole('message-input')).toBeInTheDocument();
    expect(screen.getByRole('send-button')).toBeInTheDocument();
    expect(screen.getByRole('chat-header')).toBeInTheDocument();
  });

  test('sends a message when input is provided and sent', async () => {
    const { sendMessage } = useChatbot();

    render(<ChatbotInterface />);

    const messageInput = screen.getByRole('message-input');
    const sendButton = screen.getByRole('send-button');

    fireEvent.change(messageInput, { target: { value: 'Hello' } });
    fireEvent.click(sendButton);

    // Ensure sendMessage function was called
    await waitFor(() => expect(sendMessage).toHaveBeenCalledWith('Hello'));
  });

  test('displays quick replies when available', () => {
    render(<ChatbotInterface />);

    const quickReplyYes = screen.getByText('Yes');
    const quickReplyNo = screen.getByText('No');

    expect(quickReplyYes).toBeInTheDocument();
    expect(quickReplyNo).toBeInTheDocument();
  });

  test('handles emotion analysis and displays the appropriate icon', () => {
    render(<ChatbotInterface />);

    // Assuming emotion icons are rendered based on emotion state
    const emotionIcon = screen.getByRole('emotion-icon');
    
    // Check if the neutral emotion is correctly rendered
    expect(emotionIcon).toHaveClass('neutral');
  });

  test('displays notifications when a message is sent', async () => {
    render(<ChatbotInterface />);

    // Mock notification display logic
    const notificationBanner = screen.getByRole('notification-banner');

    expect(notificationBanner).toBeInTheDocument();
    // You can add checks for specific messages like success or error messages
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<ChatbotInterface />);
    expect(asFragment()).toMatchSnapshot();
  });
});
