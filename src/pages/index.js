import * as React from "react";

const Redirect = path => {
  window.location = path;
}

const IndexPage = () => {
  React.useEffect(() => {
    Redirect("/explore/");
  })
  return <></>;
};

export default IndexPage;
