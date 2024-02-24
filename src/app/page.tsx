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


// function scroll( y: number, duration: number, offset: number) {
//   return(
//     <Scroll to="concept" smooth={true} duration={duration} offset={offset}></Scroll>
//   )
// }


function Posts({ title, url }: PostProps){
  return (
    <article>
      <a href={url}>
        <h3>{title}</h3>
      </a>
    </article>
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

  return (
    <div>
      <h1>Hello World</h1>
      <Posts title = {props1.title} url = {props1.url} />
      <Posts title = {props2.title} url = {props2.url} />
      <br>
      </br>
      <section id="concept"></section>
    </div>
  );
}