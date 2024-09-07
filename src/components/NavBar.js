import React, { useState } from 'react';
import { AppBar, Toolbar, Button,Typography, IconButton } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import NightsStayIcon from '@mui/icons-material/NightsStay'; // Dark mode icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Light mode icon
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/CallOutlined';
import "./General.css";

const NavBar = ({handleThemeChange,darkMode}) => {
    const { t, i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  


    return(
    <AppBar position="sticky" className="navnavbar" color="primary">
        <Toolbar className="flex justify-between">
        <div className="flex items-center space-x-1" style={{height:'20px'}}>
             <IconButton color="inherit">
                <GitHubIcon />
             </IconButton >
             <IconButton color="inherit">
                <LinkedInIcon />
             </IconButton>
             <IconButton color="inherit" >
                <EmailIcon />
             </IconButton>
             <IconButton color="inherit">
                <CallIcon />
             </IconButton>
             </div>
            {/* <Typography variant="h4">Sheethal Patil A</Typography> */}
            <div className="flex items-center " style={{height:'20px'}}>
                <ScrollLink to="intro" smooth duration={500}>
                    <Button color="inherit">{t('intro')}</Button>
                </ScrollLink>
                <ScrollLink to="skills" smooth duration={500}>
                    <Button color="inherit">{t('skills')}</Button>
                </ScrollLink>
                <ScrollLink to="projects" smooth duration={500}>
                    <Button color="inherit">{t('projects')}</Button>
                </ScrollLink>
                <ScrollLink to="experience" smooth duration={500}>
                    <Button color="inherit">{t('experience')}</Button>
                </ScrollLink>
                <IconButton color="inherit" onClick={() => changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                    <LanguageIcon />
                </IconButton>
                <IconButton color="inherit" onClick={handleThemeChange}>
                    {darkMode ? <NightsStayIcon /> :<WbSunnyIcon /> }
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>
    )
}

export default NavBar 