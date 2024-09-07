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
                backgroundImage: `url(${darkMode ? `${process.env.PUBLIC_URL}/white.png` : `${process.env.PUBLIC_URL}/blackbg.png`})`,
                color: darkMode ? "#000000" : "#ffffff",
            }}
            className="backgroundImageStyle section"
        >
            <Container>
                <Grid container  >
                    {/* Left Side: Centered Text */}
                    <Grid item xs={12} sm={6} className="left-section">
                        <ol>
                            <li><h1 className="custom-h1">Sheethal Patil A</h1></li>
                            <li><p>MERN Full-Stack Developer</p></li>
                        </ol>
                    </Grid>

                    {/* Right Side: Justified Paragraph Text */}
                    <Grid item xs={12} sm={6} className="right-section">
                        <p className="paragraph-text" >
                            Detail-oriented and proficient Full-Stack Developer with 3.5 years of experience in developing efficient and scalable web
                            applications using modern technologies across multiple frameworks. Demonstrated ability to lead projects through the full
                            nnovative projects.
                        </p>
                        <p className="paragraph-text" >
                            Detail-oriented and proficient Full-Stack Developer with 3.5 years of experience in developing efficient and scalable web
                            applications using modern technologies across multiple frameworks. Demonstrated ability to lead projects through the full
                            software development lifecycle, from requirement gathering to deployment and maintenance. Skilled in collaborating with
                            cross-functional teams to deliver user-centric solutions and improve system performance. Seeking to leverage extensive
                            experience in front-end and back-end development to contribute to innovative projects.
                        </p>
                        <p className="paragraph-text" >
                            Currently working as a Full-Stack Developer at Smart Controls India Limited, I specialize in developing and maintaining web
                            applications using the MERN stack (MongoDB, Express.js, React, Node.js).I work closely with my team to design and
                            
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Intro;
