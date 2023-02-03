interface Cart {
  direction: string;
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
  const cartInfo: Cart[] = rawTrain[8].map((cart: unknown) => ({
    direction: cart[0],
  }));
  return { trainInfo, cartInfo };
}
