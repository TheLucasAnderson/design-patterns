type ModalityType = "bike" | "motorcycle";

type DeliveryPerson = {
  name: string;
  rating: number;
  modality: ModalityType;
};

type DeliveryPersonFactory = {
  createDeliveryPerson(name: string, rating: number): DeliveryPerson;
};

const BikeDeliveryPerson = (): DeliveryPersonFactory => ({
  createDeliveryPerson: (name, rating) => ({
    name,
    rating,
    modality: "bike",
  }),
});

const MotorcycleDeliveryPerson = (): DeliveryPersonFactory => ({
  createDeliveryPerson: (name, rating) => ({
    name,
    rating,
    modality: "motorcycle",
  }),
});

const createDeliveryPerson = (modality) => {
  console.info("Selected modality: ", modality);

  switch (modality) {
    case "bike":
      return BikeDeliveryPerson();
    case "motorcycle":
      return MotorcycleDeliveryPerson();
    default:
      throw new Error("Invalid modality");
  }
};

createDeliveryPerson("bike").createDeliveryPerson("John Doe", 4.5); // Selected modality:  bike
createDeliveryPerson("motorcycle").createDeliveryPerson("Jane Doe", 4.8); // Selected modality:  motorcycle
