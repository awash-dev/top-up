import React from "react";

const Contacts = () => {
  return (
    <div className="bg-blue-950/100 flex items-center justify-around py-4 px-4 ">
      <div className=" container">
        <h1 className=" h1">Contact us</h1>
        <p>
          If you need any help, please contact us by clicking "Customer Service"
          to get in touch with us.
        </p>
      </div>
      <div>
        <button className=" px-4 py-2 rounded-lg bg-slate-600">Feedback</button>
      </div>
    </div>
  );
};

export default Contacts;
