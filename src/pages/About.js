import React,{useContext} from 'react'
import banner from '../assets/banner.jpeg'
import '../styles/about.css';
import { ThemeContext } from '../contexts/ThemeContext';

function About() {
const {darkMode, setDarkMode} = useContext(ThemeContext)

    return (
        <div className = {darkMode ? "about-dark" : "about-container"}>
            <img style={{width:"100%"}} src={banner} />
            <h1 style={{padding:"20px"}}>About Us</h1>
            <p style={{marginLeft:"20px"}}>Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realitie, often travelling to other planets and dimensions through portals and on Rick's flying saucer.The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into high jinks.</p>

            <p style={{marginLeft:"20px"}}>Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer, and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical acclaim for its originality, creativity, and humor. They have been nominated for three Primetime Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. They've also received two Annie Awards. The series has several times been the most viewed television comedy of adults. The popularity of Rick and Morty has made it a billion-dollar merchandising and media franchise.</p>
        </div>
    )
}

export default About