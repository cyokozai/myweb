import { url } from "inspector";
import Image from "next/image";
import { list } from "postcss";
import { title } from "process";

interface PostProps {
  title: string;
  url: string;
}

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
    title: "example",
    url: "https://example.com"
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Posts title = {props1.title} url = {props1.url} />
    </div>
  );
}