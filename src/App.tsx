import { useState } from 'react'
import './App.css'
import Fretboard from './components/Fretboard'
import Toolbar from './components/Toolbar'
import { FretMarkerStyle, Graph, Project, ProjectConfig, Styling, StylingCollection, StylingShape } from '../model/model'

const ROOT_STYLING: Styling = {
  shape: StylingShape.CIRCLE,
  size: 10,
  fillColor: '#ff0000',
  borderEnabled: true,
  borderColor: '#000000',
  borderWidth: 2
}

const OTHER_NOTES_STYLING: Styling = {
  shape: StylingShape.CIRCLE,
  size: 10,
  fillColor: '#ffffff',
  borderEnabled: true,
  borderColor: '#000000',
  borderWidth: 2
}


const DEFAULT_PROJECT: Project = {
  id: '1',
  name: 'New Project',
  author: '',
  config: {
    stringCount: 6,
    fretCount: 22,
    fretMarkersStyle: FretMarkerStyle.SQUARE
  } as ProjectConfig,
  graphs: [] as Graph[],
  defaultStyling: {
    root: ROOT_STYLING,
    flatSecond: OTHER_NOTES_STYLING,
    second: OTHER_NOTES_STYLING,
    minorThird: OTHER_NOTES_STYLING,
    majorThird: OTHER_NOTES_STYLING,
    fourth: OTHER_NOTES_STYLING,
    flatFifth: OTHER_NOTES_STYLING,
    fifth: OTHER_NOTES_STYLING,
    minorSixth: OTHER_NOTES_STYLING,
    majorSixth: OTHER_NOTES_STYLING,
    minorSeventh: OTHER_NOTES_STYLING,
    majorSeventh: OTHER_NOTES_STYLING
  } as StylingCollection
} as Project


const App = () => {
  const [project, setProject] = useState(DEFAULT_PROJECT);

  const increaseFretCount = () => {
    const newProject: Project = { ...project };
    newProject.config.fretCount++;
    setProject(newProject);
  }

  return (
    <>
      <div id={'left-frame'}>

      </div>
      <div id={'right-frame'}>
        <Toolbar
          fretCount={project.config.fretCount}
          stringCount={project.config.stringCount}
          handleDecreaseFretCount={() => { }}
          handleDecreaseStringCount={() => { }}
          handleIncreaseFretCount={increaseFretCount}
          handleIncreaseStringCount={() => { }}
        ></Toolbar>
        <div id={'main-frame'}>
          <Fretboard stringCount={project.config.stringCount} fretCount={project.config.fretCount}></Fretboard>
          <div id={'properties-panel'}>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
