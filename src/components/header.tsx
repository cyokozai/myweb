import { url } from "inspector";
import Image from "next/image";
import { list } from "postcss";
import { title } from "process";
import React, { useState } from 'react';
import './header.css';

const header: React.FC = () => {
    return(
        <div>
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Whoami</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

