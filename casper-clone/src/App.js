import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './TopBar';
import Help from './Help';

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;