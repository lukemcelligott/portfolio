/* Show information about projects */

import React, { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';

import './../App.css';
import './styles/ProjectsPage.css';
import NavBar from './NavBar';

function ProjectsPage() {
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

    return (
        <div>
            <NavBar />
            <div>
                <Grid container spacing={2} className='grid'>
                    {/* Portfolio Project */}
                    <Grid item xs={12} sm={12} md={4}>
                        <Card raised sx={{ minWidth: 275 }} className="card">
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
                        <Card raised sx={{ minWidth: 275 }} className="card">
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
                        <Card raised sx={{ minWidth: 275 }} className="card">
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
                        <Card raised sx={{ minWidth: 275 }} className="card">
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
                        <Card raised sx={{ minWidth: 275 }} className="card">
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
        </div>
    )
}

export default ProjectsPage;