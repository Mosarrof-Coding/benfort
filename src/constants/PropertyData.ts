// import property1 from "@/../public/property/Property1.png";
import property2 from "@/../public/property/Property2.png";
import property3 from "@/../public/property/Property3.png";
import property4 from "@/../public/property/Property4.png";
import property5 from "@/../public/property/Property5.png";
import propertyImg1 from "@/../public/card/propertyImg1.png";
import propertyImg2 from "@/../public/card/propertyImg2.png";
import propertyImg3 from "@/../public/card/propertyImg3.png";
import propertyImg4 from "@/../public/card/propertyImg4.png";
import propertyImg5 from "@/../public/card/propertyImg5.png";
import propertyImg6 from "@/../public/card/propertyImg6.png";
import agents from "@/../public/property/agentFml.png";
import { propertyItem } from "@/types/DataTypes";

export const PropertyData: propertyItem[] = [
  {
    id: "1",
    agent: "Jessy King",
    image: propertyImg1,
    thumbImage: [property2, property3, property4, property5],
    agentImg: agents,
    title: "Luxury Loft",
    details: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, offering...`,
    description: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, 
offering picturesque views of the nearby rolling hills. Located in the tranquil heart of 
Pleasantville, it features contemporary design elements that make it truly exceptional. 
With expansive frontage on a peaceful cul-de-sac and all essential utilities in place, 
this is the ideal setting for your dream family home.

If serene living is what you're after, this property is a must-see! Located within the 
200-acre Green Valley community, managed by Heritage Developments, this area is 
renowned as the most family-friendly and well-planned suburb in Ohio. Green Valley's 
standout features include its meticulous landscaping and thoughtfully designed 
layout, evident throughout the entire community.`,
    roomType: ["Apartment", "Sales", "Joursy City"],
    locate: "Jersey City",
    roomCount: "04",
    bedCount: "1",
    bathCount: "2",
    squareFit: "600 ft",
    price: 950000,
    address: {
      Address: "Hope Bvd, no 45",
      city: "Jersey City",
      zip: "111111",
      area: "Greenville",
      State: "New Jersey State",
      country: "United States",
    },
    propertyDetails: {
      PropertyId: 546679,
      priceInfo: 2450,
      lotSize: 1000,
      bedRooms: 1,
      garages: "NIL",
      garageSize: 3,
      structure: "Apartment",
      price: 950000,
      propertySize: 560,
      rooms: 3,
      bathrooms: 2,
      year: 1988,
      form: "2024 - 07 - 26",
      floores: 1,
    },
  },
  {
    id: "2",
    image: propertyImg6,
    title: "Smart Home Duplex",
    details: `Nestled amidst serene woodlands, this luxury house gracefully sits atop a hill...`,
    roomType: ["Lease", "Offices"],
    locate: "Catskills",
    roomCount: "04",
    bedCount: "3",
    bathCount: "3",
    squareFit: "600 ft",
    price: 2000,
    agent: "Jessy King",
    thumbImage: [property2, property3, property4, property5],
    agentImg: agents,
    description: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, 
offering picturesque views of the nearby rolling hills. Located in the tranquil heart of 
Pleasantville, it features contemporary design elements that make it truly exceptional. 
With expansive frontage on a peaceful cul-de-sac and all essential utilities in place, 
this is the ideal setting for your dream family home.

If serene living is what you're after, this property is a must-see! Located within the 
200-acre Green Valley community, managed by Heritage Developments, this area is 
renowned as the most family-friendly and well-planned suburb in Ohio. Green Valley's 
standout features include its meticulous landscaping and thoughtfully designed 
layout, evident throughout the entire community.`,

    address: {
      Address: "Hope Bvd, no 45",
      city: "Jersey City",
      zip: "111111",
      area: "Greenville",
      State: "New Jersey State",
      country: "United States",
    },
    propertyDetails: {
      PropertyId: 546679,
      priceInfo: 2450,
      lotSize: 1000,
      bedRooms: 1,
      garages: "NIL",
      garageSize: 3,
      structure: "Apartment",
      price: 950000,
      propertySize: 560,
      rooms: 3,
      bathrooms: 2,
      year: 1988,
      form: "2024 - 07 - 26",
      floores: 1,
    },
  },
  {
    id: "3",
    image: propertyImg3,
    title: "Cozy Condo",
    details: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, offering...`,
    roomType: ["Rent", "Industrial"],
    locate: "Jersey City",
    roomCount: "04",
    bedCount: "1",
    bathCount: "2",
    squareFit: "600 ft",
    price: 65009,
    agent: "Jessy King",
    thumbImage: [property2, property3, property4, property5],
    agentImg: agents,
    description: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, 
offering picturesque views of the nearby rolling hills. Located in the tranquil heart of 
Pleasantville, it features contemporary design elements that make it truly exceptional. 
With expansive frontage on a peaceful cul-de-sac and all essential utilities in place, 
this is the ideal setting for your dream family home.

If serene living is what you're after, this property is a must-see! Located within the 
200-acre Green Valley community, managed by Heritage Developments, this area is 
renowned as the most family-friendly and well-planned suburb in Ohio. Green Valley's 
standout features include its meticulous landscaping and thoughtfully designed 
layout, evident throughout the entire community.`,

    address: {
      Address: "Hope Bvd, no 45",
      city: "Jersey City",
      zip: "111111",
      area: "Greenville",
      State: "New Jersey State",
      country: "United States",
    },
    propertyDetails: {
      PropertyId: 546679,
      priceInfo: 2450,
      lotSize: 1000,
      bedRooms: 1,
      garages: "NIL",
      garageSize: 3,
      structure: "Apartment",
      price: 950000,
      propertySize: 560,
      rooms: 3,
      bathrooms: 2,
      year: 1988,
      form: "2024 - 07 - 26",
      floores: 1,
    },
  },
  {
    id: "4",
    image: propertyImg4,
    title: "Suburb Home",
    details: `Located in a charming suburban neighborhood, this beautiful 
      home gracefully...`,
    roomType: ["Sales", "Duplex"],
    locate: "Pleasantville",
    roomCount: "04",
    bedCount: "3",
    bathCount: "3",
    squareFit: "600 ft",
    price: 9560098,
    agent: "Jessy King",
    thumbImage: [property2, property3, property4, property5],
    agentImg: agents,
    description: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, 
offering picturesque views of the nearby rolling hills. Located in the tranquil heart of 
Pleasantville, it features contemporary design elements that make it truly exceptional. 
With expansive frontage on a peaceful cul-de-sac and all essential utilities in place, 
this is the ideal setting for your dream family home.

If serene living is what you're after, this property is a must-see! Located within the 
200-acre Green Valley community, managed by Heritage Developments, this area is 
renowned as the most family-friendly and well-planned suburb in Ohio. Green Valley's 
standout features include its meticulous landscaping and thoughtfully designed 
layout, evident throughout the entire community.`,

    address: {
      Address: "Hope Bvd, no 45",
      city: "Jersey City",
      zip: "111111",
      area: "Greenville",
      State: "New Jersey State",
      country: "United States",
    },
    propertyDetails: {
      PropertyId: 546679,
      priceInfo: 2450,
      lotSize: 1000,
      bedRooms: 1,
      garages: "NIL",
      garageSize: 3,
      structure: "Apartment",
      price: 950000,
      propertySize: 560,
      rooms: 3,
      bathrooms: 2,
      year: 1988,
      form: "2024 - 07 - 26",
      floores: 1,
    },
  },
  {
    id: "5",
    image: propertyImg5,
    title: "Smart Home Duplex",
    details: `Situated in a bustling urban neighborhood, this smart home duplex elegantly...`,
    roomType: ["Rent", "Industrial"],
    locate: "Catskills",
    roomCount: "04",
    bedCount: "3",
    bathCount: "3",
    squareFit: "600 ft",
    price: 12000,
    agent: "Jessy King",
    thumbImage: [property2, property3, property4, property5],
    agentImg: agents,
    description: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, 
offering picturesque views of the nearby rolling hills. Located in the tranquil heart of 
Pleasantville, it features contemporary design elements that make it truly exceptional. 
With expansive frontage on a peaceful cul-de-sac and all essential utilities in place, 
this is the ideal setting for your dream family home.

If serene living is what you're after, this property is a must-see! Located within the 
200-acre Green Valley community, managed by Heritage Developments, this area is 
renowned as the most family-friendly and well-planned suburb in Ohio. Green Valley's 
standout features include its meticulous landscaping and thoughtfully designed 
layout, evident throughout the entire community.`,

    address: {
      Address: "Hope Bvd, no 45",
      city: "Jersey City",
      zip: "111111",
      area: "Greenville",
      State: "New Jersey State",
      country: "United States",
    },
    propertyDetails: {
      PropertyId: 546679,
      priceInfo: 2450,
      lotSize: 1000,
      bedRooms: 1,
      garages: "NIL",
      garageSize: 3,
      structure: "Apartment",
      price: 950000,
      propertySize: 560,
      rooms: 3,
      bathrooms: 2,
      year: 1988,
      form: "2024 - 07 - 26",
      floores: 1,
    },
  },
  {
    id: "7",
    image: propertyImg6,
    title: "Gorgeous Villa for Rent",
    details: `Primarily enveloped in woodland, this property majestically stands on a crest...`,
    roomType: ["Sales", "Apartment"],
    locate: "Jersey City",
    roomCount: "04",
    bedCount: "3",
    bathCount: "3",
    squareFit: "600 ft",
    price: 200000,
    agent: "Jessy King",
    thumbImage: [property2, property3, property4, property5],
    agentImg: agents,
    description: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, 
offering picturesque views of the nearby rolling hills. Located in the tranquil heart of 
Pleasantville, it features contemporary design elements that make it truly exceptional. 
With expansive frontage on a peaceful cul-de-sac and all essential utilities in place, 
this is the ideal setting for your dream family home.

If serene living is what you're after, this property is a must-see! Located within the 
200-acre Green Valley community, managed by Heritage Developments, this area is 
renowned as the most family-friendly and well-planned suburb in Ohio. Green Valley's 
standout features include its meticulous landscaping and thoughtfully designed 
layout, evident throughout the entire community.`,

    address: {
      Address: "Hope Bvd, no 45",
      city: "Jersey City",
      zip: "111111",
      area: "Greenville",
      State: "New Jersey State",
      country: "United States",
    },
    propertyDetails: {
      PropertyId: 546679,
      priceInfo: 2450,
      lotSize: 1000,
      bedRooms: 1,
      garages: "NIL",
      garageSize: 3,
      structure: "Apartment",
      price: 950000,
      propertySize: 560,
      rooms: 3,
      bathrooms: 2,
      year: 1988,
      form: "2024 - 07 - 26",
      floores: 10,
    },
  },
  {
    id: "6",
    image: propertyImg2,
    title: "Luxury Loft",
    details: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, offering...`,
    roomType: ["Rent", "Industrial"],
    locate: "Jersey City",
    roomCount: "04",
    bedCount: "1",
    bathCount: "2",
    squareFit: "600 ft",
    price: 65009,
    agent: "Jessy King",
    thumbImage: [property2, property3, property4, property5],
    agentImg: agents,
    description: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, 
offering picturesque views of the nearby rolling hills. Located in the tranquil heart of 
Pleasantville, it features contemporary design elements that make it truly exceptional. 
With expansive frontage on a peaceful cul-de-sac and all essential utilities in place, 
this is the ideal setting for your dream family home.

If serene living is what you're after, this property is a must-see! Located within the 
200-acre Green Valley community, managed by Heritage Developments, this area is 
renowned as the most family-friendly and well-planned suburb in Ohio. Green Valley's 
standout features include its meticulous landscaping and thoughtfully designed 
layout, evident throughout the entire community.`,

    address: {
      Address: "Hope Bvd, no 45",
      city: "Jersey City",
      zip: "111111",
      area: "Greenville",
      State: "New Jersey State",
      country: "United States",
    },
    propertyDetails: {
      PropertyId: 546679,
      priceInfo: 2450,
      lotSize: 1000,
      bedRooms: 1,
      garages: "NIL",
      garageSize: 3,
      structure: "Apartment",
      price: 950000,
      propertySize: 560,
      rooms: 3,
      bathrooms: 2,
      year: 1988,
      form: "2024 - 07 - 26",
      floores: 1,
    },
  },
];
