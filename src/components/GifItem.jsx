
import GifType from '../GifType'

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import ClipboardCopy from './ClipboardCopy';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: 400,
  color: '#fff',
  bgcolor: '#121212',
  border: '2px solid #121212',
  boxShadow: 24,
  p: 4,
  padding: 0,
  outline: 'none',
  textAlign: 'center',
};

GifItem.propTypes = {
    GifType,
}

export default function GifItem({gif}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="gif-item">
        <div className="gif" key={gif._id} onClick={handleOpen}>
          <img src={gif.url} alt={gif.tags} title={gif.tags}></img>
        </div>

      <Modal className="gif-modal"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
          <img src={gif.url} alt={gif.tags} title={gif.tags}></img>
            </Typography>
            <Typography id="transition-modal-description" sx={{ m: 2, }}>
            {gif.tags}
            </Typography>
            <ClipboardCopy copyText={gif.url} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}



