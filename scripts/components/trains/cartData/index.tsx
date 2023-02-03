import { Card, Chip, Stack } from '@mui/material';
import * as React from 'react';

interface CartDataProps {
  cartInfo: any[];
}

export default function CartData({ cartInfo }: CartDataProps) {
  // TODO filtering to whats broken?
  return (
    <>
      {cartInfo.map((cart, index) => (
        <Card>
          <Stack direction='row' spacing={1}>
            <Chip label={`Direction: ${cart.direction}`} />
            <Chip label={`Sequence: ${index}`} />
          </Stack>
        </Card>
      ))}
    </>
  );
}
