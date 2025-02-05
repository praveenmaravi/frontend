// nlp/voiceRecognitionService.js

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechSynthesis = window.SpeechSynthesis || window.webkitSpeechSynthesis;

class VoiceRecognitionService {
  constructor() {
    this.recognition = new SpeechRecognition();
    this.synth = SpeechSynthesis;
    this.recognition.lang = 'en-US'; // Set the language
    this.recognition.interimResults = true; // Get real-time results
    this.recognition.maxAlternatives = 1; // Limit the number of alternatives
  }

  // Start voice recognition
  startRecognition(onResult, onError) {
    this.recognition.start();

    this.recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      const isFinal = event.results[event.results.length - 1].isFinal;
      if (onResult) {
        onResult(transcript, isFinal);
      }
    };

    this.recognition.onerror = (event) => {
      if (onError) {
        onError(event.error);
      }
    };

    this.recognition.onend = () => {
      console.log('Speech recognition ended');
    };
  }

  // Stop the recognition
  stopRecognition() {
    this.recognition.stop();
  }

  // Speak text (text-to-speech)
  speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set the language for speech synthesis
    utterance.onstart = () => {
      console.log('Speaking...');
    };
    utterance.onend = () => {
      console.log('Speech ended');
    };

    this.synth.speak(utterance);
  }

  // Stop any ongoing speech
  stopSpeaking() {
    this.synth.cancel();
  }
}

const voiceRecognitionService = new VoiceRecognitionService();

export default voiceRecognitionService;
