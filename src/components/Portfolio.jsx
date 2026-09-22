import './Portfolio.css';
import { FaLinkedin, FaHeart, FaGithub } from "react-icons/fa";
import packageJson from "../../package.json";
import { Tooltip } from 'antd';
import { skills } from './common';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const Portfolio = () => {
    return (
        <>
            <div className="intro-section">
                <div className="sec-1">
                    <div className="hello-text">
                        <h1>Hi&nbsp;</h1>
                        <img src={asset("images/waving-hand.png")} alt="waving-hand" />
                        <h1>
                            <span className="dot">,</span>
                        </h1>
                    </div>

                    <h1>I am Rizwanullah</h1>
                    <h1>
                        <span className="web">Full Stack</span>
                    </h1>
                    {/* <h1><span className="web">Web</span> Developer<span className="dot">.</span></h1> */}
                    <h1>Developer</h1>
                </div>

                <div className="sec-2">
                    <img
                        src={asset("images/profiles/rizwan-profile-1.png")}
                        alt="Rizwanullah Mohammad"
                    />
                </div>
            </div>

            {/* <hr className="style-hr" /> */}

            <div className="portfolio-heading">
                <h1>
                    Current <span className="stylish-underline">Projects</span>
                </h1>
            </div>

            <div className="grid-wrapper">
                <a
                    className="item flex"
                    href="https://tpsmartsol.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    TP SmartSol
                </a>
            </div>

            {/* <hr className="style-hr" /> */}

            <div className="portfolio-heading">
                <h1>
                    Past <span className="stylish-underline">Projects</span>
                </h1>
            </div>

            <div className="grid-wrapper">
                <a
                    className="item flex"
                    href="https://imedslife-patient.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    ImedsLife Patient
                </a>

                <a
                    className="item flex"
                    href="https://imedslife-doctor.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    ImedsLife Doctor
                </a>

                <a
                    className="item flex"
                    href="https://www.plraoco.in/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Plrao & Co CA Firm
                </a>

                <a
                    className="item flex"
                    href="https://www.simulatedvirtualsolutions.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Simulated Virtual Solutions
                </a>
            </div>

            {/* <hr className="style-hr" /> */}

            <div className="portfolio-heading">
                <h1>
                    My <span className="stylish-underline">Skills</span>
                </h1>
            </div>

            <div className="grid-wrapper-icons">
                {skills?.map((skill) => {
                    return (
                        <Tooltip
                            placement="top"
                            title={skill.name}
                            key={skill.name}
                            color={"#7f00ff"}
                        >
                            <div className="img-sec">
                                <img src={skill.imagePath} alt={skill.name} />
                            </div>
                        </Tooltip>
                    );
                })}
            </div>

            <div className="portfolio-heading">
                <h1>
                    My <span className="stylish-underline">Badges</span>
                </h1>
            </div>

            <div className="badges-grid">
                <div className="badge">
                    <a
                        href="https://rizwanrockzz.github.io/myself/Global%20Certifications/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf">
                        <img
                            src={`${import.meta.env.BASE_URL}images/badges/aws-certified-cloud-practitioner.png`}
                            alt="aws-certified-cloud-practitioner"
                        />
                    </a>
                </div>

                <div className="badge">
                    <a
                        href="https://www.credential.net/441dc43b-2e38-4db3-820a-136ddbb91869#gs.3gn18n">
                        <img
                            src={`${import.meta.env.BASE_URL}images/badges/google-cloud-digital-leader.png`}
                            alt="google-cloud-digital-leader"
                        />
                    </a>
                </div>
            </div>

            <footer>
                <p className="footer">
                    <span>Made with</span>
                    <FaHeart color="red" />
                    <span>by</span>

                    <span className="rizwan">
                        <a
                            href="https://www.linkedin.com/in/rizwanullah-mohammad/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            RIZWAN
                        </a>
                    </span>
                </p>
            </footer>

            <div className="site-version">
                <span>{packageJson.version}</span>
            </div>

            <img
                className="gradient-img-1"
                src={asset("images/gradient-1.png")}
                alt="gradient"
            />

            <img
                className="gradient-img-2"
                src={asset("images/gradient-2.png")}
                alt="gradient"
            />

            <img
                className="gradient-img-3"
                src={asset("images/gradient-3.png")}
                alt="gradient"
            />

            <div className="social-links">
                <a
                    href="https://github.com/rizwanrockzz"
                    className="github-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/rizwanullah-mohammad/"
                    className="linkedin-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>
        </>
    );
};

export default Portfolio;