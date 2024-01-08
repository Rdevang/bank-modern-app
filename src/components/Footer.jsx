import React from "react";
import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flow-col flex-row mb-8 w-full`}>
        <div className="flex flex-col justify-start flex-1  mr-10">
          <img
            src={logo}
            alt=""
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-row justify-between flex-wrap flex-[1.5] w-full md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white ">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ">
          © 2022 HooBank. All Rights Reserved. Built by Devang Rathod.
        </p>
        <div className="flex flow-row md:mt-0 mt-6">
          { 
            socialMedia.map((social, index) => (
              <img className={`w-[21px] h-[21px] cursor-pointer object-contain hover:scale-150  ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`} src={social.icon} key={social.id} alt="" />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Footer;
