import { url } from "inspector";
import Image from "next/image";
import { list } from "postcss";
import { title } from "process";
import React, { useState } from 'react';
import './header.css';


type HeaderProps = {
    p1: string;
    l1: string;
    p2: string;
    l2: string;
    p3: string;
    l3: string;
    p4: string;
    l4: string;
}


const header: React.FC<HeaderProps> = (props) => {
    return(
        <div>
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <a href="props.l1">props.p1</a>
                        </li>
                        <li>
                            <a href="props.l2">props.p2</a>
                        </li>
                        <li>
                            <a href="props.l3">props.p3</a>
                        </li>
                        <li>
                            <a href="props.l4">props.p4</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

