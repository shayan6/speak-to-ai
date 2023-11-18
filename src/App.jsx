import React, { useState } from 'react';
import SpeechToText from './components/SpeechToText';
import OpenAIComponent from './components/OpenAIComponent';
import './index.css';

function App() {
  const [text, setText] = useState('');
  return (
    <div className="container">
      <SpeechToText text={text} setText={setText} />
      <OpenAIComponent text={text} />
    </div>
  );
}

export default App;
