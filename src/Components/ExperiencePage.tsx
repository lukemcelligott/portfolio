/* Display technical experience */

import React, { useEffect } from 'react';
import logo from './logo.svg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import './../App.css';
import './styles/ExperiencePage.css';
import NavBar from './NavBar';

function ExperiencePage() {
    useEffect(() => {
        document.title = 'Experience | Luke McElligott';
    }, []);

    return (
        <div>
            <NavBar />
            <div>
            <Timeline position="alternate">
                {/* Calgon Carbon Company */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className='dot-white' variant="outlined"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card raised sx={{ minWidth: 275 }} className="card">
                                <CardContent className="font">
                                    <h3 className='skills'>
                                        IT Security & Compliance Intern
                                    </h3>
                                    <h5 className="job-info">
                                        <span>Calgon Carbon Corporation</span>
                                        <span>Jun 2021 - Aug 2021</span>
                                    </h5>
                                    <p>
                                        Learned and implemented a <span className='skills'>SIEM (EventLog Analyzer)</span> system within the company. Actively took part in planning, rolling out, and reviewing 
                                        <span className="skills"> phishing campaigns</span> throughout the company.
                                    </p>                                    
                                </CardContent>
                            </Card>
                    </TimelineContent>
                </TimelineItem>
                {/* Slippery Rock University */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className="dot-green" variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card raised sx={{ minWidth: 275 }} className="card">
                            <CardContent className="font">
                                <h3 className='skills'>
                                    Student Web Developer
                                </h3>
                                <h5 className="job-info">
                                    <span>Slippery Rock University</span>
                                    <span>Feb 2022 - May 2024</span>
                                </h5>
                                <p>
                                    Worked on Slippery Rock University's website. Learned <span className="skills">web development</span> through our <span className="skills">CMS (Ingeniux)</span>.
                                    Also developed an understanding of <span className="skills">SEO</span> and <span className="skills">ADA compliance</span> for web.
                                </p>                                    
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                {/* Ford Cyber */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className='dot-white' variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card raised sx={{ minWidth: 275 }} className="card">
                            <CardContent className="font">
                                <h3 className='skills'>
                                    Cybersecurity Red Team Intern
                                </h3>
                                <h5 className="job-info">
                                    <span>Ford Motor Company</span>
                                    <span>May 2022 - Aug 2022</span>
                                </h5>
                                <p>
                                    Researched and implemented <span className="skills">honeypot systems</span> throughout the company's network. Utilized numerous <span className="skills">Canary security </span>
                                    mechanisms that would be used by the red team in the future. Collaborated with experienced engineers to perform <span className="skills">penetration tests</span>. Competed in and won a 
                                    <span className="skills"> CTF</span> competition among all other cybersecurity interns at the company.
                                </p>                                    
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                {/* Ford Software */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className='dot-green' variant="outlined" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card raised sx={{ minWidth: 275 }} className="card">
                            <CardContent className="font">
                                <h3 className='skills'>
                                    Software Engineer Intern
                                </h3>
                                <h5 className="job-info">
                                    <span>Ford Motor Company</span>
                                    <span>May 2023 - Aug 2023</span>
                                </h5>
                                <p>
                                    Developed a <span className="skills">PWA</span> capable of handling the required 4,000+ user base. Using <span className="skills">React</span> and <span className="skills">TypeScript</span>,
                                    I had developed a responsive frontend, optimized for mobile devices. The <span className="skills">Java</span>, <span className="skills">Spring Boot</span>,
                                    and <span className="skills">MSSQL</span> backend used AD to make secure database calls. <span className="skills">Cucumber.js</span> was used to achieve
                                    test driven development. <span className='skills'>Tekton</span> was used in order to rollout this project following <span className='skills'>CI/CD</span> principles.
                                </p>                                    
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                {/* UPMC */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot className='dot-white' variant="outlined" />
                        </TimelineSeparator>
                    <TimelineContent>
                        <Card raised sx={{ minWidth: 275 }} className="card">
                            <CardContent className="font">
                                <h3 className='skills'>
                                    Systems Programmer/Analyst II
                                </h3>
                                <h5 className="job-info">
                                    <span>UPMC</span>
                                    <span>July 2024 - Present</span>
                                </h5>                                   
                            </CardContent>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            </div>
        </div>
    )
}

export default ExperiencePage;