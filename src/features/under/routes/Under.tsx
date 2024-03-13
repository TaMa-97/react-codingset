import { Helmet } from 'react-helmet';
import UnderBody from '../compenents';

function Under() {
  return (
    <>
      <Helmet>
        <title>下層HOGEHOGE</title>
        <meta name="description" content="下層HOGEHOGE description." />
        <meta property="og:title" content="下層HOGEHOGE" />
        <meta property="og:description" content="下層HOGEHOGE description." />
      </Helmet>
      <UnderBody />
    </>
  );
}

export default Under;
