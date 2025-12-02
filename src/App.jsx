
import { useState } from 'react';
import UserNameForm from './components/UserNameForm.jsx';
import QuestionCard from './components/QuestionCard.jsx';
import ScoreCard from './components/ScoreCard.jsx';
import { quizTopics } from './data/questions.js';
import { Box, Container, Typography, Button } from '@mui/material';

function getRandomQuestions(topics, countPerTopic = 5) {
  let allQuestions = [];
  topics.forEach(topic => {
    const shuffled = [...topic.questions].sort(() => Math.random() - 0.5);
    allQuestions = allQuestions.concat(
      shuffled.slice(0, countPerTopic).map(q => ({ ...q, topic: topic.topic }))
    );
  });
  return allQuestions.sort(() => Math.random() - 0.5);
}

function App() {
  const [userName, setUserName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizDone, setQuizDone] = useState(false);

  const startQuiz = name => {
    setUserName(name);
    setQuestions(getRandomQuestions(quizTopics));
    setCurrent(0);
    setAnswers([]);
    setShowAnswer(false);
    setQuizDone(false);
  };

  const handleAnswer = opt => {
    setAnswers([...answers, opt]);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setQuizDone(true);
    }
  };

  const restartQuiz = () => {
    setUserName('');
    setQuestions([]);
    setCurrent(0);
    setAnswers([]);
    setShowAnswer(false);
    setQuizDone(false);
  };

  if (!userName) {
    return <UserNameForm onSubmit={startQuiz} />;
  }

  if (quizDone) {
    const correct = questions.filter((q, i) => q.answer === answers[i]).length;
    const wrong = questions.length - correct;
    return (
      <ScoreCard
        name={userName}
        correct={correct}
        wrong={wrong}
        total={questions.length}
        onRestart={restartQuiz}
      />
    );
  }

  const q = questions[current];
  const selected = answers[current];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #f472b6 100%)' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography fontWeight={700} align="center" sx={{ mb: 2, fontSize: '1.2rem', color: '#4338ca', textShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
            Question {current + 1} of {questions.length}
            <span style={{ display: 'block', fontSize: '1rem', color: '#fff176', textShadow: '0 1px 2px #4338ca' }}>({q.topic})</span>
          </Typography>
          <QuestionCard
            question={q.question}
            options={q.options}
            selected={selected}
            onSelect={handleAnswer}
            showAnswer={showAnswer}
            correctAnswer={q.answer}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, width: '100%' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: '50%',
                background: 'linear-gradient(90deg, #f472b6 0%, #a78bfa 50%, #6366f1 100%)',
                color: '#fff',
                fontWeight: 700,
                boxShadow: 3,
                borderRadius: 2,
                py: 1.5,
                fontSize: '1.1rem',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)', background: 'linear-gradient(90deg, #a78bfa 0%, #f472b6 100%)' },
                opacity: showAnswer ? 1 : 0.6
              }}
              disabled={!showAnswer}
              onClick={nextQuestion}
            >
              {current + 1 === questions.length ? 'Finish Quiz' : 'Next'}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
