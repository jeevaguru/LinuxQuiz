
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';


const QuestionCard = ({ question, options, selected, onSelect, showAnswer, correctAnswer }) => {
  return (
    <Box sx={{ borderRadius: 4, boxShadow: 6, p: 4, width: '100%', maxWidth: 600, mx: 'auto', mt: 4, background: 'linear-gradient(135deg, #fff 0%, #ede9fe 50%, #fce7f3 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" fontWeight={700} color="#4338ca" align="center" gutterBottom sx={{ textShadow: '0 2px 4px rgba(0,0,0,0.08)', mb: 2 }}>
        {question}
      </Typography>
      <Stack spacing={2} sx={{ width: '100%', mb: 3 }}>
        {options.map((opt, idx) => {
          let style = {
            width: '100%',
            fontWeight: 600,
            fontSize: '1.1rem',
            borderRadius: 2,
            py: 1.5,
            boxShadow: 2,
            transition: 'transform 0.2s',
            border: '2px solid #ddd',
            background: '#fff',
            color: '#312e81',
            opacity: selected ? 0.8 : 1,
            textTransform: 'none',
          };
          if (selected === opt) {
            style.background = 'linear-gradient(90deg, #f472b6 0%, #a78bfa 50%, #6366f1 100%)';
            style.color = '#fff';
            style.border = '2px solid #6366f1';
            style.transform = 'scale(1.05)';
          }
          if (showAnswer && opt === correctAnswer) {
            style.boxShadow = '0 0 0 3px #34d399'; // green ring
          }
          if (showAnswer && selected === opt && selected !== correctAnswer) {
            style.boxShadow = '0 0 0 3px #f87171'; // red ring
          }
          return (
            <Button
              key={opt}
              variant="contained"
              disabled={!!selected}
              onClick={() => onSelect(opt)}
              sx={style}
            >
              {opt.toLowerCase()}
            </Button>
          );
        })}
      </Stack>
      {showAnswer && selected !== correctAnswer && (
        <Typography color="#dc2626" fontWeight={600} align="center" sx={{ mb: 2 }}>
          Correct answer: <span style={{ color: '#22c55e' }}>{correctAnswer}</span>
        </Typography>
      )}
    </Box>
  );
};

export default QuestionCard;
