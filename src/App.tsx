import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import config from '@/theme/config';
import Router from '@/routes/Router';
import Header from '@/components/layouts/header';
import BackToTop from '@/components/layouts/backToTop';
import Footer from '@/components/layouts/footer';

function App() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta name="theme-color" content={config.color} />
        <meta name="description" content={config.description} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:image" content={`${config.url}ogimage.png`} />
        <meta property="og:description" content={config.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:url" content={config.url} />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      <Router />
      {location.pathname !== '/' && <BackToTop />}
      <Footer />
    </>
  );
}

export default App;
