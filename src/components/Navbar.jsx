import '../css/Navbar.css';

export default function Navbar() {
	return (
		<nav className='Navbar'>
			<ul>
				<li className='selected'><a href='#'>Home</a></li>
				<li><a href='#'>About Me</a></li>
				<li><a href='#'>Buzzvel Projects</a></li>
				<li><a href='#'>Career</a></li>
			</ul>
		</nav>
	);
}