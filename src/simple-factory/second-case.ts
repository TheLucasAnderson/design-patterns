enum Payment {
  CASH = "cash",
  ONLINE = "online",
  PROMO = "promo",
}

enum DeliveryType {
  BIKE = "bike",
  MOTORCYCLE = "motorcycle",
  WALKING = "walking",
}

type Order = {
  id: string;
  items: string[];
  distanceInKM: number;
  payment: Payment;
  deliveryType: DeliveryType;
};

type OrderFactory = {
  createOrder(
    items: string[],
    distanceInKM: number,
    deliveryType?: DeliveryType
  ): Order;
};

const CashOrder = (): OrderFactory => ({
  createOrder: (items, distanceInKM) => ({
    id: "123",
    items,
    distanceInKM,
    payment: Payment.CASH,
    deliveryType: DeliveryType.BIKE,
  }),
});

const OnlinePayment = (): OrderFactory => ({
  createOrder: (items, distanceInKM) => ({
    id: "312",
    items,
    distanceInKM,
    payment: Payment.CASH,
    deliveryType: distanceInKM < 2 ? DeliveryType.WALKING : DeliveryType.BIKE,
  }),
});

const PromoPayment = (): OrderFactory => ({
  createOrder: (items, distanceInKM) => ({
    id: "567",
    items: { ...items, promoItem: "chocolate" },
    distanceInKM,
    payment: Payment.PROMO,
    deliveryType:
      distanceInKM > 2 ? DeliveryType.MOTORCYCLE : DeliveryType.BIKE,
  }),
});

const createOrder = (payment: Payment): OrderFactory => {
  console.info("Selected payment: ", payment);

  switch (payment) {
    case Payment.CASH:
      return CashOrder();
    case Payment.ONLINE:
      return OnlinePayment();
    case Payment.PROMO:
      return PromoPayment();
    default:
      throw new Error("Invalid payment");
  }
};

let distance = 1;
createOrder(Payment.CASH).createOrder(["bolo"], distance); // { id: '123', items: [ 'bolo' ], distanceInKM: 1, payment: 'cash', deliveryType: 'bike' }
createOrder(Payment.ONLINE).createOrder(["cafe"], distance); // { id: '312', items: [ 'cafe' ], distanceInKM: 1, payment: 'cash', deliveryType: 'walking' }
createOrder(Payment.PROMO).createOrder(["pao"], distance); // { id: '567', items: { '0': 'pao', promoItem: 'chocolate' }, distanceInKM: 1, payment: 'promo', deliveryType: 'bike' }

distance = 5;
createOrder(Payment.ONLINE).createOrder(["pizza"], distance); // { id: '312', items: [ 'pizza' ], distanceInKM: 5, payment: 'cash', deliveryType: 'bike' }
createOrder(Payment.PROMO).createOrder(["suco"], distance); // { id: '567', items: { '0': 'suco', promoItem: 'chocolate' }, distanceInKM: 5, payment: 'promo', deliveryType: 'motorcycle' }
