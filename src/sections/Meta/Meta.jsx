import { Helmet } from 'react-helmet-async';

function Meta() {
  return (
    <Helmet>
      {/* Osnovni HTML meta podatci */}
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* HTML Meta Tags */}
      <title>Jakov Lisjak - Full Stack Developer</title>
      <meta
        name="description"
        content="Portfolio stranica web developera Jakova Lisjaka, specijaliziranog za moderni React.js i Next.js razvoj."
      />

      {/* Facebook / Open Graph Meta Tags */}
      <meta property="og:url" content="https://jakovlisjak.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jakov Lisjak - Full Stack Developer" />
      <meta
        property="og:description"
        content="Portfolio stranica web developera Jakova Lisjaka, specijaliziranog za moderni React.js i Next.js razvoj."
      />
      <meta
        property="og:image"
        content="https://jakovlisjak.com/images/og-image.png"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jakovlisjak.com" />
      <meta property="twitter:url" content="https://jakovlisjak.com" />
      <meta
        name="twitter:title"
        content="Jakov Lisjak - Full Stack Developer"
      />
      <meta
        name="twitter:description"
        content="Portfolio stranica web developera Jakova Lisjaka, specijaliziranog za moderni React.js i Next.js razvoj."
      />
      <meta
        name="twitter:image"
        content="https://jakovlisjak.com/images/og-image.png"
      />

      {/* Google fontovi (opcionalno, može i u index.html) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&family=Rubik:wght@800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export default HelmetMeta;
