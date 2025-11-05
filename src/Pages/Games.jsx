import React from 'react'
import MathQuiz from '../Games/MathQuiz'
import ColorShapesSort from '../Games/ColorShapesSort'
import WordBuilder from '../Games/WordBuilder'
import AnimalSoundQuiz from '../Games/AnimalSoundQuiz'
import MemoryMatch from '../Games/MemoryMatch'
import SpellWordGame from '../Games/SpellWordGame'
import ScienceQuizAdventure from '../Games/ScienceQuizAdventure'
import PlantAnimalExplorer from '../Games/PlantAnimalExplorer'
import VoiceRepeaterGame from '../Games/VoiceRepeaterGame'
import EcoGuardianGame from '../Games/EcoGuardianGame'
import Footer from '../Sections/Footer'
import TopicsList from '../Games/TopicsList'
import Something from '../Games/Something.jsx'
const Games = () => {
  return (
    <div>
      <div className='relative top-[0px]'><MathQuiz/></div>
      <div className='relative top-[0px]'><ColorShapesSort/></div>
      <div className='relative top-[0px]'><WordBuilder/></div>
      <div className='relative top-[0px]'><AnimalSoundQuiz/></div>
      <div className='relative top-[0px]'><MemoryMatch/></div>
      <div className='relative top-[0px]'><SpellWordGame/></div>
      <div className='relative top-[0px]'><ScienceQuizAdventure/></div>
      <div className='relative top-[0px]'><Something/></div>
      <div className='relative top-[0px]'><PlantAnimalExplorer/></div>
      <div className='relative top-[0px]'><VoiceRepeaterGame/></div>
      <div className='relative top-[0px]'><EcoGuardianGame/></div>
      <div className='relative top-[0px] pb-24'><TopicsList/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Games

