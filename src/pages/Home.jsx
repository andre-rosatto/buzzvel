import BlockFade from '../components/BlockFade';
import Navbar from '../components/Navbar';
import SlidingText from '../components/SlidingText';
import '../css/Home.css';

export default function Home() {
	return (
		<>
			<Navbar index={0} />
			<main className='Home container pad-lg col gap-lg'>
				<BlockFade
					index={0}
				>
					<SlidingText ghostClass='ghost'>
						Welcome
					</SlidingText>
					<div className='col gap-sm pad-left-md'>
						<p className='line-height-sm'>Welcome to my introduction website!</p>
						<p className='line-height-sm'>My names is <span className='text-highlight'>André Rosatto</span>, and here you can learn a bit about me.</p>
						<p className='line-height-sm'>My first contact with computer programming happened when I was about 8 or 10 years old, and my father bought our first computer &ndash; an MSX Hotbit HB-8000.</p>
						<p className='line-height-sm'>Ever since, programming and web development have become more than just a job or a hobby for me &ndash; it has turned into a passion! For me, there is nothing more rewarding than bringing an abstract idea into life. Seeing on a screen what only existed in my mind feels like a real accomplishment.</p>
						<a className='row gap-sm center pad-left-sm personal-link' href='https://github.com/andre-rosatto' target='_blank' rel="noreferrer">
							<img className='link-icon' src="./assets/img/github_icon.svg" alt="André Rosatto's GitHub" />
							<span className='text-highlight'>Check out my GitHub.</span>
						</a>
						<a className='row gap-sm center pad-left-sm personal-link' href='https://www.linkedin.com/in/andre-rosatto/' target='_blank' rel="noreferrer">
							<img className='link-icon' src="./assets/img/linkedin_icon.svg" alt="André Rosatto's LinkedIn" />
							<span className='text-highlight'>I am also on LinkedIn.</span>
						</a>
					</div>
				</BlockFade>

				<BlockFade
					index={1}
				>
					<SlidingText ghostClass='ghost'>Me, in a nutshell</SlidingText>
					<div className="pad-left-md personal-info gap-sm">
						<p className='personal-intro'>No one can be reduced to a few bullet points, but I will give it a try anyway:</p>
						<img className='profile-pic' src="assets/img/profile_pic.webp" alt="Profile" />
						<ul className='personal-bullets col gap-sm pad-left-md'>
							<li className='line-height-sm'>My name is André Rosatto, and I'm from Brazil</li>
							<li className='line-height-sm'>I am a <span className='text-highlight'>Front-End Developer</span></li>
							<li className='line-height-sm'>I have also worked as an English teacher</li>
							<li className='line-height-sm'>I can speak <span className='text-highlight'>Portuguese</span> and <span className='text-highlight'>English</span> fluently</li>
							<li className='line-height-sm'>Learning and personal growth motivate me</li>
						</ul>
					</div>

					<p className='quote'>"The highest activity a human being can attain is learning for understanding, because to understand is to be free."</p>
					<p className='quote-author text-highlight'>&ndash; Baruch Spinoza</p>
				</BlockFade>
			</main>
		</>
	);
}