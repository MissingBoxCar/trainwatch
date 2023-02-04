import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { Avatar, CardContent, CardHeader, Chip } from '@mui/material';
import * as React from 'react';

import { Car } from '../mapper';

interface CartDataProps {
  cartInfo: Car[];
}

export default function CartData({ cartInfo }: CartDataProps) {
  // TODO filtering to whats broken?
  return (
    <>
      {cartInfo.map((cart, index) => (
        <>
          <CardHeader
            avatar={<Avatar sx={{ color: 'white' }}>{index + 1}</Avatar>}
            subheader='Car'
          />
          <CardContent
            sx={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              paddingTop: '1rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}
          >
            <Chip
              label={`Direction: ${cart.direction}`}
              avatar={<MultipleStopOutlinedIcon sx={{ rotate: '90deg' }} />}
            />
            <Chip
              label={`Road Name: ${cart.roadName}`}
              avatar={<CorporateFareOutlinedIcon />}
            />
            <Chip
              label={`Unit Number: ${cart.unitNumber}`}
              avatar={<BadgeOutlinedIcon />}
            />
            <Chip
              label={`Loaded: ${cart.isLoaded}`}
              avatar={cart.isLoaded ? <WidgetsIcon /> : <WidgetsOutlinedIcon />}
            />
            <Chip
              label={`Weight: ${cart.weight} tns`}
              avatar={<ScaleOutlinedIcon />}
            />
            <Chip
              label={`Destination: ${cart.destination}`}
              avatar={<LocationOnOutlinedIcon />}
            />
            <Chip
              label={`Defect: ${cart.defect}`}
              avatar={<DangerousOutlinedIcon />}
            />
            <Chip
              label={`File Name: ${cart.fileName}`}
              avatar={<SearchOutlinedIcon />}
            />
          </CardContent>
        </>
      ))}
    </>
  );
}
