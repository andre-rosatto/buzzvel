import BlockFade from '../components/BlockFade.jsx';
import SlidingText from '../components/SlidingText.jsx';
import Carousel from '../components/Carousel.jsx';
import '../css/Projects.css';

export default function Projects() {
	return (
		<main className='Projects container pad-lg col gap-lg'>
			<BlockFade
				index={0}
			>
				<SlidingText ghostClass='ghost'>
					Buzzvel Key Projects
				</SlidingText>
				<div className='col gap-sm pad-left-md'>
					<p className='line-height-sm'>These are some of <span className='text-highlight'>Buzzvel's Key Projects</span>.</p>

					<section className='carousel-wrapper'>
						<Carousel
							gap={10}
							itemWidth={300}
							previousButton={<button className='previousButton'></button>}
							nextButton={<button className='nextButton'></button>}
							pip={<div className='pip'></div>}
						>

						</Carousel>
					</section>
				</div>
			</BlockFade>
		</main>
	)
}