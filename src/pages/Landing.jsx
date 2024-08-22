import BlockFade from '../components/BlockFade';
import SlidingText from '../components/SlidingText';
import '../css/Landing.css';

export default function Landing() {
	return (
		<main className='Landing container pad-lg col gap-lg'>
			<BlockFade
				index={0}
			>
				<SlidingText ghostClass='ghost'>
					Welcome
				</SlidingText>
				<div className='col gap-sm pad-left-md'>
					<p className='line-height-sm'>Welcome to my introduction website!</p>
					<p className='line-height-sm'>My names is <span class='text-highlight'>André Rosatto</span>, and here you can learn a bit about me.</p>
					<p className='line-height-sm'>My first contact with computer programming happened when I was about 10 years old, and my father bought our first computer &ndash; an MSX Hotbit HB-8000.</p>
					<p className='line-height-sm'>Ever since, programming and web development have become more than just a job or a hobby for me &ndash; it has turned into a passion! For me, there is nothing more rewarding than bringing an abstract idea into life. Seeing on a screen what only existed in my mind feels like a real accomplishment.</p>
				</div>
			</BlockFade>

			<BlockFade
				index={1}
			>
				<SlidingText ghostClass='ghost'>Me, in a nutshell</SlidingText>
				<div className="row gap-sm pad-left-md">
					<img className='profile-pic' src="assets/img/profile_pic.webp" alt="Profile Picture" />
					<div className='col gap-sm'>
						<p>No one can be reduced to a few bullet points, but I will give it a try anyway:</p>
						<ul className='pad-left-lg'>
							<li className='line-height-md'>My name is André Rosatto, and I'm from Brazil</li>
							<li className='line-height-md'>I am a <span className='text-highlight'>Front-End Developer</span></li>
							<li className='line-height-md'>I have also worked as an English teacher</li>
							<li className='line-height-md'>I can speak <span className='text-highlight'>Portuguese</span> and <span className='text-highlight'>English</span></li>
							<li className='line-height-md'>Learning and personal growth motivates me</li>
						</ul>
					</div>
				</div>
				<p className='quote'>"The highest activity a human being can attain is learning for understanding,<br />because to understand is to be free."</p>
				<p className='quote-author text-highlight'>&ndash; Baruch Spinoza</p>
			</BlockFade>
		</main>
	);
}