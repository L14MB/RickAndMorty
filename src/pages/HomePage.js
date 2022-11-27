import React,{useContext} from 'react'
import Search from '../components/Search';
import CharacterCard from '../components/CharacterCard';
import "../styles/home.css"
import { ThemeContext } from '../contexts/ThemeContext';

function HomePage({characters,setCharacters}) {
    const {darkMode, setDarkMode} = useContext(ThemeContext)

    return(
        <div className={darkMode ? "home-container home-dark" : "home-container"}>
            <Search setCharacters={setCharacters}/>
            <h1>Rick & Morty Main Characters</h1>
            <div className={darkMode ? "characters-container characters-dark" : "characters-container"}>
                {
                    characters.map((item)=>{
                        return <CharacterCard key={item.id} character={item}/>
                    })
                }
            </div>

        </div>
    )
}

export default HomePage