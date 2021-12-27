import { Fragment } from "react";
import { TextApp } from "..";
import "./Hero.css";

const Hero = () => {
  return (
    <Fragment>
      <div className="hero w-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 border-b border-slate">
        <div className="hero__content--first col-span-5 px-3 md:px-8 border-1 border-primary">
          <h2 className="hero__heading">Invest in stocks,<br /> funds and crypto</h2>
          <p className="hero__copy text-gray">Follow other investors, invest with any amount of money, build your portfolio.</p>
          <div className="my-10 hidden md:block">
            <TextApp />
          </div>
          <button className="btn__text outline-none flex items-center text-primary font-medium">
            <span>Tell me everything</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
          </button>
          <div className="mt-8">
            <p className="text-gray hero__copy--xs tracking-wide uppercase">As seen in</p>
            <ul className="company flex items-center mt-3">
              <li className="company__media mr-5">
                <img src="https://hellopublic.wpengine.com/wp-content/uploads/2020/05/logo-fortune.svg" alt="company" />
              </li>
              <li className="company__media mr-5">
                <img src="https://hellopublic.wpengine.com/wp-content/uploads/2020/05/logo-variety.svg" alt="company" />
              </li>
              <li className="company__media">
                <img src="https://hellopublic.wpengine.com/wp-content/uploads/2020/05/logo-forbes.svg" alt="company" />
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__content--second col-span-7 px-8 player hidden md:block">
        </div>

      </div>
    </Fragment>
  );
}

export default Hero;
