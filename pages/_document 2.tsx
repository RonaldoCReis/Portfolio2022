import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Olá, me chamo Ronaldo Reis. Sou Desenvolvedor Front end e Web Designer. Esse é o meu portfólio e aqui você vai poder conhecer o meu trabalho."
        />
        <meta
          name="keywords"
          content="Ronaldo Reis, Web designer, Front end, Criar Sites, Website, HTML, CSS, JavaScript"
        />
        <meta name="author" content="Ronaldo Reis" />
        <meta name="owner" content="Ronaldo Reis" />
        <meta name="copyright" content="Ronaldo Reis (c) 2020" />
        <meta name="title" content="Ronaldo Reis | Front End & Web Designer" />
        <meta
          property="og:title"
          content="Ronaldo Reis | Front End & Web Designer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ronaldo-reis.com/" />
        <meta
          property="og:image"
          content="www.ronaldo-reis.com/img/ogImg.PNG"
        />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/icone.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Spectral:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
