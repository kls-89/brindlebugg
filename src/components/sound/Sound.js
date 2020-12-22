import React from 'react';
import useSound from 'use-sound';
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
const Sound = ({ filename, title, soundId, description }) => {

  const [play, { isPlaying, stop }] = useSound(filename, {
    sprite: {
      angryBugg: [0, 4200],
      crunchyChips: [76000, 12000],
      detectiveBugg: [34000, 6900],
      doorBugg: [6200, 5500],
      helicopterEars: [63800, 1700],
      hungryBugg: [89000, 19000],
      nappingBugg: [110000, 7000],
      runningBugg: [40000, 7000],
      sneezingBugg: [54000, 8000],
      sniffingBugg: [4200, 2000],
      sleepingBugg: [11650, 13900],
      tippyTaps: [69000, 5000],
      thirstyBugg: [28000, 7000],
      woeIsBugg: [47000, 7000],
      "_sprite": [0, 0]
    }
  });

  return (
    <Card style={{ backgroundColor: "#eff" }} variant="outlined">
      <CardContent>
        <Typography variant="body1">
          {isPlaying ? description : title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" fullWidth variant="outlined" onClick={() => play({ id: soundId })}>▶️</Button>
        <Button variant="outlined" fullWidth onClick={() => stop()}>🔕</Button>
      </CardActions>
    </Card>

  );
};

export default Sound;