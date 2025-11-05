import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Subjects from "./Components/Subjects";
import Games from "./Pages/Games";
// import Contents from "./Pages/Contents";
import Contact from "./Pages/Contact";
import LevelList from "./Components/LevelList";
import SubjectContent from "./Components/SubjectContent";
import Header from './Header/Header'
import Chatbot from './Chatbot'
import Privacy from "./Sections/Privacy";
import Terms from "./Sections/Terms";
import Guides from "./Sections/Guides";
import ExploreCourses from "./Pages/ExploreCourses";
import FloatingIcon from './Sections/FloatingIcon'

function App() {

  return (
    <div className="CompleteHeader border-amber-800">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/" element={<Subject />} /> */}
          <Route path="/subjects/:levelName" element={<LevelList />} />
          <Route path="/subject/:subjectId" element={<SubjectContent />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/explore" element={<ExploreCourses />} />


        </Routes>
      </Router>
      <Chatbot />
      <div className='relative top-[80px]'><FloatingIcon/></div>

    </div>
  )
}

export default App
