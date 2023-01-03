import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Posts | first post</title>
        {/* <script defer src="https://connect.facebook.net/en_US/sdk.js" /> */}
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.info(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      {/* <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
    </Layout>
  );
}
