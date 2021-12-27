import { Fragment } from "react";

const TextApp = () => {
  return (
    <Fragment>
      <div className="field flex">
        <input type="text" placeholder="+1 (212) 123 4567" className="outline-none placeholder-slate border text-black border-slate p-5" />
        <button className="bg-primary text-white capitalize text-sm p-5 font-medium">text me the app</button>
      </div>
    </Fragment>
  );
}

export default TextApp;
