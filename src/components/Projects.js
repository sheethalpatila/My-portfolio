import { Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();


    return (
        <section id="projects" className="min-h-screen flex items-center justify-center bg-background-default">
        <Container>
          <Typography variant="h2" className="text-center mb-4">{t('projrcts')}</Typography>
          <Typography variant="h5" className="text-center">{t('projrcts')}</Typography>
         </Container>
        </section>      
    )
}

export default Projects;