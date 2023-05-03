import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there its Marek here.</p>
        <p>
          Click <Link href="/posts/first-post">here</Link> to see my first post! 
        </p>
      </section>
    </Layout>
  );
}