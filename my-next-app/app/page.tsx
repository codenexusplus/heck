import React from "react";
import Header from "./components/Header/header";
import Header1 from "./component1/Header1/header1";
import Header2 from "./component2/Header2/header2";
import Header3 from "./component3/header3/header3";
import Header4 from "./coponent4/Header4/header4";
import Header5 from "./component5/Header5/header5";
import Header6 from "./component6/Header6/header6";
import Footer from "./component/Footer/footer";
import Footer1 from "./compo/Footer1/footer1";
// Ensure these files export components correctly
import H1 from "./cr/H1/hi";
import H2 from "./cr1/H2/h2";
import H3 from "./cr3/H3/h3";
import H4 from "./cr2/H4/h4";
import H5 from "./cr4/H5/h5";
import H6 from "./cr5/H6/h6";
import F from "./cr6/F/f"; 
import S1 from "./shop/S1/s1" 
import S2 from "./Shop2/S2/s2" 
import S3 from "./shop3/S3/s3.tsx" 

const Page = () => {
  return (
    <div>
      <Header />
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Header6 />
      <Footer />
      <Footer1 />
      <H1 /> {/* Corrected to match component names */}
      <H2 /> {/* Corrected to match component names */}
      <H3 /> {/* Corrected to match component names */}
      <H4 /> {/* Corrected to match component names */}
      <H5 /> {/* Corrected to match component names */}
      <H6 /> {/* Corrected to match component names */}
      <F /> {/* Corrected to match component names */}
      <S1/>
      <S2/>
      <S3/>

    </div>
  );
};

export default Page;
