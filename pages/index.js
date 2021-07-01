// Next JS is far more SEO friendly than regular React thanks to Head letting us use meta data
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta
          name="keywords"
          content="web developement, seo, coding, keywords-example-in-Nextjs"
        />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  );
}
