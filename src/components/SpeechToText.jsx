import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = ({ text, setText }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleStart = () => {
    SpeechRecognition.startListening();
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    setText(transcript);
  };

  const handleReset = () => {
    resetTranscript();
    setText('');
  };

  return (
    <div>
      <h1>Speech-to-Text</h1>
      <button onClick={handleStart}>Start Listening</button>
      <button onClick={handleStop}>Stop Listening</button>
      <button onClick={handleReset}>Reset</button>
      <p>{transcript}</p>
      <p>Converted Text: {text}</p>
    </div>
  );
};

export default SpeechToText;
