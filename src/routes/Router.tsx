import { Routes, Route } from 'react-router-dom';
import Top from '@/features/top/routes';
import Under from '@/features/under/routes';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/under" element={<Under />} />
    </Routes>
  );
}
export default Router;
