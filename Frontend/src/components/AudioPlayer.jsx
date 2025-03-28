// src/components/AudioPlayer.jsx
import React, { forwardRef } from 'react';

const AudioPlayer = forwardRef((props, ref) => (
  <audio
    ref={ref}
    src="/assets/audio/ya-llegaron-las-pizzas-made-with-Voicemod.mp3"
    preload="auto"
  />
));

export default AudioPlayer;
