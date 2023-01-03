import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{`Post - ${postData.title}`}</title>
      </Head>
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  try {
    return {
      paths: getAllPostIds(),
      fallback: false,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
