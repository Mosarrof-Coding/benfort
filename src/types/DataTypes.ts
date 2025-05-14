import { StaticImageData } from "next/image";

export interface propertyItem {
  id: string;
  agent: string;
  image: StaticImageData;
  thumbImage: StaticImageData[];
  agentImg: StaticImageData;
  title: string;
  details: string;
  description: string;
  roomType: string[];
  locate: string;
  roomCount: string;
  bedCount: string;
  bathCount: string;
  squareFit: string;
  price: number;
  address: Address;
  propertyDetails: PropertyDetails;
}
interface Address {
  Address: string;
  city: string;
  zip: string;
  area: string;
  State: string;
  country: string;
}
interface PropertyDetails {
  PropertyId: number;
  priceInfo: number;
  lotSize: number;
  bedRooms: number;
  garages: string;
  garageSize: number;
  structure: string;
  price: number;
  propertySize: number;
  rooms: number;
  bathrooms: number;
  year: number;
  form: string; // It's a date string ("2024 - 07 - 26"), if you want to make it a Date type, you can parse it
  floores: number;
}
