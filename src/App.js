import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentOne />} />
        <Route path="/next" element={<ComponentTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
