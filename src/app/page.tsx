import { url } from "inspector";
import Image from "next/image";
import { list } from "postcss";
import { title } from "process";

// import React, { useState } from 'react';
import { Link as Scroll } from 'react-scroll';


interface PostProps {
  title: string;
  url: string;
}


interface MenuProps {
  a1: string;
  a2: string;
  a3: string;
}


function Posts({ title, url }: PostProps){
  return(
    <article>
      <a href={url} className="bg-red-500 text-white font-bold py-2 px-4">
        <h3>{title}</h3>
      </a>
    </article>
  );
}


function Menu({ a1, a2, a3 }: MenuProps){
  return(
    <nav>
      <ul>
        <li>
          <a href="#">a1</a>
        </li>
        <li>
          <a href="#">a2</a>
        </li>
        <li>
          <a href="#">a3</a>
        </li>
      </ul>
    </nav>
  );
}


export default function Home() {
  const props1 = {
    title: "example1",
    url: "https://example.com"
  };

  const props2 = {
    title: "example2",
    url: "https://example.com"
  };

  const menu1 = {
    a1: "whoami",
    a2: "About",
    a3: "Contact"
  };

  return(
    <div>
      <h1>Hello World</h1>
      <Posts title = {props1.title} url = {props1.url} />
      <Menu a1 = {menu1.a1} a2 = {menu1.a2} a3 = {menu1.a3} />
      <Posts title = {props2.title} url = {props2.url} />
      <br>
      </br>
      <section id="concept"></section>
    </div>
  );
}