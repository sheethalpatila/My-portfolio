import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Link,
    Grid,
    Container,
    Divider,
} from "@mui/material";

const projects = [
    {
        year: "Year",
        title: "Projects",
        builtWith: "Built with",
        link: "Link",
    },
    {
        year: "2026",
        title: "QueryLlama Local",
        builtWith: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
        link: "#",
    },
    {
        year: "2024",
        title: "Portfolio Website",
        builtWith: ["React", "Material-UI", "Tailwind CSS", "i18n"],
        link: "https://sheethalpatilportfolio.vercel.app",
    },
    {
        year: "2024",
        title: "API Testing Tool",
        builtWith: ["React", "Node.js", "Material-UI"],
        link: "https://test-your-api.vercel.app",
    },
    {
        year: "2024",
        title: "JSON Comparator",
        builtWith: ["React", "Material-UI", "JSON"],
        link: "https://json-comparator-six.vercel.app",
    },
    {
        year: "2024",
        title: "Company About Page",
        builtWith: ["React", "Material-UI", "Tailwind CSS"],
        link: "https://company-about-page.vercel.app",
    },
    {
        year: "2021",
        title: "T-Shirts E-commerce",
        builtWith: ["React", "Node.js", "Bootstrap", "JWT", "Stripe"],
        link: "https://frontend-llxhz3b30-sheethals-projects.vercel.app",
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
        <CardContent>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={2} container justifyContent="center">
                    <Typography className="font-medium text-sm">
                        {year}
                    </Typography>
                </Grid>

                <Grid item xs={3} container justifyContent="center">
                    <Typography className="font-medium text-center">
                        {title}
                    </Typography>
                </Grid>

                <Grid item xs={5} container justifyContent="center">
                    {Array.isArray(builtWith) && builtWith.length ? (
                        <Grid container justifyContent="center">
                            {builtWith.map((item) => (
                                <button
                                    disabled
                                    key={item}
                                    className="px-2 font-medium text-xs rounded-2xl py-1 m-1 text-white bg-gray-600"
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
                    {link !== "Link" && link !== "#" ? (
                        <Link
                            className="font-medium text-sm text-gray-500 truncate"
                            color="primary"
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "grey" }}
                        >
                            View Project
                        </Link>
                    ) : (
                        <Typography variant="body2" textAlign="center">
                            {link === "#" ? "Private" : link}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

const Projects = ({ darkMode }) => {
    return (
        <section
            id="projects"
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
                    <h1 className="custom-nameTag">Projects</h1>
                    <Divider
                        className="my-0"
                        style={{
                            fontSize: "20px",
                            backgroundColor: darkMode ? "#000" : "#fff",
                        }}
                    />
                </Grid>

                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        darkMode={darkMode}
                    />
                ))}
            </Container>
        </section>
    );
};

export default Projects;