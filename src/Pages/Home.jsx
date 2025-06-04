import React from 'react';
// import Hero from '../Components/Home/Hero';
import AboutSection from '../Components/Home/AboutSection';
import ServiceSection from '../Components/Home/ServiceSection';
import Testimonials from '../Components/Home/Testimonials';
import Packegs from '../Components/Home/Packegs';
import Gallery from './Gallery';
import { Link } from 'react-router-dom';
import Hero from '../Components/Home/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
             <AboutSection></AboutSection>
             <ServiceSection/>
             <Testimonials/>
             <section className='flex flex-col justify-center items-center my-4' >
                <Packegs></Packegs>
             <Link to={'/customplan'} className='px-4 py-2 bg-purple-300 rounded-md'>Custom Plan</Link>
             </section>
             <Gallery></Gallery>
           
        </div>
    );
};

export default Home;