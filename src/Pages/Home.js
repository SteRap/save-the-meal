import React from "react";
import Main from "../Containers/Main";
import Content from "../Containers/Content";
import CTA from "../Containers/CTA";

function Home() {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Main />
      <Content />
      <CTA />
    </div>
  );
}

export default Home;
