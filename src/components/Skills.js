import { Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();


    return (
        <section id="skills" className="min-h-screen flex items-center justify-center bg-background-default">
        <Container>
          <Typography variant="h2" className="text-center mb-4">{t('skills')}</Typography>
          <Typography variant="h5" className="text-center">{t('skills')}</Typography>
         </Container>
        </section>      
    )
}

export default Skills;