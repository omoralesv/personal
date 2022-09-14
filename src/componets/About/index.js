import { faCss3,faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo4 from '../../assets/images/logo4.png'
import Logo5 from '../../assets/images/logo5.png'
import Loader from 'react-loaders'

const About= () =>
{
    const [letterClass, setletterClass] = useState('text-animate')
    useEffect(()=> {
        setTimeout(()=>{
           return setletterClass('text-animate-hover')
       },3000)
   },[])


    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} stringArray={['A','b','o','u','t',' ','M','e']} index={15}></AnimatedLetters>
                </h1>
                <h2>General</h2>
                <p>
                    Hello, my name is Omar Morales and I am an aspiring web developer / software engineer. 
                    I recently graduated from Humboldt State University with a Bachelor's of Science in 
                    Computer Science. I am now looking to start my career in the world of programming. 
                </p>
                <h2>Skills</h2>
                <p>
                    My main two languages are C++ and JavaScript. I have over three years of experience 
                    programming in C++ and two years of experience programming in JavaScript. In addition 
                    to this I also have experience with the following languages / technologies: HTML, CSS, 
                    React, SQLPlus, Python, Java, PHP and Linux.
                </p>
                <p>
                    I am a fast learner and always looking improve my skills in whatever I'm doing.
                    
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
                    </div>
                    <div className='face4'>
                        <img className='pngLogo' src={Logo4} alt="C"></img>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"></FontAwesomeIcon>
                    </div>
                    <div className='face6'>
                        <img className='pngLogo' src={Logo5} alt="P"></img>
                    </div>

                </div>
            </div>
        </div>
        <Loader type="pacman"></Loader>
        </>
    )
    
}

export default About