import React from "react";
import ToggleTheme from "./toggleTheme"

export default function App(){
  return(
    <div>
    {/* <!-- toggleTheme --> */}
    <ToggleTheme />
    <main className="container"> 
      <div className="row g-5">
        <div className="col-md-8">
          
          {/* <!-- bloger-title -->
          <!-- articles -->
          <!-- article-navigation --> */}
        </div>
      <div className="col-md-4">
        <div className="position-sticky" style="top: 2rem;"> 
          {/* <!-- about -->
          <!-- recent post -->
          <!-- archives -->
          <!-- social-media --> */}
        </div>
      </div>
    </div>
  </main>
  </div>
  );}
