import React from "react";
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    Divider,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { ArrowUpward } from "@mui/icons-material";

const Experience = ({ darkMode }) => {
    const experiences = [
        {
            id: 1,
            title: "Sr. Associate Technology - MERN",
            company: "Synechron",
            description:
                "Developing scalable MERN stack applications, reusable React components, optimized Node.js/Express APIs, secure architectures, deployment workflows, code reviews, and mentoring junior developers.",
            year: "Apr 2026 - Present",
        },
        {
            id: 2,
            title: "Full-Stack Developer",
            company: "Smart Controls India Limited",
            description:
                "Developed MERN applications for clients including MRF, Apollo, Toyo, ATG, Yokohama, Ralson, and Polyhose. Automated backups, log rotations, server setup, failover testing, PSA/PSS synchronization, and MongoDB query optimization.",
            year: "Oct 2022 - Mar 2026",
        },
        {
            id: 3,
            title: "Full-Stack Developer",
            company: "AXXONET System Technologies",
            description:
                "Built healthcare web and mobile applications using React, React Native, GraphQL, Node.js, PostgreSQL, and Docker. Created dashboards, map modules, PDF/Excel exports, and automated deployment workflows.",
            year: "Oct 2021 - Oct 2022",
        },
        {
            id: 4,
            title: "Frontend Developer Intern",
            company: "AMOPA Solutions",
            description:
                "Developed responsive Angular websites, integrated REST APIs, and improved page load performance using HTML, CSS, Bootstrap, and frontend optimization practices.",
            year: "Dec 2020 - Apr 2021",
        },
    ];

    return (
        <section
            style={{
                backgroundImage: `url(${
                    darkMode
                        ? `${process.env.PUBLIC_URL}/bg1.jpg`
                        : `${process.env.PUBLIC_URL}/blackbg.png`
                })`,
                color: darkMode ? "#1a1a1a" : "#d1d1d1",
            }}
            id="experience"
            className="relative min-h-screen py-12"
        >
            <Container>
                <Grid item xs={12} sm={6} className="right-section">
                    <h1 className="custom-nameTag">Experience</h1>
                    <Divider
                        className="my-0"
                        style={{
                            fontSize: "20px",
                            backgroundColor: darkMode ? "#000" : "#fff",
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={6} className="right-section text-center">
                    <ArrowUpward className="mt-2" />
                </Grid>

                <div className="relative">
                    <div
                        className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full"
                        style={{ backgroundColor: "#00acc1" }}
                    />

                    {experiences.map((exp, index) => (
                        <Box
                            key={exp.id}
                            className={`relative mb-12 flex items-center ${
                                index % 2 !== 0
                                    ? "md:justify-start"
                                    : "md:justify-end"
                            } flex-col md:flex-row`}
                        >
                            {index % 2 !== 0 ? (
                                <Box
                                    className="hidden md:block w-1/2"
                                    sx={{
                                        paddingLeft: {
                                            md: "80px",
                                            lg: "100px",
                                        },
                                        position: "relative",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            right: "-10px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: 0,
                                            height: 0,
                                            marginRight: {
                                                md: "30px",
                                                lg: "50px",
                                            },
                                            borderTop:
                                                "10px solid transparent",
                                            borderBottom:
                                                "10px solid transparent",
                                            borderLeft: `10px solid ${
                                                darkMode
                                                    ? "#1a1a1a"
                                                    : "#d1d1d1"
                                            }`,
                                        },
                                    }}
                                >
                                    <Card
                                        sx={{
                                            backgroundColor: "#1a1a1a",
                                            color: "#d1d1d1",
                                            maxWidth: 400,
                                        }}
                                    >
                                        <CardContent className="text-left">
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {exp.company}
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: "#00acc1",
                                                    fontWeight: "bold",
                                                    marginTop: "8px",
                                                }}
                                            >
                                                {exp.title}
                                            </Typography>

                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    display: "block",
                                                    marginTop: "4px",
                                                    color: "#9ca3af",
                                                }}
                                            >
                                                {exp.year}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{ marginTop: "8px" }}
                                            >
                                                {exp.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ) : (
                                <Box style={{ color: "#d1d1d1" }}>
                                    <h1 className="custom-h1">{exp.year}</h1>
                                </Box>
                            )}

                            <div className="relative w-0.5 h-full flex flex-col items-center md:w-0.5 md:items-center md:mx-0 mx-auto">
                                <WorkIcon
                                    style={{
                                        fontSize: "30px",
                                        color: darkMode
                                            ? "#1a1a1a"
                                            : "#d1d1d1",
                                    }}
                                />
                            </div>

                            {index % 2 === 0 ? (
                                <Box
                                    className="hidden md:block w-1/2"
                                    sx={{
                                        paddingLeft: {
                                            xs: "30px",
                                            lg: "80px",
                                        },
                                        paddingTop: "20px",
                                        position: "relative",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            left: "-10px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: 0,
                                            height: 0,
                                            marginLeft: {
                                                md: "30px",
                                                lg: "50px",
                                            },
                                            borderTop:
                                                "10px solid transparent",
                                            borderBottom:
                                                "10px solid transparent",
                                            borderRight: `10px solid ${
                                                darkMode ? "#1a1a1a" : "#fff"
                                            }`,
                                        },
                                    }}
                                >
                                    <Card
                                        sx={{
                                            backgroundColor: "#1a1a1a",
                                            color: "#d1d1d1",
                                            maxWidth: 400,
                                        }}
                                    >
                                        <CardContent className="text-left">
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {exp.company}
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: "#00acc1",
                                                    fontWeight: "bold",
                                                    marginTop: "8px",
                                                }}
                                            >
                                                {exp.title}
                                            </Typography>

                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    display: "block",
                                                    marginTop: "4px",
                                                    color: "#9ca3af",
                                                }}
                                            >
                                                {exp.year}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{ marginTop: "8px" }}
                                            >
                                                {exp.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ) : (
                                <Box style={{ color: "#d1d1d1" }}>
                                    <h1 className="custom-h1">{exp.year}</h1>
                                </Box>
                            )}

                            <Box className="block md:hidden w-full text-left p-4">
                                <Card
                                    sx={{
                                        backgroundColor: "#1a1a1a",
                                        color: "#d1d1d1",
                                        maxWidth: 400,
                                    }}
                                >
                                    <CardContent className="text-left">
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            {exp.company}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: "#00acc1",
                                                fontWeight: "bold",
                                                marginTop: "8px",
                                            }}
                                        >
                                            {exp.title}
                                        </Typography>

                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: "block",
                                                marginTop: "4px",
                                                color: "#9ca3af",
                                            }}
                                        >
                                            {exp.year}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{ marginTop: "8px" }}
                                        >
                                            {exp.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Experience;