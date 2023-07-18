import React from 'react'

import {Footer, Blog, Possibility, Features, WhatAviao, Header} from "./containers";
import {Cta, Brand, Navbar} from "./components";
import './app.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatAviao />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}
export default App
