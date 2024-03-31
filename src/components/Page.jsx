import React from "react";
import { Header, Footer } from "./shared";
import Content from "./Content";
import useUser from "./customHook/user/useUser";
import Mask from "./Mask";

function Page() {
  const user = useUser();
  return (
    <>
      {user?.isLoading ? <Mask /> : null}
      <Header textBanner={"Login"} />
      <Content />
      <Footer />
    </>
  );
}

export default Page;
