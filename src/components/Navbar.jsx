import '../css/Navbar.css';

export default function Navbar({ index }) {
	const links = [
		{ title: 'Home', url: '/' },
		{ title: 'About Me', url: 'about' },
		{ title: 'Buzzvel Projects', url: 'projects' },
		{ title: 'Career', url: 'career' },
	]
	return (
		<nav className='Navbar'>
			<ul>
				{links.map((link, idx) => <li key={idx} className={idx === index ? 'selected' : ''}><a href={link.url}>{link.title}</a></li>)}
			</ul>
		</nav>
	);
}