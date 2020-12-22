import './App.css';
import Soundboard from './components/soundboard/Soundboard';
import AboutDialog from "./components/AboutDialog";
import { Grid, Typography } from "@material-ui/core";

function App() {
  return (
    <Grid
      container
      justify="space-around"
      spacing={2}
    >

      <Grid align="center" item xs={12}>
        <Typography style={{ color: "white" }} variant="h3">
          Brindle Bugg Soundboard
        </Typography>
      </Grid>
      <Grid align="center" item xs={12}>
        <AboutDialog />
      </Grid>
      <Grid align="center" item xs={12}>
        <Soundboard />
      </Grid>
    </Grid>
  );
}

export default App;
