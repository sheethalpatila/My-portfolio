import React  from 'react';
import { AppBar, Toolbar, Button, IconButton, Tooltip } from '@mui/material';
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
import CopyIconButton from './CopyIconButton';


const NavBar = ({ handleThemeChange, darkMode }) => {
    const { t, i18n } = useTranslation(); 
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const contactDetails = [
        { icon: GitHubIcon, link: 'https://github.com/sheethalpatila?tab=repositories', tooltip: 'Open GitHub Profile', copy: false },
        { icon: LinkedInIcon, link: 'https://www.linkedin.com/in/sheethal-patil-a-9b88581a6/', tooltip: 'Open LinkedIn Profile', copy: false },
        { icon: EmailIcon, valueToCopy: 'sapatil201@gmail.com', tooltip: 'Email Id', copy: true },
        { icon: CallIcon, valueToCopy: '+919164042089', tooltip: 'Phone Number', copy: true },
      ];

    return (
        <AppBar position="sticky" className="navnavbar" color="primary">
            <Toolbar className="flex justify-between">
                <div className="flex items-center space-x-1" style={{ height: '20px' }}>
                    {contactDetails.map((detail, index) =>
                        detail.copy ? (
                            <CopyIconButton
                                key={index}
                                icon={detail.icon}
                                valueToCopy={detail.valueToCopy}
                                initialTooltip={detail.tooltip}
                            />
                        ) : (
                            <Tooltip title={detail.tooltip}>
                            <IconButton key={index} color="inherit" href={detail.link} target="_blank">
                                <detail.icon />
                            </IconButton>
                            </Tooltip>
                        )
                    )}
                </div>

                {/* <Typography variant="h4">Sheethal Patil A</Typography> */}
                <div className="flex items-center " style={{ height: '20px' }}>
                    <ScrollLink to="intro" smooth duration={500}>
                        <Button color="inherit">{t('intro')}</Button>
                    </ScrollLink>
                    <ScrollLink to="whatIDo" smooth duration={500}>
                        <Button color="inherit">{t('what i do')}</Button>
                    </ScrollLink>
                    <ScrollLink to="skills" smooth duration={500}>
                        <Button color="inherit">{t('skills')}</Button>
                    </ScrollLink>
                    <ScrollLink to="projects" smooth duration={500}>
                        <Button color="inherit">{t('projects')}</Button>
                    </ScrollLink>
                    <ScrollLink to="experience" smooth duration={500}>
                        <Button color="inherit">{t('experienceTitle')}</Button>
                    </ScrollLink>
                    <Tooltip title={i18n.language === 'en' ? 'View in Hindi' : 'View in English'}>
                    <IconButton color="inherit" onClick={() => changeLanguage(i18n.language === 'en' ? 'hindi' : 'en')}>
                        <LanguageIcon />
                    </IconButton>
                    </Tooltip>

                    <Tooltip title={darkMode ? "View in Dark Mode" : "View in Light Mode"}>
                    <IconButton color="inherit" onClick={handleThemeChange}>
                        {darkMode ? <NightsStayIcon /> : <WbSunnyIcon />}
                    </IconButton> 
                    </Tooltip>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar 