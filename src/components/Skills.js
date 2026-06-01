import { Card, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import SkillsCard from "./SkillsCard";
import CheckIcon from "@mui/icons-material/Check";
import BuildIcon from "@mui/icons-material/Build";
import TerminalIcon from "@mui/icons-material/Terminal";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const Skills = ({ darkMode }) => {
    const skillsData = [
        {
            image: `${process.env.PUBLIC_URL}/javascript.png`,
            title: "JavaScript",
            tagline: "Language",
        },
        {
            image: `${process.env.PUBLIC_URL}/typescript.png`,
            title: "TypeScript",
            tagline: "Language",
        },
        {
            image: `${process.env.PUBLIC_URL}/react.png`,
            title: "React",
            tagline: "Frontend",
        },
        {
            image: `${process.env.PUBLIC_URL}/react_native.png`,
            title: "React Native",
            tagline: "Mobile App",
        },
        {
            image: `${process.env.PUBLIC_URL}/angular.png`,
            title: "Angular",
            tagline: "Frontend",
        },
        {
            image: `${process.env.PUBLIC_URL}/node.png`,
            title: "Node.js",
            tagline: "Backend",
        },
        {
            image: `${process.env.PUBLIC_URL}/express.png`,
            title: "Express.js",
            tagline: "REST APIs",
        },
        {
            image: `${process.env.PUBLIC_URL}/mongodb.png`,
            title: "MongoDB",
            tagline: "Database",
        },
        {
            image: `${process.env.PUBLIC_URL}/postgresql.png`,
            title: "PostgreSQL",
            tagline: "Database",
        },
    ];

    const tools = [
        { title: "Git, GitHub, GitLab" },
        { title: "Postman" },
        { title: "MongoDB Compass" },
        { title: "NoSQLBooster" },
        { title: "VS Code" },
        { title: "Jest, React Testing Library, Cypress" },
    ];

    const knowledge = [
        {
            title: "MongoDB Aggregation, Indexing, Query Optimization",
        },
        {
            title: "REST APIs, GraphQL, API Integration",
        },
        {
            title: "Tailwind CSS, Material-UI, Bootstrap",
        },
        {
            title: "AWS, CI/CD, Deployment Automation",
        },
        {
            title: "Shell Scripting, Batch Scripting, Linux",
        },
        {
            title: "Grafana, Prometheus, PM2, Nginx",
        },
        {
            title: "i18next, Theme Management, SEO",
        },
    ];

    return (
        <section
            id="skills"
            style={{
                backgroundImage: `url(${
                    darkMode
                        ? `${process.env.PUBLIC_URL}/bg1.jpg`
                        : `${process.env.PUBLIC_URL}/blackbg.png`
                })`,
                color: darkMode ? "#1a1a1a" : "#d1d1d1",
            }}
            className="backgroundImageStyle section"
        >
            <Container>
                <Grid item xs={12} sm={6} className="right-section">
                    <h1 className="custom-nameTag">Skills</h1>
                    <Divider
                        className="my-0"
                        style={{
                            fontSize: "20px",
                            backgroundColor: darkMode ? "#000" : "#fff",
                        }}
                    />
                </Grid>

                <Container className="p-5" sx={{ borderRadius: "5px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <Card
                                className="p-4"
                                style={{
                                    backgroundColor: darkMode
                                        ? "#fff"
                                        : "#1a1a1a",
                                    color: darkMode ? "#1a1a1a" : "#e5e5e5",
                                    boxShadow:
                                        "0 5px 10px rgba(0, 0, 0, 0.2)",
                                }}
                            >
                                <Typography>
                                    <TerminalIcon
                                        style={{ marginRight: "10px" }}
                                    />
                                    Development
                                </Typography>
                            </Card>

                            <Grid container spacing={2} className="pt-3">
                                {skillsData.map((skill, index) => (
                                    <Grid key={index} item xs={12} sm={6} md={4}>
                                        <SkillsCard
                                            darkMode={darkMode}
                                            image={skill.image}
                                            title={skill.title}
                                            tagline={skill.tagline}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Container>
                                <Grid container spacing={3} className="mb-6">
                                    <Card
                                        className="p-4 w-full"
                                        style={{
                                            backgroundColor: darkMode
                                                ? "#fff"
                                                : "#1a1a1a",
                                            color: darkMode
                                                ? "#1a1a1a"
                                                : "#e5e5e5",
                                            boxShadow:
                                                "0 5px 10px rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        <Grid item xs={12}>
                                            <Typography>
                                                <BuildIcon
                                                    style={{
                                                        marginRight: "5px",
                                                    }}
                                                />
                                                Tools
                                            </Typography>
                                        </Grid>

                                        {tools.map((tool, i) => (
                                            <Grid
                                                item
                                                xs={12}
                                                key={i}
                                                style={{
                                                    margin: "0px",
                                                    padding: "5px",
                                                }}
                                            >
                                                <Typography className="text-left">
                                                    <CheckIcon
                                                        style={{
                                                            fontSize: "medium",
                                                            marginRight: "10px",
                                                        }}
                                                    />
                                                    {tool.title}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Card>
                                </Grid>

                                <Grid container spacing={3} className="p-3">
                                    <Card
                                        className="p-4 w-full"
                                        style={{
                                            backgroundColor: darkMode
                                                ? "#fff"
                                                : "#1a1a1a",
                                            color: darkMode
                                                ? "#1a1a1a"
                                                : "#e5e5e5",
                                            boxShadow:
                                                "0 5px 10px rgba(0, 0, 0, 0.2)",
                                        }}
                                    >
                                        <Grid item xs={12}>
                                            <Typography>
                                                <EmojiObjectsIcon
                                                    style={{
                                                        marginRight: "5px",
                                                    }}
                                                />
                                                Knowledge
                                            </Typography>
                                        </Grid>

                                        {knowledge.map((item, i) => (
                                            <Grid
                                                item
                                                xs={12}
                                                key={i}
                                                style={{
                                                    margin: "0px",
                                                    padding: "5px",
                                                }}
                                            >
                                                <Typography className="text-left">
                                                    <CheckIcon
                                                        style={{
                                                            fontSize: "medium",
                                                            marginRight: "10px",
                                                        }}
                                                    />
                                                    {item.title}
                                                </Typography>
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