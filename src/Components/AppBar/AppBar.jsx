import { Fragment } from "react";
import "./AppBar.css";

const AppBar = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-between py-4 px-5 bg-transparent w-100 appbar">
        <div className="brand flex items-end text-2xl font-semibold tracking-wide">
          <div className="brand__media h-10 w-10 overflow-hidden">
            <img src="/logo.png" className="brand__logo w-100 h-100 object-contain" />
          </div>
          <h4 className="brand__name ">public.com</h4>
        </div>

        <ul className="list flex items-center">
          <li className="list__item text-base text-black font-medium cursor-pointer mr-4">Features</li>
          <li className="list__item text-base text-black font-medium cursor-pointer mr-4">Stocks</li>
          <li className="list__item text-base text-black font-medium cursor-pointer mr-4">Crypto</li>
          <li className="list__item text-base text-black font-medium cursor-pointer mr-4">Learn</li>
          <button className="bg-primary outline-none text-white py-2 px-4 rounded font-medium shadow-sm mr-4">Get the App</button>
          <button className="btn__outline outline-none rounded border border-slate bg-transparent px-4 py-2 font-medium">Sign In</button>
        </ul>
      </div>
    </Fragment>
  );
}

export default AppBar;