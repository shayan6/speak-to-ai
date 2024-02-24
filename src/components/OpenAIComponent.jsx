
import React, { useState } from 'react';
import OpenAI from 'openai';

const OpenAIComponent = ({ text }) => {
  const [outputText, setOutputText] = useState('');

  const handleGenerateResponse = async () => {
    if (!text) {
      return;
    }

    try {
      const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
      const response = await openai.chat.completions.create({
        messages: [{ role: 'user', content: text }],
        model: 'gpt-3.5-turbo',
      });
      const generatedText = response.data.choices[0].message.content;
      setOutputText(generatedText);

      // Convert generated text to speech
      speakText(generatedText);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setOutputText(error.message);

      // Convert generated text to speech
      speakText(error.message);
    }
  };

  const speakText = (value) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(value);
    synth.speak(utterance);
  };

  return (
    <div>
      <h1>OpenAI GPT Interaction</h1>
      <button onClick={handleGenerateResponse}>Generate Response</button>
      <p>Generated Text: {outputText}</p>
    </div>
  );
};

export default OpenAIComponent;
