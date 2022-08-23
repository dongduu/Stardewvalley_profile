import Head from "next/head";

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  return (
    <Head>
      <title>{title} | stardewvalley</title>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-96x96.png"
      ></link>
    </Head>
  );
}
