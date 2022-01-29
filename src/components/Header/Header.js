import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <header>
            <Navbar />
            <Hero />
            <Categories />
        </header>
    );
}
