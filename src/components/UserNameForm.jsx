
import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Stack } from '@mui/material';


const UserNameForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #f472b6 100%)' }}>
      <Container maxWidth="sm">
        <Box sx={{ background: 'linear-gradient(135deg, #fff 0%, #ede9fe 50%, #fce7f3 100%)', borderRadius: 4, boxShadow: 6, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" fontWeight={700} color="#4338ca" gutterBottom align="center" sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
            Welcome to the Linux Quiz!
          </Typography>
          <Typography variant="body1" color="#7c3aed" align="center" sx={{ mb: 2 }}>
            Please enter your name to begin:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            sx={{ mb: 3, textAlign: 'center', background: '#fff', borderRadius: 2 }}
            inputProps={{ style: { textAlign: 'center', fontSize: '1.2rem' } }}
          />
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(90deg, #f472b6 0%, #a78bfa 50%, #6366f1 100%)',
              color: '#fff',
              fontWeight: 700,
              boxShadow: 3,
              borderRadius: 2,
              py: 1.5,
              fontSize: '1.1rem',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg, #a78bfa 0%, #f472b6 100%)' },
              opacity: name.trim() ? 1 : 0.6
            }}
            disabled={!name.trim()}
            onClick={() => onSubmit(name.trim())}
          >
            Start Quiz
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default UserNameForm;
