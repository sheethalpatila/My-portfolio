import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const CopyIconButton = ({ icon: Icon, valueToCopy, initialTooltip }) => {
  const [tooltipText, setTooltipText] = useState(initialTooltip);

  const handleCopy = () => {
    navigator.clipboard.writeText(valueToCopy);
    setTooltipText('Copied!');
    setTimeout(() => {
      setTooltipText('Copy');
    }, 2000); // Reset after 2 seconds
  };

  return (
    <Tooltip title={tooltipText} onMouseEnter={() => setTooltipText(`Copy ${initialTooltip}`)}>
      <IconButton color="inherit" onClick={handleCopy}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

export default CopyIconButton;
