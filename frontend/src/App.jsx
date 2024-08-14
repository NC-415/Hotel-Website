import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home';
// import Weddings from './Weddings'
// import Accomadation from './Accomadation'
// import Events from './pages/Events'
// import Offers from './pages/Offers'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      {/* <Route path='/' element={<Weddings />} />
      <Route path='/' element={<Accomadation />} />
      <Route path='/' element={<Events />} />
      <Route path='/' element={<Offers />} /> */}
    </Routes>

  );
}

export default App