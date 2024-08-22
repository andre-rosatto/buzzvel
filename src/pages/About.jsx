import BlockFade from '../components/BlockFade.jsx';
import SlidingText from '../components/SlidingText.jsx';
import Carousel from '../components/Carousel.jsx';
import '../css/About.css';

export default function About() {
	return (
		<main className='About container pad-lg col gap-lg'>
			<BlockFade
				index={0}
			>
				<SlidingText ghostClass='ghost'>
					Experience
				</SlidingText>
				<div className='col gap-sm pad-left-md'>
					<p className='line-height-sm'>I consider my experience as a programmer, in a more consistent way, started about 25 years ago when I ventured with <span className='text-highlight'>Delphi</span> &ndash; mostly learning from my father.</p>
					<p className='line-height-sm'>After that, I discover <span className='text-highlight'>C#</span>. I fell in love with it, and it was my weapon of choice for several years.</p>
					<p className='line-height-sm'>Later, I started programming in <span className='text-highlight'>Python</span>. I really liked the syntax, and how easy it was to learn it.</p>
					<p className='line-height-sm'>Then, about 15 years ago, I got interested in Web Development. I started learning <span className='text-highlight'>HTML</span> and <span className='text-highlight'>CSS</span>, and shortly after that, <span className='text-highlight'>Javascript</span>. Although I missed Python's syntax, nothing compared to the reach HTML, CSS, and Javascript had. I could write a program, and it would run anywhere with a browser. That was absolutely fantastic!</p>
					<p className='line-height-sm'>I have kept honing my skills, and I have learned about other tools and technologies, such as <span className='text-highlight'>React</span>, <span className='text-highlight'>Angular</span>, <span className='text-highlight'>PHP</span>, <span className='text-highlight'>MySQL</span>, to mention a few.</p>
					<section className='carousel-wrapper pad-left-md'>
						<Carousel
							gap={10}
							itemWidth={300}
							previousButton={<button className='previousButton'></button>}
							nextButton={<button className='nextButton'></button>}
							pip={<div className='pip'></div>}
						>
							<div className='carousel-card col gap-sm center pad-sm'>
								<img className='carousel-card-img' src="./assets/img/fe_development_icon.svg" alt="Front-End Development" />
								<h3 className="carousel-card-title">Front-End Development</h3>
								<p className="carousel-card-text line-height-sm">Front-End Development is my passion. I am particularly experienced with Javascript, Typescript, HTML5, and CSS3.</p>
							</div>
							<div className='carousel-card col gap-sm center pad-sm'>
								<img className='carousel-card-img' src="./assets/img/frameworks_icon.svg" alt="Frameworks" />
								<h3 className="carousel-card-title">Frameworks</h3>
								<p className="carousel-card-text line-height-sm">I am also experienced with several development tools and frameworks, such as GitHub, React, Angular, and Laravel.</p>
							</div>
							<div className='carousel-card col gap-sm center pad-sm'>
								<img className='carousel-card-img' src="./assets/img/languages_icon.svg" alt="Programming Languages" />
								<h3 className="carousel-card-title">Programming Languages</h3>
								<p className="carousel-card-text line-height-sm">I have used and experimented with a wealth of programming languages, such as C#, Python,and PHP.</p>
							</div>
							<div className='carousel-card col gap-sm center pad-sm'>
								<img className='carousel-card-img' src="./assets/img/skills_icon.svg" alt="Skills" />
								<h3 className="carousel-card-title">Skills</h3>
								<p className="carousel-card-text line-height-sm">I am a native Portuguese speaker,and I speak English fluently. I can proficiently use several design tools such as Photoshop, Illustrator, Figma, and similar ones.</p>
							</div>
						</Carousel>
					</section>
				</div>
			</BlockFade>
		</main>
	);
}