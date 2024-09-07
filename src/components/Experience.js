import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import WorkIcon from "@mui/icons-material/Work";

const experiences = [
    { id: 1, title: "Position 1", company: "Company A", description: "Description for position 1" },
    { id: 2, title: "Position 2", company: "Company B", description: "Description for position 2" },
    { id: 3, title: "Position 3", company: "Company C", description: "Description for position 3" },
    { id: 4, title: "Position 4", company: "Company d", description: "Description for position 4" },
];

const Experience = ({ darkMode }) => {
    const { t } = useTranslation();

    return (
        <section
            style={{
                backgroundImage: `url(${darkMode ? `${process.env.PUBLIC_URL}/white.png` : `${process.env.PUBLIC_URL}/blackbg.png`})`,
                color: darkMode ? "#000000" : "#ffffff",
            }}
            id="experience"
            className="relative min-h-screen py-12"
        >
            <Container>
                <Typography variant="h2" className="text-center mb-8">{t('experience')}</Typography>

                <div className="relative">
                    {/* Timeline */}
                    <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-500" />

                    {/* Timeline Items */}
                    {experiences.map((exp, index) => (
                        <Box
                            key={exp.id}
                            className={`relative mb-12 flex items-center ${index % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'} flex-col md:flex-row`}
                        >
                            {/* Left Side Card or Empty for Large Screens */}
                            {index % 2 !== 0 ? (
                                <Box className="hidden md:block w-1/2 p-4">
                                    <Typography variant="h5" className="font-bold mb-2">{exp.title}</Typography>
                                    <Typography variant="h6" className="font-semibold mb-2">{exp.company}</Typography>
                                    <Typography variant="body1">{exp.description}</Typography>
                                </Box>
                            ) : (
                                <Box className=" "><h1>vggd</h1></Box>
                            )}

                            {/* Divider with Icon */}
                            <div className="relative w-0.5 h-full flex flex-col items-center md:w-0.5 md:items-center md:mx-0 mx-auto">
                                {/* <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white mb-4" />
                                <div className="h-full bg-gray-500 hidden md:block" /> */}
                                <WorkIcon />
                            </div>

                            {/* Right Side Card or Empty for Large Screens */}
                            {index % 2 === 0 ? (
                                <Box className="hidden md:block w-1/2 p-4">
                                    <Typography variant="h5" className="font-bold mb-2">{exp.title}</Typography>
                                    <Typography variant="h6" className="font-semibold mb-2">{exp.company}</Typography>
                                    <Typography variant="body1">{exp.description}</Typography>
                                </Box>
                            ) : (
                                <Box className=" "><h1> vggd</h1></Box>
                            )}

                            {/* Cards for Small Screens (always on the right side of the timeline) */}
                            <Box className="block md:hidden w-full text-left p-4">
                                <div className="flex items-start">
                                    {/* Small Screen Icon */}
                                    <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white mr-4" />
                                    <div>
                                        <Typography variant="h5" className="font-bold mb-2">{exp.title}</Typography>
                                        <Typography variant="h6" className="font-semibold mb-2">{exp.company}</Typography>
                                        <Typography variant="body1">{exp.description}</Typography>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Experience;
