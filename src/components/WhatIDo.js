import React from 'react';
import { Card, CardContent, Typography, Divider, Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { SupervisorAccount } from '@mui/icons-material';

const WhatIDo = ({ darkMode }) => {
    const { t } = useTranslation();

    const cardData = [
        {
            title: t('webDevelopmentTitle'),
            icon: <WebIcon />,
            description: t('webDevelopmentDescription'),
            points: t('webDevelopmentPoints', { returnObjects: true })
        },
        {
            title: t('backendDevelopmentTitle'),
            icon: <CodeIcon />,
            description: t('backendDevelopmentDescription'),
            points: t('backendDevelopmentPoints', { returnObjects: true })
        },
        {
            title: t('deploymentTitle'),
            icon: <CloudIcon />,
            description: t('deploymentDescription'),
            points: t('deploymentPoints', { returnObjects: true })
        },
        {
            title: t('onSiteVisitTitle'),
            description: t('onSiteVisitDescription'),
            points: t('onSiteVisitPoints', { returnObjects: true })
        },
        {
            title: t('productDesignTitle'),
            icon: <DesignServicesIcon />,
            description: t('productDesignDescription'),
            points: t('productDesignPoints', { returnObjects: true })
        },
        {
            title: t('clientManagementTitle'),
            icon: <SupervisorAccount />,
            description: t('clientManagementDescription'),
            points: t('clientManagementPoints', { returnObjects: true })
        }
    ];

    return (
        <section
            id="whatIDo"
            style={{
                backgroundImage: `url(${darkMode ? `${process.env.PUBLIC_URL}/bg1.jpg` : `${process.env.PUBLIC_URL}/blackbg.png`})`,
                color: darkMode ? "#1a1a1a" : "#d1d1d1",
            }}
            className="backgroundImageStyle section pb-5"
        >
            <Container>
                <Grid item xs={12} sm={6} className="right-section">
                    <h1 className="custom-nameTag">{t("whatIDo")}</h1>
                    <Divider className="my-0" style={{
                        fontSize: "20px",
                        backgroundColor: darkMode ? "#000" : "#fff"
                    }} />
                </Grid>
                <div className="grid  text-left grid-cols-1 sm:grid-cols-2 gap-6">
                    {cardData.map((card, index) => (
                        <Card key={index} 
                        className={`transition-transform duration-200 rounded-lg p-4 ${
                            darkMode
                              ? 'shadow-lg hover:shadow-xl hover:scale-105 dark:bg-white-500 dark:text-gray-200'
                              : 'shadow-md hover:shadow-lg hover:scale-105 bg-white text-gray-900'
                          }`}
                        style={{
                            backgroundColor: darkMode ? "#f5f5f5" : "#1a1a1a",
                            color: darkMode ? "#1a1a1a" : "#e5e5e5",
                             boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)'
                        }}>
                            <CardContent>
                                <div className="flex items-center">
                                    <div className='pr-2'>  {card.icon} </div>
                                    <Typography variant="h6" className="ml-2 font-bold">
                                        {card.title}
                                    </Typography>
                                </div>
                                <Typography variant="body2">
                                    {card.description}
                                </Typography>
                                <Divider style={{
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                    fontSize: "20px",
                                    backgroundColor: darkMode ? "#grey" : "gray"
                                }} />
                                <ul className="list-disc pl-5 space-y-1">
                                    {card.points.map((point, idx) => (
                                        <li key={idx} style={{ color: darkMode ? "gray" : "#717171" }}>{point}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhatIDo;
