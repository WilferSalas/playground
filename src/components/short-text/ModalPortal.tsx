// @packages
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface MordalPortalProps {
  children: ReactNode,
  onClose: () => void,
}

const Modal = ({ children, onClose }: MordalPortalProps) => (
  <Paper
    sx={{
      height: 200,
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      zIndex: 1,
    }}
  >
    <Box sx={{ textAlign: 'end' }}>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Box>
    <Box
      sx={{
        left: '50%',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {children}
    </Box>
  </Paper>
);

export default function ModalPortal({ children, onClose }) {
  return createPortal(
    <Modal onClose={onClose}>
      {children}
    </Modal>,
    document.getElementById('portal-root'),
  );
}
