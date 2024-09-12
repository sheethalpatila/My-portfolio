// SkillsCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const ImageContainer = styled(Box)({
  width: '100px',
  height: '100px',
  borderRadius: '8px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  marginRight: '16px',
});

const SkillsCard = ({ image, title, tagline, darkMode }) => {
  return (
    <Card className="flex items-center"
      style={{ paddingLeft: '20px', height: '80%', width: '100%', backgroundColor: darkMode ? "#fff" : "#1a1a1a", color: darkMode ? "#1a1a1a" : "#fff", }}>
      <ImageContainer style={{ borderRadius: '10%', padding: '5px', height: '50%', width: '20%' }}>
        <img src={image} alt={title} className="w-full h-full object-cover" style={{ padding: '2%', borderRadius: '10%' }} />
      </ImageContainer>
      <CardContent className="flex-1">
        <Typography variant="h6" className="font-bold">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {tagline}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SkillsCard;
