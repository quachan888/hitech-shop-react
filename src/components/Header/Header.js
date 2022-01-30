import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";

export default function Header() {
    return (
        <header>
            <Navbar />
            <Hero />
            <Categories />
        </header>
    );
}
