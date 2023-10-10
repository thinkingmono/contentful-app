import heroImg from '../assets/hero.svg'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-center">
                <div className='hero-title'>
                    <h1>Contentful CMS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non leo suscipit, ornare risus eu, hendrerit lorem. Donec iaculis mi ornare arcu commodo, nec cursus nibh dictum. Pellentesque aliquam</p>
                </div>
                <div className='img-container'>
                    <img src={heroImg} alt="Main Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero