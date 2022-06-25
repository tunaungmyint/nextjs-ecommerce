import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' |  99LoveStore' : '99LoveStore'}</title>
        <meta name="description" content="best shop in myanmar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex justify-between items-center h-12 shadow-md">
            <Link href="/">
              <a className="text-lg font-bold p-2">99LoveStore</a>
            </Link>

            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center shadow-inner">
          <p>Copyright: {new Date().getFullYear()} 99LoveStore</p>
        </footer>
      </div>
    </>
  );
}
