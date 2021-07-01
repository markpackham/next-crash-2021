// Next JS is far more SEO friendly than regular React thanks to Head letting us use meta data
import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta
          name="keywords"
          content="web developement, seo, coding, keywords-example-in-Nextjs"
        />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
