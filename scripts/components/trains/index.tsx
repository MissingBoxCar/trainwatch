import Container from '@mui/material/Container/Container';
import * as React from 'react';

import CartData from './cartData';
import data from './data.js';
import mapper from './mapper';
import TrainData from './trainData';

export default function Trains() {
  const { trainInfo, cartInfo } = mapper(data);
  return (
    <Container>
      <TrainData processedData={trainInfo} />
      <CartData cartInfo={cartInfo} />
    </Container>
  );
}
