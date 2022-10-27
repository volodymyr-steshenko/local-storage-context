import React, { useEffect } from 'react';
import './App.css';
import {SettingsContext} from "./SettingsContext";
import {useSettingsContext} from './hooks/useSettingsContext';
import {useLocalStorage} from './hooks/useLocalStorage';

const initialSettings = {
  volume: 10,
  currentSong: 'default.song',
  analyticsOn: true,
}

function App() {

  return (
    <div className="App">
      <SettingsContext value={initialSettings} >
        <WithContextComponent />
        <ChangeStorage/>
      </SettingsContext>
      <WithoutContextComponent />
    </div>
  );
}

const WithContextComponent = () => {
  const [volume, setVolume] = useSettingsContext('volume');
  const [currentSong] = useSettingsContext('currentSong');
  const [analiticsOn] = useSettingsContext('analiticsOn');

  useEffect(() => {
    setTimeout(() => {
      setVolume(100);
    }, 3000);
  }, [setVolume]);

  return (
      <div>
        <div>Volume: {volume}</div>
        <div>Current song: {currentSong}</div>
        <div>Analitics on: {analiticsOn ? 'true' : 'false'}</div>
      </div>
  )
}

const ChangeStorage = () => {
  const [, setVolume] = useLocalStorage('volume', 30);

  useEffect(() => {
    setTimeout(() => {
      setVolume(100);
    }, 3000);
  }, [setVolume]);

  return null;
}

// Without context
const WithoutContextComponent = () => {
  // const [volume, setVolume] = useSettingsContext('volume');

  return (
      <div>
        {/*Without context*/}
        {/*<div>Volume: {settings?.volume}</div>*/}
      </div>
  )
}

export default App;
