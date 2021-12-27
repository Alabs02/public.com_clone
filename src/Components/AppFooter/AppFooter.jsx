import "./AppFooter.css";
import { Fragment } from "react";
import {
  companyList,
  resourceList,
  dropsList,
} from "../../Utils";

import { BsTwitter, BsMedium } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FooterText } from "..";

const AppFooter = () => {
  return (
    <Fragment>
      <div className="py-20 px-22 w-100">
        <div className="w-100 grid gap-x-10 grid-cols-1 md:grid-cols-12">
          <section className="col-span-3 text-center md:text-left mb-5 md:mb-0">
            <h4 className="text-sm font-bold">Company</h4>
            <ul className="mt-5">
              {companyList.map((item, index) => (
                <li key={index} className="text-sm mb-2 tracking-wide transition-all hover:underline"><a href={item.to}>{item.title}</a></li>
              ))}
            </ul>
          </section>
          <section className="col-span-3 text-center md:text-left mb-5 md:mb-0">
            <h4 className="text-sm font-bold">Resources</h4>
            <ul className="mt-5">
              {resourceList.map((item, index) => (
                <li key={index} className="text-sm mb-2 tracking-wide transition-all hover:underline"><a href={item.to}>{item.title}</a></li>
              ))}
            </ul>
          </section>
          <section className="col-span-3 text-center md:text-left mb-5 md:mb-0">
            <h4 className="text-sm font-bold"><a href="/">Drops</a></h4>
            <ul className="mt-5">
              {dropsList.map((item, index) => (
                <li key={index} className="text-sm mb->2 tracking-wide transition-all hover:underline"><a href={item.to}>{item.title}</a></li>
              ))}
            </ul>
          </section>
          <section className="col-span-3">
            <div className="social-media flex items-center justify-between mb-4 px-8 md:px-0 mt-10 md:mt-0">
              <a href="/" className="social-media__link" rel="noopener noreferrer">
                <BsTwitter size={'1.5em'} />
              </a>
              <a href="/" className="social-media__link" rel="noopener noreferrer">
                <SiInstagram size={'1.5em'} />
              </a>
              <a href="/" className="social-media__link" rel="noopener noreferrer">
                <RiFacebookFill size={'1.5em'} />
              </a>
              <a href="/" className="social-media__link" rel="noopener noreferrer">
                <FaLinkedinIn size={'1.5em'} />
              </a>
              <a href="/" className="social-media__link" rel="noopener noreferrer">
                <BsMedium size={'1.5em'} />
              </a>
            </div>
            <div className="flex flex-row md:flex-col w-100">
              <div className="card cursor-pointer bg-white grid place-items-center h-16 md:h-auto w-4/5 shadow-lg rounded-md overflow-hidden transition-all border border-white hover:border-slate mb-2 mr-2 md:mr-0">
                <img className="w-100 h-100 object-cover" src="https://hellopublic.wpengine.com/wp-content/uploads/2020/05/app-store-apple.svg" alt="apple" />
              </div>

              <div className="card cursor-pointer bg-white grid place-items-center h-16 md:h-auto w-4/5 shadow-lg rounded-md overflow-hidden transition-all border border-white hover:border-slate">
                <img className="w-100 h-100 object-cover" src="https://hellopublic.wpengine.com/wp-content/uploads/2020/05/app-store-google.svg" alt="apple" />
              </div>
            </div>
            
            <div className="mt-10">
              <p className="font-light">
                Check the background of this firm on
                <a className="text-primary ml-2 transition-all cursor-pointer hover:underline">FINRA’s BrokerCheck</a>
              </p>
            </div>
          </section>
        </div>
        <FooterText />
      </div>
    </Fragment>
  );
}

export default AppFooter;
