/* Show information about projects */

import React, { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';

import './../App.css';
import './styles/ProjectsPage.css';
import NavBar from './NavBar';

// Scrumbs assets
import ScrumbsLogo from '../Assets/Scrumbs/Images/scrumbs-favicon.png';
import ScrumbsDash from '../Assets/Scrumbs/Images/scrumbs-dash.png';
import ScrumbsBoard from '../Assets/Scrumbs/Images/scrumbs-board.png';
// import ScrumbsDFD from '../Assets/Scrumbs/Images/scrumbs-dfd.png';
// import ScrumbsUseCase from '../Assets/Scrumbs/Images/scrumbs-usecase.png';

// Offerly assets
import OfferlyBrowse from '../Assets/Offerly/Images/offerly-browse.png';
import OfferlyListing from '../Assets/Offerly/Images/offerly-listing.png';
// import OfferlyLogin from '../Assets/Offerly/Images/offerly-login.png';
import OfferlyLogo from '../Assets/Offerly/Images/offerly-logo.png';
// import OfferlyMessaging from '../Assets/Offerly/Images/offerly-messaging.png';
// import OfferlyTechManual from '../Assets/Offerly/Docs/Offerly-Tech-Manual.pdf';
// import OfferlyUserManual from '../Assets/Offerly/Docs/Offerly-User-Manual.pdf';
// import OfferlyPresentation from '../Assets/Offerly/Docs/Offerly-Final-Presentation.pptx';

// Cyberforce assets
import CyberForceLogo from '../Assets/CyberForce/cyberforce-logo.png';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ProjectsPage() {
    // modal variables
    const [portfolioOpen, setPortfolioOpen] = useState(false);
    const [scrumbsOpen, setScrumbsOpen] = useState(false);
    const [offerlyOpen, setOfferlyOpen] = useState(false);
    const [fretFlowOpen, setFretFlowOpen] = useState(false);
    const [cyberforceOpen, setCyberforceOpen] = useState(false);

    // project links
    const portfolio = "https://github.com/lukemcelligott/portfolio";
    const scrumbs = "https://github.com/lukemcelligott/Scrumbs";
    const offerly = "https://github.com/lukemcelligott/Offerly";
    const fretflow = "https://github.com/lukemcelligott/FretFlow";
    const cyberforce = "https://cyberforce.energy.gov/cyberforce-competition/prior-competitions/doe-cyberforce-competition-2022/";
    const manabu = "https://github.com/lukemcelligott/Manabu";
    const sniffer = "https://github.com/lukemcelligott/packet_sniffer/tree/main";

    useEffect(() => {
        document.title = 'Projects | Luke McElligott';
    }, []);

    // Function to open the modal
    const handleOpen = (project: string) => {
        switch(project){
            case 'portfolio':
                setPortfolioOpen(true);
                break;
            case 'scrumbs':
                setScrumbsOpen(true);
                break;
            case 'offerly':
                setOfferlyOpen(true);
                break;
            case 'fretFlow':
                setFretFlowOpen(true);
                break;
            case 'cyberforce':
                setCyberforceOpen(true);
                break;
            default:
                break;
        }
    };

    // Function to close the modal
    const handleClose = (project: string) => {
        switch (project) {
            case 'portfolio':
                setPortfolioOpen(false);
                break;
            case 'scrumbs':
                setScrumbsOpen(false);
                break;
            case 'offerly':
                setOfferlyOpen(false);
                break;
            case 'fretFlow':
                setFretFlowOpen(false);
                break;
            case 'cyberforce':
                setCyberforceOpen(false);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <NavBar />
            <div>
                <Grid container spacing={2} className='grid'>
                    {/* Portfolio Project */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Card raised sx={{ minWidth: 275 }} className="card" onClick={() => handleOpen('portfolio')}>
                            <CardContent>
                                <h3 className='font'>
                                    Portfolio
                                </h3>
                                <p className='font p-height'>
                                    This portfolio site is built using <span className="skills">React</span> and <span className="skills">TypeScript</span>. I wanted to focus on improving my web design
                                    skills by using <span className="skills">CSS</span> and <span className="skills">MUI</span>. This project was a quick way of teaching myself about fundamental web principles as well as hosting.
                                </p>
                                <div>
                                    <Link to={portfolio} target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='github icons'></GitHubIcon>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Scrumbs Project */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Card raised sx={{ minWidth: 275 }} className="card" onClick={() => handleOpen('scrumbs')}>
                            <CardContent>
                                <h3 className='font'>
                                    Scrumbs
                                </h3>
                                <p className='font p-height'>
                                    Scumbs is a <span className="skills">scrum</span> management web application. I learned full-stack development in order to build this application using
                                    <span className="skills"> Angular</span>. Before development began, my partner and I worked to develop a variety of models and diagrams including 
                                    <span className="skills"> BLP models</span>, <span className="skills">DFD diagrams</span>, <span className="skills">use case diagrams</span>, and more.
                                    Some of the other technology I learned from this project include <span className="skills">MongoDB</span>, <span className="skills">TypeScript</span>,
                                    <span className="skills"> NodeJS</span>, and <span className="skills">Express</span>.
                                </p>
                                <Link to={scrumbs} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className='github icons'></GitHubIcon>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Offerly Project */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Card raised sx={{ minWidth: 275 }} className="card" onClick={() => handleOpen('offerly')}>
                            <CardContent>
                                <h3 className='font'>
                                    Offerly
                                </h3>
                                <p className='font p-height'>
                                    For my Software Engineering class, I had worked to develop Offerly, an online marketplace. This project took inspiration from eBay and Amazon, acting as a
                                    hub for people to sell, buy, and bid on used items. Offerly was build using <span className="skills">Java</span>, <span className="skills">Maven</span>, 
                                    <span className="skills"> MySQL</span>, <span className="skills">Spring Boot</span>, <span className="skills">HTML</span> and <span className="skills">CSS</span>.
                                    I had learned a lot about <span className="skills">MVC</span> and <span className="skills">data structures</span> because of this project.
                                </p>
                                <Link to={offerly} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className='github icons'></GitHubIcon>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Fret Flow Project */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Card raised sx={{ minWidth: 275 }} className="card" onClick={() => handleOpen('fretFlow')}>
                            <CardContent>
                                <h3 className='font'>
                                    Fret Flow
                                </h3>
                                <p className='font p-height'>
                                    As a hobbyist guitar player, I wanted to develop a website that contained a lot of the different tools I found myself using while playing. This includes a 
                                    chord identifier, chord progression generator, scale practice tool, and more. This project was developed using <span className="skills">React</span> and 
                                    <span className="skills"> Typescript</span>. I also implemented <span className="skills">PostgreSQL</span> for database management and <span className="skills">Django </span>
                                    for my custom <span className="skills">RESTful API</span>.
                                </p>
                                <Link to={fretflow} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className='github icons'></GitHubIcon>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* CyberForce Competition */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Card raised sx={{ minWidth: 275 }} className="card" onClick={() => handleOpen('cyberforce')}>
                            <CardContent>
                                <h3 className='font'>
                                    CyberForce Competition
                                </h3>
                                <p className='font p-height'>
                                    The CyberForce Competition is a cybersecurity-centered competition that is hosted by the DoE. This competition simulates <span className='skills'>real attacking/defending cybersecurity events</span> and it is the job of the teams involved to accomplish certain goals. Through this challenge, my team members and I were able to sharpen our skills in <span className='skills'>incident response</span>, <span className='skills'>network defense</span>, and <span className='skills'>digital forensics</span>.
                                </p>
                                <Link to={cyberforce} target="_blank" rel="noopener noreferrer">
                                    <LinkIcon className='github icons'></LinkIcon>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Manabu */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Card raised sx={{ minWidth: 275 }} className="card">
                            <CardContent>
                                <h3 className='font'>
                                    Manabu
                                </h3>
                                <p className='font p-height'>
                                    I have started to learn Japanese in my spare time and I wanted to work on a project that would allow me to practice my understanding of Japanese characters. This is when I came up with the idea for Manabu (Japanese for "learn"). I built this learning platform using <span className='skills'>React</span> and <span className='skills'>TypeScript</span>. This platform allows users to brush up on their Hiragana, Katakana and Kanji by reviewing the pronunciation, taking a quiz, or playing a matching game.
                                </p>
                                <div style={{ display: 'flex' }}>
                                    {/* <Link to={manabu} target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className='github icons' style={{marginRight: '50%'}}></LinkIcon>
                                    </Link> */}
                                    <Link to={manabu} target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='github icons' style={{marginLeft: '50%'}}></GitHubIcon>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Packet Sniffer */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Card raised sx={{ minWidth: 275 }} className="card">
                            <CardContent>
                                <h3 className='font'>
                                    Packet Sniffer
                                </h3>
                                <p className='font p-height'>
                                    Developed a <span className='skills'>network packet sniffer</span> in <span className='skills'>Python</span> which is meant to be used in Linux environments. This project utilizes <span className='skills'>sockets</span> in order to analyze network traffic.
                                </p>
                                <Link to={sniffer} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className='github icons'></GitHubIcon>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            {/* Portfolio Modal */}
            <Modal
                open={portfolioOpen}
                onClose={() => handleClose('portfolio')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Card sx={{ minWidth: 275 }} className="modal-card">
                    <CardContent className='modal-content'>
                        <h3 className='font'>
                            Portoflio
                        </h3>
                        <p className='font'>
                            <span className='skills'>Tech Stack:</span>
                        </p>
                        <p className='font'>React | TypeScript | Material UI</p>
                        <p className='font'>
                            <span className='skills'>Deployment:</span>
                        </p>
                        <p className='font'>GitHub Actions | Vercel</p>
                        <hr></hr>
                        <p className='font'>
                            Thank you for visiting my personal portfolio! I developed this site so that I could display some of the different projects I've worked on over time. This was the first project I've deployed on my own.
                        </p>
                        <Link to={portfolio} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className='github icons'></GitHubIcon>
                        </Link>
                    </CardContent>
                </Card>
            </Modal>
            {/* Scrumbs Modal */}
            <Modal
                open={scrumbsOpen}
                onClose={() => handleClose('scrumbs')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Card sx={{ style }} className="modal-card">
                    <CardContent  className='modal-content'>
                        <div className="header-container">
                            <h3 className='font'>
                                Scrumbs
                            </h3>
                            <img src={ScrumbsLogo} alt="Scrumbs Logo" className="logo-image" />
                        </div>
                        <p className='font'>
                            <span className='skills'>Tech Stack:</span>
                        </p>
                        <p className='font'>Angular | TypeScript | MongoDB | NodeJS | Express</p>
                        <p className='font'>
                            <span className='skills'>Security Features:</span>
                        </p>
                        <p className='font'>JWT Auth | HTTP Interceptor | User Event Logging | Password Hashing | Authentication Guard</p>
                        <hr></hr>
                        <p className='font'>
                            Scrumbs is an interactive web app for project management. It simulates a virtual Scrum board that teams (and stakeholders) can use to create, read, update, and delete tasks, as well as monitor the progression of the project. Scrumbs also features an admin panel for managing users and teams.
                        </p>
                        <img src={ScrumbsDash} alt="Scrumbs Dashboard" className="project-image" />
                        <p className='font'>
                            Scrumbs was a project for my Software Assurance class. My teamate and I focused on implementing BLP models, DFD models, and numerous other elements common to the SDLC to create a secure and practical product. Through this project, we were able to learn about developing a secure project.
                        </p>
                        <img src={ScrumbsBoard} alt="Scrumbs Home" className="project-image" />
                        <Link to={scrumbs} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className='github icons'></GitHubIcon>
                        </Link>
                    </CardContent>
                </Card>
            </Modal>
            {/* Offerly Modal */}
            <Modal
                open={offerlyOpen}
                onClose={() => handleClose('offerly')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Card sx={{ style }} className="modal-card">
                    <CardContent className='modal-content'>
                        <div className="header-container">
                            <h3 className='font'>
                                Offerly
                            </h3>
                            <img src={OfferlyLogo} alt="Offerly Logo" className="logo-image" />
                        </div>
                        <p className='font'>
                            <span className='skills'>Tech Stack:</span>
                        </p>
                        <p className='font'>Java | JavaScript | Spring Boot | Thymeleaf | Maven | JUnit | MySQL</p>
                        <p className='font'>
                            <span className='skills'>Deployment:</span>
                        </p>
                        <p className='font'>Tomcat</p>
                        <hr></hr>
                        <p className='font'>
                            Offerly was inherited from a previous team of software engineering students. Our team was tasked with adding new features and updating the UI, as well as cleaning up the code. Some of the features we added were a social messaging system, a payment page, an auction system with automatic bidding, and a user rating system.
                        </p>
                        <img src={OfferlyBrowse} alt="Offerly Browse Page" className="project-image" />
                        <p className='font'>
                            Very quickly, we realized that the code was a mess. We spent a lot of time refactoring, organizing the database, and implementing new data structuers on the backend. One of our early successes was creating a dynamic category tree that would allow us to manage the hierarchy of the categories. We also revamped the admin panel to allow for easier management of users and items. From there, many weeks were spent adding new features and updating the UI.
                        </p>
                        <img src={OfferlyListing} alt="Offerly Listing Page" className="project-image" />
                        <p className='font'>
                            <span className='skills'>Documentation:</span>
                        </p>
                        <p className="font">
                            <a className='font' href="../../../public/Assets/Offerly/Docs/Offerly-Tech-Manual.pdf" target="_blank">Tech Manual (pdf)</a> | <a className='font' href="../../../public/Assets/Offerly/Docs/Offerly-User-Manual.pdf" target="_blank">User Manual (pdf)</a> | <a className='font' href="../../../public/Assets/Offerly/Docs/Offerly-Final-Presentation.pptx" target="_blank">Presentation (pptx)</a>
                        </p>
                        <Link to={offerly} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className='github icons'></GitHubIcon>
                        </Link>
                    </CardContent>
                </Card>
            </Modal>
            {/* FretFlow Modal */}
            <Modal
                open={fretFlowOpen}
                onClose={() => handleClose('fretFlow')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Card sx={{ style }} className="modal-card">
                    <CardContent>
                        <h3 className='font'>
                            Fret Flow
                        </h3>
                        <p className='font'>
                            <span className='skills'>Tech Stack:</span>
                        </p>
                        <p className='font'>React | TypeScript | PostGreSQL | MUI | Python | Django</p>
                        <hr></hr>
                        <p className='font'>
                            I wanted to develop a project that combined two of my favorite hobbies, coding and playing guitar. I often found myself referencing external guitar websites when I wanted to know what a certain chord was or when I needed help working on a chord progression. I wanted to combine a lot of these seperate resources into one site and thus I came up with the idea for Fret Flow. Fret Flow is still in development.
                        </p>
                        <Link to={fretflow} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className='github icons'></GitHubIcon>
                        </Link>
                    </CardContent>
                </Card>
            </Modal>
            {/* Cyberforce Modal */}
            <Modal
                open={cyberforceOpen}
                onClose={() => handleClose('cyberforce')}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Card sx={{ style }} className="modal-card">
                    <CardContent>
                        <div className="header-container">
                            <h3 className='font'>
                                CyberForce Competition
                            </h3>
                            <img src={CyberForceLogo} alt="CyberForce Logo" className="logo-image" />
                        </div>
                        <p className='font'>
                            <span className='skills'>Skills Built:</span>
                        </p>
                        <p className='font'>Penetration Testing | Network Monitoring | Virtual Machines | Event Logging</p>
                        <hr></hr>
                        <p className='font p-height'>
                            I had the privilege of working alongside classmates during the 2022 Department of Energy's CyberForce Competition. Here my team was challenged to defend a simulated energy solutions company from a "real-world" attack. The challenged required us to conduct an investigation into the company's system in order to quickly diagnose and work to resolve the problem. While our team did not win the competition, it proved to be a very fun and challenging event that sparked my interest in CTF challenges.
                        </p>
                        <Link to={cyberforce} target="_blank" rel="noopener noreferrer">
                            <LinkIcon className='github icons'></LinkIcon>
                        </Link>
                    </CardContent>
                </Card>
            </Modal>
        </div>
    )
}

export default ProjectsPage;