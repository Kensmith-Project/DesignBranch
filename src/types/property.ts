import { User } from "./user";

export enum Bathrooms{ 
    Zero = 0, 
    One = 1, 
    Two = 2, 
    Three = 3, 
    Four = 4, 
    Five = 5, 
    Six = 6 
}

export enum Bedrooms{ 
    Zero = 0, 
    One = 1, 
    Two = 2, 
    Three = 3, 
    Four = 4, 
    Five = 5, 
    Six = 6 
}

export enum Colors{
    Black = "#000000",
    White = "#ffffff"
}

export enum PropertyStatus{
    Rent = 'Rent',
    Sale = 'Sale',
    RentToOwn = 'Rent To Own'
}

export enum PropertyType{
    General = 'Residential (General)',
    StudentPackage = 'Residential (Student Package)',
    Commercial = 'Commercial',
    Land = 'Land'
}

export enum Duration{
    Annual, Monthly
}

export enum ParkingLot{
    Yes, No
}

export enum Amenity{
    "EquippedKitchen" = "Equipped Kitchen",
    Gym = "Gym",
    Laundry = "Laundry",
    "MediaRoom" = "Media Room",
    Backyard = "Backyard",
    Pool = "Pool",
    "Electricity" = "24hr Electricity",
    "WaterSupply" = "Water Supply",
    "AirConditioning" = "Air Conditioning",
    "WashingMachine" = "Washing Machine",
    WIFI = "WIFI",
}

export interface AmenityWithCount{
    id?: number;
    propertiesId?: number;
    amenity: Amenity;
    number: number;
}

export interface Attachment{
    id?: number;
    propertiesId?: number;
    publicId?: string;
    imageUrl: string;
}

export interface Property{
    id?: number;
    title: string;
    description: string;
    price: number;
    status: PropertyStatus;
    type: PropertyType;
    size: number;
    address: string;
    state: string;
    city: string;
    country?: string;
    neighbourhood: string;
    longitude?: number;
    latitude?: number;
    zip?: string;
    bedrooms?: Bedrooms;
    bathrooms?: Bathrooms;
    availability?: boolean;
    dateAdded?: Date;
    user: User;
    userId: string;
    rating?: number;
    parkingLot?: ParkingLot;
    duration?: Duration;
    amenities?: AmenityWithCount[];
    attachments?: Attachment[];
    isEnabled?: boolean;
}

export interface PropertyArray extends Array<Property>{}