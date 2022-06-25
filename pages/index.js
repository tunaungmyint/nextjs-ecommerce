import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <Head>
        <title>99loveshop</title>
        <meta name="description" content="best shop in myanmar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-indigo-600 hover:font-extrabold  ">
        Next JS Ecommerce Store
      </h1>
    </div>
  );
}
