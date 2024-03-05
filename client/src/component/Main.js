import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, Container, CircularProgress, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    imageUrl: 'https://styletattoo.ru/image/data/glavnoe-foto-730x598.jpg',
    price: 80000,
    duration: 3,
  },
  {
    id: 2,
    imageUrl: 'https://empiretattoo.ru/upload/iblock/314/31429292792a7a926f810d76c394ff64.jpg',
    price: 150000,
    duration: 1,
  },
  {
    id: 3,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxJ_0_XeIZxZRfNqrNhy1ZxVe2pVn_nejfA&usqp=CAU',
    price: 150000,
    duration: 1,
  },
  {
    id: 4,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpAAJDbrVOPxSIc9gJIn5UDlMEPySGHDGSA&usqp=CAU',
    price: 75000,
    duration: 8
  },
  {
    id: 5,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwz3_7Lr-LCxZRa_DhmCV8I5z-PAArLllghAysB4C_AwiLMlY6qbZMKrDJ1IdU0BoFj7Q&usqp=CAU',
    price: 90000,
    duration: 5,
  },
  {
    id: 6,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcl47Klpiw7r8C1Y9oDsqPkLDG3aHuGdulifPtDTC4GzhfcEWi4ydnkwcQ-SPo8KqVliw&usqp=CAU',
    price: 40000,
    duration: 1,
  },
  {
    id: 7,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=929165a1471da83d4c4556891fcf1baa9eb5906b-8975527-images-thumbs&n=13',
    price: 250000,
    duration: 5,
  }
  // Add more products here
];


const ProductCard = ({ id, imageUrl, price, duration }) => (
  <Card sx={{ width: 300, height: '100%' }}>
    <CardMedia component="img" height="270" image={imageUrl} alt="Product" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {price}Т
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Время: {duration} сеансов
      </Typography>
      <Button variant="contained" component={Link} to={`/tattoo/${id}`}>Подробнее</Button>
    </CardContent>
  </Card>
);

const ProductList = ({ products }) => (
  <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', marginBottom: '20px' }}>
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </Container>
);

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleClick = () => {
    setLoading(true);

    // Здесь можно добавить любую асинхронную операцию, например, загрузку данных

    // После завершения операции возвратить loading в false
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSearchBySessions = () => {
    const filtered = products.filter((product) => {
      if (sessions) {
        return product.duration === parseInt(sessions);
      }
      return true;
    });
    setFilteredProducts(filtered);
  };

  const sortByPriceAscending = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  const sortByPriceDescending = () => {
    const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilteredProducts(sorted);
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', marginTop: '10px'}}>
        <TextField
          label="Количество сеансов"
          type="number"
          value={sessions}
          onChange={(e) => setSessions(e.target.value)}
          variant="outlined"
          style={{ marginRight: '10px', width: 'auto' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearchBySessions}
        >
          Поиск
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={sortByPriceAscending}
          style={{ marginRight: '10px' }}
        >
          Сортировать по цене (возрастание)
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={sortByPriceDescending}
        >
          Сортировать по цене (убывание)
        </Button>
      </Box>
      <ProductList products={filteredProducts} />
      <Button
        variant="contained"
        color="primary"
        className="further"
        style={{ margin: '20px auto', textAlign: 'center', display: 'block', marginBottom: '50px' }}
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Далее'}
      </Button>
    </Container>
  );
};

export default Main;
