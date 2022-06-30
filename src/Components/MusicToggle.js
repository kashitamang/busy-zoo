import React from 'react';
import Switch from '@mui/material/Switch';

export default function MusicToggle({
  onClick,
  children,
  value
}) {
  return (
    <Switch
      className="music-toggle"
      onclick={onClick}
      value="music"
    />
  );
}
