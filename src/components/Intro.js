import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "./General.css";

const Intro = ({ darkMode }) => {
    const { t } = useTranslation();

    return (
        <section
            id="intro"
            style={{
                backgroundImage: `url(${darkMode ? `${process.env.PUBLIC_URL}/bg1.jpg` : `${process.env.PUBLIC_URL}/blackbg.png`})`,
                color: darkMode ? "#d1d1d1" : "#d1d1d1",
            }}
            className="backgroundImageStyle section"
        >
            <Container>
                <Grid container>
                    {/* Left Side: Centered Text */}
                    <Grid item xs={12} sm={6} className="left-section">
                        <ul>
                        <Typography variant="h3" component="h3"  >
                            {t('name')}
                        </Typography>
                        <Typography variant="subtitle1" style={{ fontWeight: '600' }} className="text-right">
                            {t('profession')}
                        </Typography>
                        </ul>
                    </Grid>

                    {/* Right Side: Justified Paragraph Text */}
                    <Grid item xs={12}  sm={6} className="right-section">
                        <Typography variant="body1" style={{ fontWeight: '600' }}>
                            {t('intro1')}
                        </Typography>
                        <Typography variant="body1" style={{ fontWeight: '600' }}>
                            {t('intro2')}
                        </Typography>
                        <Typography variant="body1" style={{ fontWeight: '600' }}>
                            {t('intro3')}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Intro;
