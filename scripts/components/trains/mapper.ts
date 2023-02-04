export interface Car {
  direction: string;
  roadName: string;
  unitNumber: string;
  isLoaded: boolean;
  weight: number;
  destination: string;
  defect: string;
  fileName: string;
}

export default function mapper(rawTrain: unknown) {
  const trainInfo = {
    scannerName: rawTrain[0],
    trainSymbol: rawTrain[1],
    trainSpeedMph: rawTrain[2],
    totalAxles: rawTrain[3],
    totalLoads: rawTrain[4],
    totalEmpties: rawTrain[5],
    totalTons: Intl.NumberFormat('en-US').format(rawTrain[6]),
    trainLengthFt: Intl.NumberFormat('en-US').format(rawTrain[7]),
  };
  const carInfo: Car[] = rawTrain[8].map((car: unknown) => ({
    direction: car[0],
    roadName: car[2],
    unitNumber: car[3],
    isLoaded: car[4] === 'true',
    weight: Intl.NumberFormat('en-US').format(car[5]),
    destination: car[6],
    defect: car[7],
    fileName: car[8],
  }));
  return { trainInfo, cartInfo: carInfo };
}
