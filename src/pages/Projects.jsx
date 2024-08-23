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
				<div className='col gap-sm'>
					<section className='carousel-wrapper'>
						<Carousel
							gap={10}
							itemWidth={300}
							previousButton={<button className='previousButton'></button>}
							nextButton={<button className='nextButton'></button>}
							pip={<div className='pip'></div>}
						>
							{/* Viplant */}
							<a className='carousel-card pad-sm col gap-sm' href="https://buzzvel.com/portfolio/viplant" target='_blank' title="Viplant" >
								<img src="../assets/img/viplant.webp" alt="Viplant" className="carousel-card-img" />
								<h3 className='carousel-card-title'>Viplant</h3>
								<h4 className="carousel-card-category text-highlight">E-commerce</h4>
								<p className="carousel-card-text">We created a new website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.</p>
							</a>
							{/* Traquinices */}
							<a className="carousel-card" href="https://buzzvel.com/portfolio/traquinices" target='_blank' title="Traquinices" >
								<img src="../assets/img/traquinices.webp" alt="Traquinices" className="carousel-card-img" />
								<h3 className='carousel-card-title'>Traquinices</h3>
								<h4 className="carousel-card-category">Retail</h4>
								<p className="carousel-card-text">Traquinices is a company that was born in Portugal in 1996. It specializes in the distribution of premium Childcare products to provide the best satisfaction to customers.</p>
							</a>
							{/* DBS */}
							<a className="carousel-card" href="https://buzzvel.com/portfolio/dbs" target='_blank' title="DBS" >
								<img src="../assets/img/dbs.webp" alt="DBS" className="carousel-card-img" />
								<h3 className='carousel-card-title'>DBS</h3>
								<h4 className="carousel-card-category">Health</h4>
								<p className="carousel-card-text">We built this platform and APP that allowed primary users to track medical tests.</p>
							</a>
							{/* Miss Can */}
							<a className="carousel-card" href="https://buzzvel.com/portfolio/miss-can" target='_blank' title="Miss Can" >
								<img src="../assets/img/miss_can.webp" alt="Miss Can" className="carousel-card-img" />
								<h3 className='carousel-card-title'>Miss Can</h3>
								<h4 className="carousel-card-category">Ecommerce</h4>
								<p className="carousel-card-text">A Portuguese and family project of the canning industry with 3 generations of history and tradition. Canned food produced in Portugal, with Portuguese fish and artisanal.</p>
							</a>
							{/* ThinkFeridas */}
							<a className="carousel-card" href="https://buzzvel.com/portfolio/thinkferidas" target='_blank' title="ThinkFeridas" >
								<img src="../assets/img/thinkferidas.webp" alt="ThinkFeridas" className="carousel-card-img" />
								<h3 className='carousel-card-title'>ThinkFeridas</h3>
								<h4 className="carousel-card-category">Health Wound App</h4>
								<p className="carousel-card-text">ThinkFeridas is an application that responds to the need of many health professionals who work alone in the clinical decision regarding treating complex wounds.</p>
							</a>
							{/* Vigias da Arriba */}
							<a className="carousel-card" href="https://buzzvel.com/portfolio/vigias-da-arriba" target='_blank' title="Vigias da Arriba" >
								<img src="../assets/img/vigias_da_arriba.webp" alt="Vigias da Arriba" className="carousel-card-img" />
								<h3 className='carousel-card-title'>Vigias da Arriba</h3>
								<h4 className="carousel-card-category">Luxury Real State Microsite</h4>
								<p className="carousel-card-text">Vigias da Arriba is a luxury, unique and exclusive condominium with several villas with a superb sea view. It is located in Torres Vedras.</p>
							</a>
							{/* Portugual Advanced Club */}
							<a className="carousel-card" href="https://buzzvel.com/portfolio/portugal-advanced-health" target='_blank' title="Portugual Advanced Health" >
								<img src="../assets/img/portugal_advanced_health.webp" alt="Portugual Advanced Health" className="carousel-card-img" />
								<h3 className='carousel-card-title'>Portugual Advanced Health</h3>
								<h4 className="carousel-card-category">Health CRM & Website & Call Center System</h4>
								<p className="carousel-card-text">Portugal Advanced Health or PAH is an innovative and pioneering project in the area of health in Portugal, specializing in hyperbaric treatments at 1.4atm (atmosphere).</p>
							</a>
							{/* Hotspotty */}
							<a className="carousel-card" href="https://buzzvel.com/portfolio/hotspotty" target='_blank' title="Hotspotty" >
								<img src="../assets/img/hotspotty.webp" alt="Hotspotty" className="carousel-card-img" />
								<h3 className='carousel-card-title'>Hotspotty</h3>
								<h4 className="carousel-card-category">SaaS Software in Helium Network</h4>
								<p className="carousel-card-text">An innovative "All-in-One" platform to plan, manage and optimize decentralized networks such as the global Helium network for the Internet of Things.</p>
							</a>
						</Carousel>
					</section>
				</div>
			</BlockFade>
		</main>
	)
}