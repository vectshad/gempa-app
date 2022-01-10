import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
                <Route exact path="/" element={<ProtectedRoute component={Dashboard} />}/>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" />}/>
            </Routes>
        </Router>
        </div>
    );
}

export default App;
