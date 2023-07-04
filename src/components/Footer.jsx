import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub} from "@react-icons/all-files/fa/FaGithub";

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='listitems'>
        <li><FaFacebook  /></li>
        <li><FaInstagram/></li>
        <li><FaTwitter/></li>
        <li><FaGithub/></li>
      </ul>
    </div>
  )
}

export default Footer