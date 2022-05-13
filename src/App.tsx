import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import BaseLayout from './Layouts/Base';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <BaseLayout>
                <Home />
              </BaseLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
