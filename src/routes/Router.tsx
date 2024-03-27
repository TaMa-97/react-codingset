import { Routes, Route } from 'react-router-dom';
import Top from '@/features/top/routes';
import Under from '@/features/under/routes';
import NotFound from '@/features/notFound/routes';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/under" element={<Under />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Router;
