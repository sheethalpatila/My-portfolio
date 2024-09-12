import React from "react";
import { Card, CardContent, Typography, Link, Grid, Container, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const projects = [
    {
        year: "Year",
        title: "Projects",
        builtWith: "Built with",
        builtWithLinks: ["React", "Tailwind CSS", "Material-UI"],
        link: "Link"
    },
    {
        year: "2024",
        title: "API Testing Tool",
        builtWith: ["React", "Material-UI"],
        builtWithLinks: ["React", "Tailwind CSS", "Material-UI"],
        link: "https://github.com/sheethalpatila/Test-your-API"
    },
    {
        year: "2024",
        title: "JSON Comparator",
        builtWith: ["React", "Material-UI"],
        builtWithLinks: ["React", "Tailwind CSS", "Material-UI"],
        link: "https://github.com/sheethalpatila/json-comparator"
    },
    {
        year: "2024",
        title: "Portfolio",
        builtWith: ["React", "Material-UI", "Tailwind CSS"],
        builtWithLinks: ["React", "Tailwind CSS", "Material-UI"],
        link: "https://github.com/sheethalpatila/My-portfolio"
    },
    {
        year: "2024",
        title: "Company About Page",
        builtWith: ["React", "Material-UI", "Tailwind CSS"],
        builtWithLinks: ["React", "Tailwind CSS", "Material-UI"],
        link: "https://github.com/sheethalpatila/company-about-page"
    },
    {
        year: "2024",
        title: "T-shirts E-commerce",
        builtWith: ["React", "Bootstrap", "JWT"],
        builtWithLinks: ["React", "Tailwind CSS", "Material-UI"],
        link: "https://github.com/sheethalpatila/frontend"
    },
];

const ProjectCard = ({ year, title, builtWith, link, darkMode }) => (
    <Card
        sx={{
            backgroundColor: darkMode ? "#fff" : "#1a1a1a",
            color: darkMode ? "#1a1a1a" : "#e5e5e5",
            my: 1,
        }}
    >
        <CardContent >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={2} container justifyContent="center">
                    <Typography className="font-medium text-sm">{year}</Typography>
                </Grid>
                <Grid item xs={3} container justifyContent="center">
                    <Typography className="font-medium">{title}</Typography>
                </Grid>
                <Grid item xs={5} container justifyContent="center">
                    {Array.isArray(builtWith)  && builtWith.length ? (
                        <Grid container justifyContent="center">
                            {builtWith.map((item) => (
                                <button
                                    disabled
                                    key={item}
                                    className="px-2 font-medium text-xs rounded-2xl py-1 m-1 
                                    text-white bg-gray-600"
                                >
                                    {item}
                                </button>
                            ))}
                        </Grid>
                    ) : (
                        <Typography variant="body2" textAlign="center">
                            {builtWith}
                        </Typography>
                    )}
                </Grid>
                <Grid item xs={2} container justifyContent="center">
                    {link !== "Link" ? (
                        <Link
                            className="font-medium text-sm text-gray-500 truncate"
                            color="primary"
                            href={link}
                            target="_blank"
                            style={{ color: darkMode ? "grey" : "grey" }}
                        >
                            {link}
                        </Link>
                    ) : (
                        <Typography variant="body2" textAlign="center">
                            {link}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

const Projects = ({ darkMode }) => {
    const { t } = useTranslation();

    return (
        <section
            id="projects"
            style={{
                backgroundImage: `url(${darkMode ? `${process.env.PUBLIC_URL}/bg1.jpg` : `${process.env.PUBLIC_URL}/blackbg.png`})`,
                color: darkMode ? "#1a1a1a" : "#d1d1d1",
            }}
            className="backgroundImageStyle section"
        >
            <Container>
                <Grid item xs={12} sm={6} className="right-section">
                    <h1 className="custom-nameTag">{t('projects')}</h1>
                    <Divider className="my-0" style={{ fontSize: "20px", backgroundColor: darkMode ? "#000" : "#fff" }} />
                </Grid> 
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} darkMode={darkMode} />
                ))} 
            </Container>
        </section>
    );
};

export default Projects;
