import { Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import Room from './components/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Room />} />
        <Route path="about" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
