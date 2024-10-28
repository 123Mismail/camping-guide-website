import React from "react";
import Image from "next/image";
import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "./constants/constant";

const Footer = () => {
  return (
    <footer className="  md:max-w-[90rem] md:px-8 min-w-full mb-80 pb-10 md:mb-0">
      {/* main */}
      <div className="flex flex-col     px-5">
        {/* contents */}
        <div>
          <h2 className="text-4xl text-green-500 font-bold">
            Hi<span className="text-slate-900">links.</span>
          </h2>
        </div>
        <div className="flex flex-wrap    gap-7 pt-4   md:justify-between  w-full md:gap-[10%]">
          {FOOTER_LINKS.map((items) => (
            <FooterComponent key={items.title} title={items.title}>
              {items.links.map((link) => (
                <ul key={link} className="text-gray-500 leading-relaxed">
                  {link}
                </ul>
              ))}
            </FooterComponent>
          ))}

          <FooterComponent title={FOOTER_CONTACT_INFO.title}>
            {FOOTER_CONTACT_INFO.links.map((link) => (
              <div key={link.value} className="flex flex-wrap">
                <h3 className="font-semibold">{link.label}</h3>{" "}
                <span> :{link.value}</span>{" "}
              </div>
            ))}
          </FooterComponent>

          <FooterComponent title={SOCIALS.title}>
           <div className="flex text-gray-500 justify-center items-center gap-1 "> {SOCIALS.links.map((icons) => (
              <Image
              key={icons}
                src={icons}
                height={24}
                width={24}
                alt="social media icons"
              />
            ))}</div>
          </FooterComponent>
        </div>
        <div className="border border-gray-300 mt-3 w-full " />
        <p className="flex justify-center items-center w-full p-6 text-gray-500">
          All Rights Reserved Copyright @2024
        </p>
      </div>
    </footer>
  );
};

const FooterComponent = ({ title, children }: any) => {
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-gray-500 leading-relaxed"> {children}</div>
    </div>
  );
};
export default Footer;
