// TODO:
// Fix styling
// Build production and deploy to web.


import React from 'react';
import { Grid } from "@material-ui/core";
import Sound from '../sound/Sound';
import audioTrack from "../../assets/KayaSoundboardFile.mp3";

const audioFiles = [
  { filename: audioTrack, soundId: "angryBugg", description: "Angry Bugg", title: "🐽🤬" },
  { filename: audioTrack, soundId: "woeIsBugg", description: "Woe is Bugg!", title: "🐽😩" },
  { filename: audioTrack, soundId: "detectiveBugg", description: "Brindle Bugg: PI", title: "🐽🕵🏻‍♀️" },
  { filename: audioTrack, soundId: "sniffingBugg", description: "What's That?", title: "🐽👃🏻" },
  { filename: audioTrack, soundId: "sneezingBugg", description: "Achoo!", title: "🐽💦" },
  { filename: audioTrack, soundId: "doorBugg", description: "LET ME OUT!", title: "🐽🚪" },
  { filename: audioTrack, soundId: "runningBugg", description: "Post-Poop Run", title: "🐽🏃🏻‍♀️" },
  { filename: audioTrack, soundId: "helicopterEars", description: "Helicopter Ears", title: "🐽🚁" },
  { filename: audioTrack, soundId: "tippyTaps", description: "Tip Tap!", title: "🐽🩰" },
  { filename: audioTrack, soundId: "nappingBugg", description: "Restin'", title: "🐽😴" },
  { filename: audioTrack, soundId: "sleepingBugg", description: "Dehp Sleph", title: "🐽💤" },
  { filename: audioTrack, soundId: "thirstyBugg", description: "Thirsty Bugg", title: "🐽🥤" },
  { filename: audioTrack, soundId: "crunchyChips", description: "Havin' Chips", title: "🐽🍟" },
  { filename: audioTrack, soundId: "hungryBugg", description: "Hoongry Boog", title: "🐽🥣" },

];

const Soundboard = () => {
  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      spacing="6">
      {audioFiles.map(sound => <Grid item><Sound filename={sound.filename} key={`${sound.filename}${sound.title}`} title={sound.title} description={sound.description} soundId={sound.soundId} /></Grid>
      )}
    </Grid>
  );
};

export default Soundboard;