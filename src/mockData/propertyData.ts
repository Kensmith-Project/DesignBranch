import { Bathrooms, Bedrooms, Property, PropertyStatus, PropertyType } from "../types/property";
import { User } from "../types/user";


const propertyUser: User = {
    id: "123R",
    firstName: "Rosalina",
    lastName: "William",
}
const propertyData: Property ={
    id: 0,
    title: "New Apartment Nice View",
    description: `Massa tempor nec feugiat nisl pretium. 
    Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. 
    Neque volutpat ac tincidunt vitae semper quis lectus. 
    Turpis in eu mi bibendum neque egestas congue quisque. 
    Sed elementum tempus egestas sed sed risus pretium quam. 
    Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee iaculis at erat pellentesque. 
    Id interdum velit laoreet id donec ultrices tincidunt.

    To the left is the modern kitchen with central island, 
    leading through to the unique breakfast family room which f
    eature glass walls and doors out onto the garden and access to the separate utility room.`,

    price: 640000,
    status: PropertyStatus.Rent,
    type: PropertyType.General,
    size: 3450,
    address: "3, Belmont Gardens",
    state: "Lagos",
    city: "Lekki Phase I",
    neighbourhood: "Lekki Phase I",
    user: propertyUser,
    userId: "123EFT",
    bathrooms: Bathrooms.Three,
    bedrooms: Bedrooms.Three,
    availability: true,
    amenities:[
        { id: 0, number: 1, amenity: 'Equipped Kitchen'},
        { id: 1, number: 1, amenity: 'Pool'}, { id: 2, number: 1, amenity: 'Laundry'},
        { id: 3, number: 1, amenity: 'Electricity'}, { id: 4, number: 1, amenity: 'Gym'},
    ]
}

export default propertyData;