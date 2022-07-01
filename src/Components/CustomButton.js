import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({
  onClick,
  children,
  margin = '20px',
  backgroundColor = 'peachpuff',
  variant = 'text'
}) {
  return (
    <Button 
      className="custom-button"
      onClick={onClick}
      variant={variant}
      sx={{
        background: backgroundColor,
        margin: margin
      }}>{children}</Button>
  );
}
