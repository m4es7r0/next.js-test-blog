import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <p>
          Read &#32; <Link href="posts/first-post">this page!</Link>
        </p> */}
        <p>
          Hello, i'm <b>Dmytro</b>. I'm a software enginer
        </p>
        <Link href={"posts/first-post"}>First post</Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn" target={`_blank`}>
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
    </Layout>
  );
}
