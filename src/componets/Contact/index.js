import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact =()=>
{
    const [letterClass, setletterClass] = useState('text-animate')
    useEffect(()=> {
        setTimeout(()=>{
           return setletterClass('text-animate-hover')
       },3000)
   },[])

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} stringArray={['C','o','n','t','a','c','t',' ','M','e']} index={15}></AnimatedLetters>
                    </h1>
                    <p>
                    This website is mainly for demonstrational purposes and is therefore not set up as a proper avenue for 
                    contacting me. If you would like to contact me, please use LinkedIn, which I have linked at the bottom 
                    of the navigation bar. Thank you :)  
                    </p>
                    <div className='contact-form'>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required></input>
                            </li>

                            <li className='half'>
                                <input type="email" name="email" placeholder="email" required></input>
                            </li>

                            <li >
                                <input placeholder="Subject" type="text" name="subject" required></input>
                            </li>

                            <li>
                                <textarea placeholder="Message" required></textarea>
                            </li>

                            <li>
                                <input type="submit" className='flat-button' value="SEND"></input>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}

export default Contact