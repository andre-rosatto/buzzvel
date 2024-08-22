import SlidingText from '../components/SlidingText';
import '../css/Landing.css';

export default function Landing() {
	return (
		<main className='Landing container pad-lg col gap-lg'>
			<section>
				<SlidingText>Welcome</SlidingText>
				<div className='col gap-sm pad-left-md'>
					<p className='line-height-sm'>Welcome to my introduction website! Here you can learn a bit about me, André Rosatto.</p>
					<p className='line-height-sm'>My first contact with computer programming happened when I was about 8 years old, and my father bought our first computer. Ever since, programming and web development have become more than a job or a hobby for me &ndash; it has turned into a passion! For me, there is nothing more rewarding than turning an abstract idea to life. Seeing on a screen what only existed in my mind feels like a real accomplishment.</p>
				</div>
			</section>
			<section>
				<SlidingText>Me, in a nutshell</SlidingText>
				<div className="row gap-sm">
					<img className='profile-pic' src="assets/img/profile_pic.webp" alt="Profile Picture" />
					<div className='col gap-sm'>
						<p>No one can be reduced to a few bullet points, but I will give it a try anyway:</p>
						<ul className='pad-left-lg'>
							<li className='line-height-md'>My name is André Rosatto, and I'm from Brazil</li>
							<li className='line-height-md'>I am a Front-End Developer</li>
							<li className='line-height-md'>I have also worked as an English teacher</li>
							<li className='line-height-md'>I can speak Portuguese and English</li>
							<li className='line-height-md'>Learning and personal growth motivates me</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
}