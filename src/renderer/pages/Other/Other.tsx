import Button from '@mui/material/Button';
import { Box, Paper, styled, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GamesIcon from '@mui/icons-material/Games';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import useInactivityRedirect from '../../components/Scripts/useInactivityRedirect';

const { version } = require('../../../../release/app/package.json');
const CustomButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: 'white',
  boxShadow:
    '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
  margin: '10px',
  color: 'black',
  width: '100%',
  fontSize: '18px',
}));

function Other() {
  useInactivityRedirect();
  const navigate = useNavigate();
  return (
    <Box className="absolute-center">
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 500 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0, y: -500 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <Paper
          elevation={5}
          sx={{
            width: 'fit-content',
            height: 'fit-content',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              margin: '15px',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CustomButton
              startIcon={<ArticleIcon />}
              onClick={() => navigate('/teachers-list')}
            >
              Список преподавателей
            </CustomButton>
            <CustomButton
              startIcon={<GamesIcon />}
              onClick={() => navigate('/tic-tac-toe')}
            >
              Крестики-нолики
            </CustomButton>
            <CustomButton
              startIcon={<ErrorOutlineIcon />}
              onClick={() => navigate('/feedback')}
            >
              Обратная связь
            </CustomButton>
            <CustomButton
              startIcon={<ExitToAppIcon />}
              onClick={() => navigate('/codes')}
            >
              Коды
            </CustomButton>
            <Typography sx={{
              textAlign: 'right',
              width: '100%'
            }}>
              v{version}
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default Other;
