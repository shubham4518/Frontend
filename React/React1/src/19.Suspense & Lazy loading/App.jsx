import { Suspense, lazy } from 'react';

const About = lazy(() => import('./19.Suspense & Lazy loading/About'));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <About />
    </Suspense>
  );
}

export default App;