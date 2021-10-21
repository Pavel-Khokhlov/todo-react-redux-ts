import React from "react";
import LoaderGIF from "../../images/loading.gif";

import "./Loader.css";

const Loader = () => {
  return (
    <section className="loader">
      <img src={LoaderGIF} alt="icon loading" />
    </section>
  );
};

export default Loader;
