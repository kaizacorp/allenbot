import React from "react";
import {GoMarkGithub} from 'react-icons/go';
import {FaYoutube, FaDiscord} from 'react-icons/fa';

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-item">
            <h1><a href="https://github.com/kaizacorp/allenbot" title="GitHub repository"><GoMarkGithub/></a></h1>

            </div>
            <div className="footer-item">
            <h1><a href="https://www.youtube.com/@TheLibraryofAllenxandria" title="Library of Allenxandria YouTube Channel"><FaYoutube/></a></h1>

            </div>
            <div className="footer-item">
            <h1><a href="https://discord.gg/yBZ9692" title="Allenxandria Discord Server"><FaDiscord/></a></h1>

            </div>
        </div>
    );
};

export default Footer;