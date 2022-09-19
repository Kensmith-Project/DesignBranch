import {
  Amenity,
  Bathrooms,
  Bedrooms,
  Property,
  PropertyStatus,
  PropertyType,
} from '../types/property';
import {User} from '../types/user';

const propertyUser: User = {
  id: '123R',
  firstName: 'Joshua',
  lastName: 'Babatunde',
};

const allData: Property[] = [
  {
    id: 0,
    title: 'New Apartment Nice View',
    description: `To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.`,

    price: 640000,
    status: PropertyStatus.Rent,
    type: PropertyType.General,
    size: 3450,
    address: '3, Belmont Gardens',
    state: 'Lagos',
    city: 'Lekki Phase I',
    neighbourhood: 'Lekki Phase I',
    user: propertyUser,
    userId: '123EFT',
    bathrooms: Bathrooms.Three,
    bedrooms: Bedrooms.Three,
    availability: true,
    amenities: [
      {id: 0, number: 1, amenity: Amenity.EquippedKitchen},
      {id: 1, number: 1, amenity: Amenity.Pool},
      {id: 2, number: 1, amenity: Amenity.Laundry},
      {id: 3, number: 1, amenity: Amenity.Electricity},
      {id: 4, number: 1, amenity: Amenity.Gym},
    ],
  },

  {
    id: 0,
    title: 'New Apartment Nice View',
    description: `To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.`,

    price: 640000,
    status: PropertyStatus.Rent,
    type: PropertyType.General,
    size: 3450,
    address: '3, Belmont Gardens',
    state: 'Lagos',
    city: 'Lekki Phase I',
    neighbourhood: 'Lekki Phase I',
    user: propertyUser,
    userId: '123EFT',
    bathrooms: Bathrooms.Three,
    bedrooms: Bedrooms.Three,
    availability: true,
    amenities: [
      {id: 0, number: 1, amenity: Amenity.EquippedKitchen},
      {id: 1, number: 1, amenity: Amenity.Pool},
      {id: 2, number: 1, amenity: Amenity.Laundry},
      {id: 3, number: 1, amenity: Amenity.Electricity},
      {id: 4, number: 1, amenity: Amenity.Gym},
    ],
  },

  {
    id: 0,
    title: 'New Apartment Nice View',
    description: `To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.`,

    price: 640000,
    status: PropertyStatus.Rent,
    type: PropertyType.General,
    size: 3450,
    address: '3, Belmont Gardens',
    state: 'Lagos',
    city: 'Lekki Phase I',
    neighbourhood: 'Lekki Phase I',
    user: propertyUser,
    userId: '123EFT',
    bathrooms: Bathrooms.Three,
    bedrooms: Bedrooms.Three,
    availability: true,
    amenities: [
      {id: 0, number: 1, amenity: Amenity.EquippedKitchen},
      {id: 1, number: 1, amenity: Amenity.Pool},
      {id: 2, number: 1, amenity: Amenity.Laundry},
      {id: 3, number: 1, amenity: Amenity.Electricity},
      {id: 4, number: 1, amenity: Amenity.Gym},
    ],
  },

  {
    id: 0,
    title: 'New Apartment Nice View',
    description: `To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.`,

    price: 640000,
    status: PropertyStatus.Rent,
    type: PropertyType.General,
    size: 3450,
    address: '3, Belmont Gardens',
    state: 'Lagos',
    city: 'Lekki Phase I',
    neighbourhood: 'Lekki Phase I',
    user: propertyUser,
    userId: '123EFT',
    bathrooms: Bathrooms.Three,
    bedrooms: Bedrooms.Three,
    availability: true,
    amenities: [
      {id: 0, number: 1, amenity: Amenity.EquippedKitchen},
      {id: 1, number: 1, amenity: Amenity.Pool},
      {id: 2, number: 1, amenity: Amenity.Laundry},
      {id: 3, number: 1, amenity: Amenity.Electricity},
      {id: 4, number: 1, amenity: Amenity.Gym},
    ],
  },
];
const propertyData: Property = {
  id: 0,
  title: 'New Apartment Nice View',
  description: `To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.`,

  price: 640000,
  status: PropertyStatus.Rent,
  type: PropertyType.General,
  size: 3450,
  address: '3, Belmont Gardens',
  state: 'Lagos',
  city: 'Lekki Phase I',
  neighbourhood: 'Lekki Phase I',
  user: propertyUser,
  userId: '123EFT',
  bathrooms: Bathrooms.Three,
  bedrooms: Bedrooms.Three,
  availability: true,
  amenities: [
    {id: 0, number: 1, amenity: Amenity.EquippedKitchen},
    {id: 1, number: 1, amenity: Amenity.Pool},
    {id: 2, number: 1, amenity: Amenity.Laundry},
    {id: 3, number: 1, amenity: Amenity.Electricity},
    {id: 4, number: 1, amenity: Amenity.Gym},
  ],
};

export default propertyData;
