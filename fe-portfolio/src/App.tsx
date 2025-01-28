import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './global.css';
import { LanguageProvider } from './pages/LanguageContext';

function App() {
  return (
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
  );
}

export default App;
