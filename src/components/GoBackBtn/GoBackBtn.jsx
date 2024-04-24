import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history stack
  };

  return (
    <button onClick={handleGoBack}>Go Back</button>
  );
};

export default GoBackButton;
