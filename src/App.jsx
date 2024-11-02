import React from 'react'
import { useState } from 'react'
import Homepage from './pages/homepage'
import Emotions from './pages/emotions'
import Anger from './pages/anger'
import Handpan from './components/handpan'
import Anxious from './pages/anxious'
import Sadness from './pages/sadness'
import Ennui from './pages/ennui'
import Flute from './components/flute'
import Harp from './components/harp'
import Sitar from './components/sitar'
import Xylophone from './components/xylophone'
import Piano from './components/piano'
import Cello from './components/cello'
import Acoustic from './components/acoustic'
import Violin from './components/violin'
import Guitar from './components/guitar'
import EGuitar from './components/eGuitar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* EMOTIONS PAGE */}
            <Route path="/" element={<Homepage/>} />
            <Route path="/emotions" element={<Emotions/>} />
            <Route path="/anger" element={<Anger/>} />
            <Route path="/anxious" element={<Anxious/>} />
            <Route path="/sadness" element={<Sadness/>} />
            <Route path="/ennui" element={<Ennui/>} />

            {/* INSTRUMENTS PAGE*/}
            <Route path="/handpan" element={<Handpan/>} />
            <Route path="/flute" element={<Flute/>} />
            <Route path="/harp" element={<Harp/>} />
            <Route path="/sitar" element={<Sitar/>} />
            <Route path="/xylophone" element={<Xylophone/>} />
            <Route path="/piano" element={<Piano/>} />
            <Route path="/cello" element={<Cello/>} />
            <Route path="/acoustic" element={<Acoustic/>} />
            <Route path="/violin" element={<Violin/>} />
            <Route path="/eGuitar" element={<EGuitar/>} />
            <Route path="/guitar" element={<Guitar/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
