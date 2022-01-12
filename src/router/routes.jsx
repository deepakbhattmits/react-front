import React from "react";
import { HashRouter,Route,Routes } from "react-router-dom";
import App from "../components/app";
import Search from "../components/search";
import Submit from "../components/submit";
import SearchRecord from "../components/searchRecord";
import Header from "../header";
import Footer from "../footer";

const ReactRouter =()=><> 
            <Header />
        <div className="container-fluid">
          <HashRouter>
            <Routes>
              <Route  path="/" element={App} />
              <Route  path="/Search" element={Search} />
              <Route  path="/Submit" element={Submit} />
              <Route  path="/searchRecord" element={SearchRecord} />
            </Routes>
          </HashRouter>
              
            </div>
            <Footer />
      </>

export default ReactRouter;
