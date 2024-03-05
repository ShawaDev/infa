// TattooDetails.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Modal, Backdrop, Fade, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';




const tattooData = [
  {
    id: 1,
    imageUrl: 'https://styletattoo.ru/image/data/glavnoe-foto-730x598.jpg',
    price: 80000,
    duration: 3,
    description: 'Татуировки на кистях часто могут стать не четкими и татуировка может не прижиться. Трудны в заживлении и также могут возникнуть проблемы при заживлении'
  },
  {
    id: 2,
    imageUrl: 'https://empiretattoo.ru/upload/iblock/314/31429292792a7a926f810d76c394ff64.jpg',
    price: 150000,
    duration: 1,
    description: 'Татуировки на кистях часто могут стать не четкими и татуировка может не прижиться. Трудны в заживлении и также могут возникнуть проблемы при заживлении'
  },
  {
    id: 3,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxJ_0_XeIZxZRfNqrNhy1ZxVe2pVn_nejfA&usqp=CAU',
    price: 150000,
    duration: 1,
    description: 'Татуировки на кистях часто могут стать не четкими и татуировка может не прижиться. Трудны в заживлении и также могут возникнуть проблемы при заживлении'
  },
  {
    id: 4,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpAAJDbrVOPxSIc9gJIn5UDlMEPySGHDGSA&usqp=CAU',
    price: 75000,
    duration: 8,
    description: 'более подходящий вариант для первой татуировки'
  },
  {
    id: 5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwz3_7Lr-LCxZRa_DhmCV8I5z-PAArLllghAysB4C_AwiLMlY6qbZMKrDJ1IdU0BoFj7Q&usqp=CAU',
    price: 90000,
    duration: 5,
    description: 'Татуировки на кистях часто могут стать не четкими и татуировка может не прижиться. Трудны в заживлении и также могут возникнуть проблемы при заживлении'
  },
  {
    id: 6,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcl47Klpiw7r8C1Y9oDsqPkLDG3aHuGdulifPtDTC4GzhfcEWi4ydnkwcQ-SPo8KqVliw&usqp=CAU',
    price: 40000,
    duration: 1,
    description: 'Татуировки на кистях часто могут стать не четкими и татуировка может не прижиться. Трудны в заживлении и также могут возникнуть проблемы при заживлении'
  },
  {
    id: 7,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=929165a1471da83d4c4556891fcf1baa9eb5906b-8975527-images-thumbs&n=13',
    price: 250000,
    duration: 5,
    description: 'Татуировки на кистях часто могут стать не четкими и татуировка может не прижиться. Трудны в заживлении и также могут возникнуть проблемы при заживлении'
  }
];


const TattooDetails = () => {
  const { id } = useParams();
  const tattoo = tattooData.find(t => t.id === parseInt(id));

  const [openModal, setOpenModal] = useState(false);

  const handleBack = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    window.location.href = '/'; // Переход на главную страницу
  };

  if (!tattoo) {
    return <Typography variant="h6">Татуировка не найдена</Typography>;
  }

  return (
    <Container sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
        <img src={tattoo.imageUrl} alt="Tattoo" style={{ width: '100%' }} />
        <Typography variant="h5" gutterBottom>
          Цена: {tattoo.price}Т
        </Typography>
        <Typography variant="body1" gutterBottom>
          Продолжительность: {tattoo.duration} сеансов
        </Typography>
        <Typography variant='body1' gutterBottom>
          {tattoo.description}
        </Typography>
        <Button onClick={handleBack} variant="contained" color="primary">
          Назад
        </Button>
      </Box>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropProps={{
          sx: { backgroundColor: 'transparent' }, // Прозрачный фон
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              backgroundColor: '#ffffff', // Цвет фона модального окна
            }}
          >
            <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 1 }}>
              <Typography variant="h5" gutterBottom>
                Внимание
              </Typography>
              <Typography variant="body1" gutterBottom>
                Бесплатные консультации в Instagram direct с 10:00 до 23:00 ежедневно
              </Typography>
              <ListItem>
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
                <ListItemText primary="Instagram: @zabey.kz" />
              </ListItem>
              <Typography variant='body1' gutterBottom>
                Вы уверены, что хотите вернуться на главную страницу?
              </Typography>
              <Button onClick={handleClose} variant="contained" color="primary" sx={{ mr: 2 }}>
                Да
              </Button>
              <Button onClick={() => setOpenModal(false)} variant="contained" color="secondary">
                Отмена
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default TattooDetails;