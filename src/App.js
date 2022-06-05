import React from "react";
import Info from "./components/Info";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./App.css"


export default function App(){
    return (
        <div className="container">
            <header className="container--header">
                <Info/>
                <Buttons/>
            </header>
            <main>
                <About/>
                <Interests/>
            </main>
            <Footer/>
        </div>
    )
}