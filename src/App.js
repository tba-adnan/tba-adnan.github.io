import { HashRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Error from './pages/404';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route key="error" exact path="/error">
                    <Error />
                </Route>
            </Routes>
        </Router>
    );
}