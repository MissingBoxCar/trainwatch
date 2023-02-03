import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { Card, CardHeader, Chip, Stack } from '@mui/material';
import * as React from 'react';

interface TrainDataProps {
  processedData: {
    scannerName: string;
    trainSymbol: string;
    trainSpeedMph: number;
    totalAxles: number;
    totalLoads: number;
    totalEmpties: number;
    totalTons: string;
    trainLengthFt: string;
  };
}

export default function TrainData({ processedData }: TrainDataProps) {
  return (
    <Card>
      <CardHeader
        title={`Scanner: ${processedData.scannerName}`}
        subheader={`Train Symbol: ${processedData.trainSymbol}`}
        avatar={<TrainOutlinedIcon style={{ color: 'white' }} />}
      />
      <Stack
        direction='row'
        spacing={1}
        sx={{ paddingLeft: '1rem', paddingBottom: '1rem' }}
      >
        {/* TODO toolchip*/}
        <Chip
          label={`Speed: ${processedData.trainSpeedMph}mph`}
          avatar={<SpeedOutlinedIcon />}
        />
        <Chip
          label={`Axles: ${processedData.totalAxles}`}
          avatar={<CandlestickChartOutlinedIcon />}
        />
        <Chip
          label={`Loads: ${processedData.totalLoads}`}
          avatar={<WidgetsIcon />}
        />
        <Chip
          label={`Empties: ${processedData.totalEmpties}`}
          avatar={<WidgetsOutlinedIcon />}
        />
        <Chip
          label={`Tons: ${processedData.totalTons} tns`}
          avatar={<ScaleOutlinedIcon />}
        />
        <Chip
          label={`Length: ${processedData.trainLengthFt} ft`}
          avatar={<StraightenOutlinedIcon />}
        />
      </Stack>
    </Card>
  );
}
