import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './footer.css';

function Footer() {
    return (
        <div className='footer-container'>
           
            <div className='footer-contributors'>
                <div className="footerNameBlock">
                    <p className="footerNameTag">Danish Prasla</p>
                    <a href="https://www.linkedin.com/in/danish-prasla-819a7199/" target="_blank">
                        <img className="linkedinLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661377400832/linkedinLogo.png" />
                    </a>
                    <a href="https://github.com/danishprasla" target="_blank">
                        <img className="githubLogo" src="https://cdn.discordapp.com/attachments/1116044689452322926/1116106706192187422/github-icon-256x249-eb1fu3cu.png" />
                    </a>
                </div>

                <div className="footerNameBlock">
                    <p className="footerNameTag">Kevin Huang</p>
                    <a href="https://www.linkedin.com/in/kevin-huang-a53139186/" target="_blank">
                        <img className="linkedinLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661377400832/linkedinLogo.png" />
                    </a>
                    <a href="https://github.com/kevinhuang1208" target="_blank">
                        <img className="githubLogo" src="https://cdn.discordapp.com/attachments/1116044689452322926/1116106706192187422/github-icon-256x249-eb1fu3cu.png" />
                    </a>
                </div>
                <div className="footerNameBlock">
                    <p className="footerNameTag">Taylor Lim</p>
                    <a href="https://www.linkedin.com/in/tayjlim0592/" target="_blank">
                        <img className="linkedinLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661377400832/linkedinLogo.png" />
                    </a>
                    <a href="https://github.com/tayjlim" target="_blank">
                        <img className="githubLogo" src="https://cdn.discordapp.com/attachments/1116044689452322926/1116106706192187422/github-icon-256x249-eb1fu3cu.png" />
                    </a>
                </div>

                <div className="footerNameBlock">
                    <p className="footerNameTag">Steven Cornwall</p>
                    <a href="https://www.linkedin.com/in/steven-cornwall-b4551b20b/" target="_blank">
                        <img className="linkedinLogo" src="https://cdn.discordapp.com/attachments/1113213089702228038/1115021661377400832/linkedinLogo.png" />
                    </a>
                    <a href="https://github.com/taylorcornwall766" target="_blank">
                        <img className="githubLogo" src="https://cdn.discordapp.com/attachments/1116044689452322926/1116106706192187422/github-icon-256x249-eb1fu3cu.png" />
                    </a>
                </div>


            </div>
            <div className='tech-icons-container'>
                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121552752133292133/JavaScript-logo.png" />

                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121556499269943367/1869px-Python-logo-notext.png" />

                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121551916028153888/2300px-React-icon.png" />

                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121552416844824636/redux.png" />

                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121553145743540284/ICAxwo4DA57SIvgIVTDpUP8EbeCT1qFmXQMAAAAASUVORK5CYII.png" />

                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121551721282408529/postgresql-icon.png" />

                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121556896625729686/free-html5-40-1175193.png" />
                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121557371194458202/css-512.png" />
                <img className='tech-icons' src="https://cdn.discordapp.com/attachments/1118303754714886259/1121557732902834216/aws-icon-2048x2048-274bm1xi.png" />
            </div>
        </div>
    )
}

export default Footer;