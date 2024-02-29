import { url } from "inspector";
import Image from "next/image";
import { list } from "postcss";
import { title } from "process";
import "../src/app/index.css";

interface PostProps {
  title: string;
  url: string;
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


export default function Home() {
  const props1 = {
    title: "example",
    url: "https://example.com"
  };

  return(
    <div>
      <h1>Hello World</h1>
      <Posts title = {props1.title} url = {props1.url} />
    </div>
  );
}