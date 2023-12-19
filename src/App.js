import { BrowserRouter } from 'react-router-dom';
import './App.css';
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <PublicRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
