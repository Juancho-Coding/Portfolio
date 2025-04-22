import {
    Box,
    Typography,
    Chip,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import AssessmentIcon from "@mui/icons-material/Assessment";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import WaterDamageIcon from "@mui/icons-material/WaterDamage";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

import { useState } from "react";

import FeatureCard from "../components/FeatureCard";
import TechCard from "../components/TechCard";
import classes from "./SoftwareCalibration.module.css";
import banner_calibration from "../assets/project-calibration/banner-calibration.webp";
import imCalibration1 from "../assets/project-calibration/imCalibration1.webp";

const chips = [
    "Automatiza Ensayos",
    "Reduce Errores",
    "Minimiza Intervención",
    "Ahorra Tiempo y Esfuerzo",
    "Genera Documentación",
    "Informes Detallados",
    "Almacena Datos",
    "Recuperación de Datos",
    "Optimiza la Gestión",
    "Navegación Intuitiva",
];

export const SoftwareCalibration = () => {
    const [selected, setSelected] = useState("option1");

    const handleChange = (option: string) => (_event: React.SyntheticEvent, _expanded: boolean) => {
        setSelected((previous) => (previous === option ? "" : option));
    };

    return (
        <Box className={classes.container}>
            {/* Banner */}
            <Box
                sx={{
                    paddingBottom: "20px",
                    width: "100%",
                    boxSizing: "border-box",
                    margin: 0,
                }}
            >
                <img
                    style={{
                        width: "100%",
                        opacity: 0.8,
                    }}
                    src={banner_calibration}
                    alt="banner project calibration"
                />
            </Box>
            {/* Page content */}
            <Box className={classes.page_content}>
                {/* title section */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: { lg: "3rem", xs: "2rem" },
                            fontWeight: "800",
                            paddingBottom: "20px",
                        }}
                    >
                        Software para la gestión y automatización de las pruebas de <br />{" "}
                        calibración de medidores de agua para laboratorios
                    </Typography>
                </Box>
                {/* intro section */}
                <Box
                    sx={{
                        background: "#5C5470",
                        borderRadius: "20px 20px 0px 0px",
                        padding: { lg: "50px", xs: "10px" },
                        marginBottom: "10px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { lg: "1.2rem", xs: "1rem" },
                            fontWeight: "400",
                            textAlign: "justify",
                            textJustify: "inter-word",
                        }}
                    >
                        Nuestro software transforma el proceso de calibración de medidores de agua
                        al automatizar cada paso, haciendo el proceso mas eficiente y preciso. Cada
                        paso del proceso minimiza la necesidad de intervención manual, los errores y
                        ahorra tiempo valioso. <br />
                        <br />
                        Al finalizar el proceso de calibración, el software genera toda la
                        documentación necesaria para certificar la calibración, esto incluye
                        certificados de calibración detallados que cumplen con los estándares de la
                        industria, proporcionando una prueba fiable de la precisión de cada medidor.
                        Mediante el almacenamiento de manera segura de todos los resultados de
                        calibración, se facilita la recuperación de datos históricos. Los usuarios
                        pueden generar informes completos para análisis interno, ayudando a mantener
                        la transparencia y mejorar los procesos de toma de decisiones.
                    </Typography>
                    <Box
                        sx={{
                            padding: "5px",
                            paddingTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            columnGap: "10px",
                            rowGap: "15px",
                        }}
                    >
                        {chips.map((el) => {
                            return (
                                <Chip
                                    key={el}
                                    label={el}
                                    onClick={() => {}}
                                    variant="filled"
                                    size="medium"
                                    color="secondary"
                                    sx={{ background: "#7697d1", color: "white", fontSize: "1rem" }}
                                />
                            );
                        })}
                    </Box>
                </Box>
                {/* description section */}
                <Box
                    sx={{
                        padding: { lg: "50px", xs: "10px" },
                        background: "#5C547000",
                        marginBottom: "10px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: "10px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { lg: "2rem", xs: "1.2rem" },
                                fontWeight: "600",
                            }}
                        >
                            Descripción
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row" },
                            justifyContent: "space-around",
                            columnGap: "20px",
                            rowGap: "20px",
                            marginBottom: "10px",
                        }}
                    >
                        <Box
                            sx={{
                                order: { xs: 1, lg: 0 },
                                minWidth: "50%",
                            }}
                        >
                            <Accordion
                                expanded={selected === "option1"}
                                onChange={handleChange("option1")}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontSize: "1.2rem" }}>
                                        Descripción del Proyecto
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        variant="body2"
                                        sx={{ textAlign: "justify", textJustify: "inter-word" }}
                                    >
                                        El software está diseñado para agilizar el proceso de
                                        calibración de los medidores de agua de dos maneras.
                                        Primero, centraliza la información del laboratorio en un
                                        sistema de gestión integral que permite crear órdenes de
                                        trabajo, gestionar clientes y características de los
                                        medidores, y generar reportes y estadísticas sobre el
                                        rendimiento del laboratorio. Segundo, proporciona al técnico
                                        un mecanismo paso a paso que le indica las acciones a tomar
                                        y recopila las mediciones de múltiples instrumentos
                                        instalados en un banco de calibración, garantizando
                                        resultados completos y precisos, alineados con las
                                        regulaciones nacionales.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={selected === "option2"}
                                onChange={handleChange("option2")}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontSize: "1.2rem" }}>
                                        Importancia de la Calibración
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        variant="body2"
                                        sx={{ textAlign: "justify", textJustify: "inter-word" }}
                                    >
                                        Los medidores de agua domiciliarios están diseñados para
                                        contar los litros de agua consumidos mensualmente en
                                        nuestros hogares. Con el paso de los años, o debido a una
                                        manipulación indebida, estos instrumentos pueden medir
                                        incorrectamente. Por ello, es necesario realizar un ensayo
                                        técnico conforme a los estándares normativos aplicables para
                                        certificar su correcto funcionamiento e identificar
                                        cualquier error en la medición. Este proceso se conoce como
                                        calibración. Un funcionamiento anómalo puede llevar a
                                        sobreestimar o subestimar el consumo, afectando tanto a los
                                        usuarios como a los proveedores del servicio de agua.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={selected === "option3"}
                                onChange={handleChange("option3")}
                            >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography sx={{ fontSize: "1.2rem" }}>Motivación</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        variant="body2"
                                        sx={{ textAlign: "justify", textJustify: "inter-word" }}
                                    >
                                        El objetivo es permitir a los laboratorios de calibración de
                                        medidores de agua domiciliarios:
                                    </Typography>
                                    <ul>
                                        <li>
                                            <Typography variant="body2">
                                                Registrar los medidores: Documentar todos los
                                                medidores sometidos al proceso de calibración.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2">
                                                Realizar ensayos normativos: Llevar a cabo las
                                                pruebas conforme a las normativas vigentes.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2">
                                                Generar certificados de calibración: Crear
                                                documentos detallados que recopilen los resultados
                                                de cada medidor.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2">
                                                Almacenar resultados: Guardar todos los resultados
                                                para la generación de informes internos del
                                                laboratorio.
                                            </Typography>
                                        </li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                        <Box
                            sx={{
                                order: { xs: 0, lg: 1 },
                                margin: "auto",
                                marginTop: 0,
                                minWidth: "50%",
                            }}
                        >
                            <img
                                className={classes.image}
                                src={imCalibration1}
                                alt="image front panel"
                            />
                        </Box>
                    </Box>
                </Box>
                {/* features section */}
                <Box
                    sx={{
                        background: "#5C5470",
                        borderRadius: "0px 0px",
                        padding: { lg: "50px", xs: "10px" },
                        marginBottom: "10px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: "10px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { lg: "2rem", xs: "1.2rem" },
                                fontWeight: "600",
                            }}
                        >
                            Caracteristicas
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { lg: "1fr 1fr 1fr", xs: "1fr" },
                            gridGap: "10px 10px",
                        }}
                    >
                        <FeatureCard
                            title="Administración"
                            Icon={ManageAccountsIcon}
                            content="Agiliza la gestión de órdenes de trabajo y tareas, distribuye la carga
                            laboral entre los técnicos y especifica los ensayos necesarios según el
                            cliente"
                        />
                        <FeatureCard
                            title="Almacenamiento"
                            Icon={GasMeterIcon}
                            content="Mantiene un registro de los modelos de medidores ingresados para parametrizar los ensayos que se aplican a los medidores de los clientes"
                        />
                        <FeatureCard
                            title="Reportes"
                            Icon={AssessmentIcon}
                            content="Muestra en pantalla reportes del estado actual del laboratorio incluyendo la cantidad de órdenes realizadas y pendientes, la cantidad de medidores calibrados por operario y la producción total del laboratorio"
                        />
                        <FeatureCard
                            title="Analisis"
                            Icon={QueryStatsIcon}
                            content="Capacidad para generar un documento en el cual se relacionan todos los medidores calibrados en un intervalo de tiempo junto con las características de su ensayo y las variables operativas relevantes"
                        />
                        <FeatureCard
                            title="Calibración de Medidores"
                            Icon={WaterDamageIcon}
                            content="Sistema guiado que le indica al técnico que pasos seguir y qué acciones realizar para completar todas las etapas involucradas en el proceso de calibración incluyendo el ajuste de caudal, la toma de lecturas y la recolección del agua"
                        />
                        <FeatureCard
                            title="Certificados"
                            Icon={PictureAsPdfIcon}
                            content="Generación automatica del certificado de calibración por cada medidor ensayado en formato PDF, cuyo contenido es parametrizable y parte de un formato en hoja de cálculo de excel"
                        />
                        <FeatureCard
                            title="Etiquetas"
                            Icon={LocalPrintshopIcon}
                            content="Generación de las etiquetas de calibración para cada medidor usando la impresora térmica TTP 247 o la impresora Zebra compatible con el lenguaje ZPL"
                        />
                    </Box>
                </Box>
                {/* technologies section */}
                <Box
                    sx={{
                        background: "#5C547000",
                        borderRadius: "0px 0px",
                        padding: { lg: "50px", xs: "10px" },
                        marginBottom: "10px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: "10px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { lg: "2rem", xs: "1.2rem" },
                                fontWeight: "600",
                            }}
                        >
                            Tecnologías Usadas
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gridGap: "10px 10px",
                        }}
                    >
                        <TechCard
                            title="LabVIEW"
                            content="LabVIEW es un potente lenguaje de programación gráfico que entrelaza el frontend y la lógica de negocio, proporcionando una solución integral. Su uso en aplicaciones de laboratorio es muy extendido debido a su excelente integración con hardware de instrumentación. En este proyecto, LabVIEW se emplea para desarrollar una intuitiva interfaz de usuario que guía al operario durante la calibración y para implementar la lógica de los ensayos y las consultas a la base de datos"
                            image={"project-calibration/labview.webp"}
                        />
                        <TechCard
                            title="PostgreSQL"
                            content="PostgreSQL es una base de datos relacional robusta utilizada para almacenar los resultados del proceso de calibración y la información individual de cada medidor bajo ensayo a lo largo del tiempo. Esta base de datos permite extraer información precisa y detallada para la generación de informes. Adicionalmente, se emplea SQLite para registrar los eventos durante la calibración"
                            image={"project-calibration/postgres.webp"}
                        />
                        <TechCard
                            title="HTML, CSS, Javascript"
                            content="Se desarrollo un SPA para la gestión de las ordenes de trabajo (CRUD), clientes y medidores calibrados. Este aplicativo cuenta tambien con un dashboard que permite ver la capacidad disponible del laboratorio, ordenes pendientes y las graficas de desempeño de los tecnicos metrologos. Por ultimo, se desarrollo una pagina web que le permite al tecnico recolectar las lecturas de cada medidor desde una tablet, usando sockets se comunica con el backend"
                            image={"project-calibration/dashboard.webp"}
                        />
                        <TechCard
                            title="ZPL y DLLs"
                            content="Se usaron dll en .NET integradas con LabVIEW para poder interactuar con la impresora termica TTP-247 de marca TSC y las impresoras Zebra compatibles con el lenguaje ZPL"
                            image={"project-calibration/printer.webp"}
                        />
                        <TechCard
                            title="Hardware"
                            content="Equipos de adquisición de datos de National Instruments CompactDAQ e instrumentación para la medición de temperaturas, presiones y flujos"
                            image={"project-calibration/hardware.webp"}
                        />
                    </Box>
                </Box>
                <Box>How does it work?</Box>
                <Box>Challenges</Box>
                <Box>Improvements</Box>
            </Box>
        </Box>
    );
};
