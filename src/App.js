import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (  
        <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute component={Dashboard} />}/>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;
