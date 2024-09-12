import { Card, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import SkillsCard from "./SkillsCard";
import CheckIcon from '@mui/icons-material/Check';
import BuildIcon from '@mui/icons-material/Build';
import TerminalIcon from '@mui/icons-material/Terminal';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const Skills = ({ darkMode }) => {
    const { t } = useTranslation();

    const skillsData = [
        { image: `${process.env.PUBLIC_URL}/html.png`, title: 'HTML', tagline: 'UI Development', yearsOfExperience: 3.5 },
        { image: `${process.env.PUBLIC_URL}/css.png`, title: 'CSS', tagline: 'UI Development', yearsOfExperience: 3.5 },
        { image: `${process.env.PUBLIC_URL}/javascript.png`, title: 'JavaScript', tagline: 'UI Development', yearsOfExperience: 3.5 },
        { image: `${process.env.PUBLIC_URL}/react.png`, title: 'React', tagline: 'UI Development', yearsOfExperience: 3.5 },
        { image: `${process.env.PUBLIC_URL}/mongodb.png`, title: 'MongoDB', tagline: 'Database', yearsOfExperience: 3.5 },
        { image: `${process.env.PUBLIC_URL}/node.png`, title: 'Node', tagline: 'API Development', yearsOfExperience: 3.5 },
        { image: `${process.env.PUBLIC_URL}/react_native.png`, title: 'React Native', tagline: 'UI Development', yearsOfExperience: 1.5 },
    ];

    const tools = [
        { title: 'Git (Github, Gitlab, GitDesktop)' },
        { title: 'Postman' },
        { title: 'NoSQLBooster' },
        { title: 'MongoDB Compass' },
        { title: 'VS-Code' },
    ];

    const knowledge = [
        { title: 'PM2, Nginx' },
        { title: 'I18next, Theme management' },
        { title: 'Eslint, Jest, Coverage' },
        { title: 'Tailwind, Material UI' },
        { title: 'SEO' },
        { title: 'RxDb, PgAdmin, GraphQL' },
    ];

    return (
        <section
            id="skills"
            style={{
                backgroundImage: `url(${darkMode ? `${process.env.PUBLIC_URL}/bg1.jpg` : `${process.env.PUBLIC_URL}/blackbg.png`})`,
                color: darkMode ? "#1a1a1a" : "#d1d1d1",
            }}
            className="backgroundImageStyle section"
        >
            <Container>
                <Grid item xs={12} sm={6} className="right-section">
                    <h1 className="custom-nameTag">{t('skills')}</h1>
                    <Divider className="my-0" style={{ fontSize: "20px", backgroundColor: darkMode ? "#000" : "#fff" }} />
                </Grid>

                <Container className="p-5" sx={{ borderRadius: "5px" }}>
                    <Grid container spacing={3}>
                        {/* Skills Section */}
                        <Grid item xs={12} md={8}> 
                                        <Card
                                            className={`p-4`}
                                            style={{
                                                backgroundColor: darkMode ? "#fff" : "#1a1a1a",
                                                color: darkMode ? "#1a1a1a" : "#e5e5e5",
                                                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)'
                                            }}>
                            <Typography><TerminalIcon style={{ marginRight: '10px' }} />{t('development')}</Typography>
                            </Card> <Grid container spacing={2} className="pt-3">
                                {skillsData.map((skill, index) => (
                                    <Grid key={index} item xs={12} sm={6} md={4}>
                                        <SkillsCard
                                            darkMode={darkMode}
                                            image={skill.image}
                                            title={t(skill.title)}
                                            tagline={t(skill.tagline)}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Tools and Knowledge Section */}
                        <Grid item xs={12} md={4}>
                            <Container>
                                <Grid container spacing={3} className="mb-6"> 
                                        <Card
                                            className={`p-4`}
                                            style={{
                                                backgroundColor: darkMode ? "#fff" : "#1a1a1a",
                                                color: darkMode ? "#1a1a1a" : "#e5e5e5",
                                                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)'
                                            }}>
                                            <Grid item xs={12}>
                                                <Typography><BuildIcon style={{ marginRight: '5px' }} />{t('tools')}</Typography>
                                            </Grid>
                                            {tools.map((tool, i) => (
                                                <Grid item xs={12} key={i} style={{ margin: "0px", padding: "5px" }}>
                                                    <Typography className="text-left"><CheckIcon style={{ fontSize: 'medium', marginRight: '10px' }} />{t(tool.title)}</Typography>
                                                </Grid>
                                            ))}
                                        </Card> 
                                </Grid>

                                <Grid container spacing={3} className="p-3"> 
                                        <Card
                                            className={`p-4`}
                                            style={{
                                                backgroundColor: darkMode ? "#fff" : "#1a1a1a",
                                                color: darkMode ? "#1a1a1a" : "#e5e5e5",
                                                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)'
                                            }}>
                                            <Grid item xs={12}>
                                                <Typography ><EmojiObjectsIcon style={{ marginRight: '5px' }} />{t('knowledge')}</Typography>
                                            </Grid>
                                            {knowledge.map((item, i) => (
                                                <Grid item xs={12} key={i} style={{ margin: "0px", padding: "5px" }}>
                                                    <Typography className="text-left"><CheckIcon style={{ fontSize: 'medium', marginRight: '10px' }} />{t(item.title)}</Typography>
                                                </Grid>
                                            ))}
                                        </Card> 
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </section>
    );
};

export default Skills;
