import React from 'react';
import './styles.css';
import {ReactComponent as YouTubeIcon } from './youtube.svg';
import {ReactComponent as LinkedinIcon } from './linkedin.svg';
import {ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
  return (
    <footer className="main-footer">
    App desenvolvido por Paulo Madson, Paragominas - Pa, 2021 -  todos os direitos reservados.
      <div className="footer-icons">
        <a href="https://www.youtube.com/channel/UCEvQ4VKN6d5SrWx6AiSCQOA" target="_new">
       <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/paulo-madson-6475a2182" target="_new">
        <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/paulo_madson77/?hl=pt-br" target="_new">
        <InstagramIcon />
        </a>        
      </div>
    </footer>
  )
}
export default Footer;