import { useState } from 'react';
import '../css/Navbar.css';

export default function Navbar({ index }) {
	const [expanded, setExpanded] = useState(false);

	const links = [
		{ title: 'Home', url: '/' },
		{ title: 'About Me', url: 'about' },
		{ title: 'Buzzvel Projects', url: 'projects' },
		{ title: 'Career', url: 'career' },
	];

	return (
		<nav className={`Navbar ${expanded ? 'expand' : ''}`}>
			<div className="menu" onClick={() => setExpanded(!expanded)}></div>
			<ul>
				{links.map((link, idx) => <li key={idx} className={idx === index ? 'selected' : ''}><a href={link.url}>{link.title}</a></li>)}
			</ul>
		</nav>
	);
}