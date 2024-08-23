import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Career from './pages/Career.jsx';
import Error from './pages/Error.jsx';
import './App.css';

const router = createBrowserRouter([
	{ path: '/', element: <Home />, errorElement: <Error /> },
	{ path: '/about', element: <About /> },
	{ path: '/projects', element: <Projects /> },
	{ path: '/career', element: <Career /> },
]);

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
