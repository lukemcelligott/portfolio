/* Show information about projects */

import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

import './../App.css';
import './styles/ProjectsPage.css';
import NavBar from './NavBar';

function ProjectsPage() {
    const portfolio = "https://github.com/lukemcelligott/portfolio";
    const scrumbs = "https://github.com/lukemcelligott/Scrumbs";
    const github = "https://github.com/lukemcelligott";

    return (
        <div>
            <NavBar />
            <div>
                <Grid container spacing={2} className='grid'>
                    {/* Portfolio Project */}
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }} className="card">
                            <CardContent>
                                <h3 className='font'>
                                    Portfolio
                                </h3>
                                <p className='font p-height'>
                                    This portfolio site is built using <span className="skills">React</span> and <span className="skills">TypeScript</span>. I also focused on improving my web design
                                    skills by using <span className="skills">CSS</span> and <span className="skills">MUI</span>. This project was a quick way of teaching myself about fundamental web principles.
                                </p>
                                <div>
                                    <Link to={portfolio} target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon className='github'></GitHubIcon>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Scrumbs Project */}
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }} className="card">
                            <CardContent>
                                <h3 className='font'>
                                    Scrumbs
                                </h3>
                                <p className='font p-height'>
                                    Scumbs is a <span className="skills">Scrum</span> management web application. I learned full-stack development in order to build this application using
                                    <span className="skills"> Angular</span>. Before development began, my partner and I worked to develop a variety of models and diagrams including 
                                    <span className="skills"> BLP models</span>, <span className="skills">DFD diagrams</span>, <span className="skills">use case diagrams</span>, and more.
                                    Some of the other technology I learned from this project include <span className="skills">MongoDB</span>, <span className="skills">TypeScript</span>,
                                    <span className="skills"> NodeJS</span>, and <span className="skills">Express</span>.
                                </p>
                                <Link to={scrumbs} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className='github'></GitHubIcon>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Scrumbs Project */}
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }} className="card">
                            <CardContent>
                                <h3 className='font'>
                                    Offerly
                                </h3>
                                <p className='font p-height'>
                                    For my Software Engineering class, I had worked to develop Offerly, an online marketplace. This project took inspiration from eBay and Amazon, acting as a
                                    hub for people to sell, buy, and bid on used items. Offerly was build using <span className="skills">Java</span>, <span className="skills">Maven</span>, 
                                    <span className="skills"> MySQL</span>, <span className="skills">Spring Boot</span>, <span className="skills">HTML</span> and <span className="skills">CSS</span>.
                                    I had learned a lot about <span className="skills">MVC</span> and <span className="skills">data structures</span> projects because of this project.
                                </p>
                                <Link to={github} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className='github'></GitHubIcon>
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