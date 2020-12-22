import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        About
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h1></h1>
          <Typography align="center" variant="h3">🎤 🐽 🧑🏻‍💻</Typography>
          <Typography align="center" variant="subtitle1">12/25/2020</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Merry Christmas, Giuls!
          </Typography>
          <Typography gutterBottom>
            I've been wanting to capture some of the most distinct and heartwarming sounds of our sweet brindle bugg, and this year, Kaya offered to get in the studio to make it happen!
          </Typography>
          <Typography gutterBottom>
            The <strong>Brindle Bugg Soundboard</strong> is a collection 14 of Kaya's greatest hits including: "LET ME OUT, " "Helicopter Ears," "Havin' Chips," and more!
          </Typography>
          <Typography gutterBottom>
            These are pure Kaya sounds recorded periodically over the past few months (<em>no songs due to an ongoing copyright dispute with SadieCouture™️</em>).
          </Typography>
          <Typography align="center" gutterBottom>
            Merry Christmas! We both love you very much!
          </Typography>
          <Typography align="right" gutterBottom>
            Love,
          </Typography>
          <Typography align="right" gutterBottom>
            Keenan & Kaya 🐾
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained"  fullWidth color="primary" autoFocus onClick={handleClose}>
          🐽 Close 🐽
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}