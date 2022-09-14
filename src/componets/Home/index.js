import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

import Loader from 'react-loaders'

const Home = ()=>
{
    const [letterClass, setletterClass] = useState('text-animate')
    let text= "mar Morales,"
    const nameArray = text.split("")
    let text2="Web Developer"
    const jobArray = text2.split("")

    useEffect(()=> {
         setTimeout(()=>{
            return setletterClass('text-animate-hover')
        },4000)
    },[])


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span> 
                    <img src={LogoTitle} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass}
                    stringArray={nameArray} index={15}></AnimatedLetters>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    stringArray={jobArray} index={22}></AnimatedLetters> 
                </h1>
                <h2>Frontend Developer / Software Engineer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}

export default Home