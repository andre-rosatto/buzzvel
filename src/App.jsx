import Navbar from './components/Navbar.jsx';
import Landing from './pages/Landing.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			{/* <Landing /> */}
			{/* <About /> */}
			<Projects />
		</div>
	);
}

export default App;
