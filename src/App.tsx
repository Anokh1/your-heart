// src/App.tsx
import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
