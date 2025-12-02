
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';


const PieChart = ({ correct, wrong }) => {
  const total = correct + wrong;
  const correctAngle = (correct / total) * 360;
  const wrongAngle = (wrong / total) * 360;
  return (
    <svg width="180" height="180" viewBox="0 0 36 36" style={{ display: 'block', margin: '0 auto 1rem' }}>
      <circle cx="18" cy="18" r="16" fill="#e5e7eb" />
      <path
        d={`M18 2
          A 16 16 0 ${correctAngle > 180 ? 1 : 0} 1 ${18 + 16 * Math.sin((correctAngle * Math.PI) / 180)} ${18 - 16 * Math.cos((correctAngle * Math.PI) / 180)}
          L 18 18
          Z`}
        fill="#34d399"
      />
      <path
        d={`M18 2
          A 16 16 0 ${wrongAngle > 180 ? 1 : 0} 1 ${18 + 16 * Math.sin(((correctAngle + wrongAngle) * Math.PI) / 180)} ${18 - 16 * Math.cos(((correctAngle + wrongAngle) * Math.PI) / 180)}
          L 18 18
          Z`}
        fill="#f87171"
      />
    </svg>
  );
};


const ScoreCard = ({ name, correct, wrong, total, onRestart }) => (
  <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #f472b6 100%)' }}>
    <Container maxWidth="sm">
      <Box sx={{ background: 'linear-gradient(135deg, #fff 0%, #ede9fe 50%, #fce7f3 100%)', borderRadius: 4, boxShadow: 6, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight={700} color="#4338ca" gutterBottom align="center" sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
          Quiz Completed!
        </Typography>
        <Typography variant="body1" color="#7c3aed" align="center" sx={{ mb: 2 }}>
          Well done, <span style={{ fontWeight: 600, color: '#f472b6' }}>{name}</span>!
        </Typography>
        <PieChart correct={correct} wrong={wrong} />
        <Typography align="center" sx={{ mb: 2, fontSize: '1.1rem' }}>
          <span style={{ color: '#22c55e', fontWeight: 600 }}>Correct: {correct}</span> /{' '}
          <span style={{ color: '#dc2626', fontWeight: 600 }}>Wrong: {wrong}</span> /{' '}
          <span style={{ color: '#6366f1', fontWeight: 600 }}>Total: {total}</span>
        </Typography>
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
            '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg, #a78bfa 0%, #f472b6 100%)' }
          }}
          onClick={onRestart}
        >
          Restart Quiz
        </Button>
      </Box>
    </Container>
  </Box>
);

export default ScoreCard;
