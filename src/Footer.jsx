
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100 text-gray-700">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
        <div className="">
       <p className="appname hover:text-gray-700 text-3xl text-indigo-700 text-4xl">   TINY LINK</p>
        </div>
      <div className="mx-10">
    <p className="hover:text-indigo-700 text-xl">    FOLLOW US  </p>
      </div>

<div className="flex items-center gap-4">
  <FontAwesomeIcon className="text-2xl hover:text-indigo-700" icon={faFacebook} />
  <FontAwesomeIcon className="text-2xl hover:text-indigo-700" icon={faTwitter} />
  <FontAwesomeIcon className="text-2xl hover:text-indigo-700" icon={faLinkedin} />
  <FontAwesomeIcon className="text-2xl hover:text-indigo-700" icon={faInstagram} />
</div>

     
</div>
    
      <div className="bg-gray-500 text-white text-center py-4 text-sm">
        <p>
          Copyright © 2025 All rights reserved | This website is made with ♥ by TINYLINK
        </p>
      </div>
    </div>
  );
}

export default Footer;
