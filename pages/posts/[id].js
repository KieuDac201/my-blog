import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import Head from "next/head";
import Date from "../../components/date";
import styles from "./post.module.css";

import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  console.log(postData);

  return (
    <Layout>
      <div className={styles.author}>
        <img src={postData.authorPicture} />
        <div>
          <h4>{postData.author}</h4>
          <p>
            Posted on <Date dateString={postData.date} />
          </p>
        </div>
      </div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <img
        src={postData.thumbnail}
        width="100%"
        height="auto"
        layout="intrinsic"
      />
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
