export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  projectCategory: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. André van der Merwe",
    role: "Property Developer",
    company: "Vantage Developments",
    quote:
      "TitanX delivered our Constantia project on time and to a standard that genuinely impressed our architect. Their attention to the lighting design detail — particularly the landscape uplighting — transformed the property. We've since engaged them on two further developments.",
    projectCategory: "lighting",
    rating: 5,
  },
  {
    id: "t2",
    name: "Sarah Kotzé",
    role: "Estate Manager",
    company: "Boschendal Wine Estate",
    quote:
      "The solar installation eliminated our load-shedding problem completely. The TitanX team was thorough from system design through to commissioning, and their monitoring reports give us full visibility of generation and consumption. Highly professional throughout.",
    projectCategory: "solar",
    rating: 5,
  },
  {
    id: "t3",
    name: "Mark Henderson",
    role: "Architect",
    company: "Henderson & Associates",
    quote:
      "I've worked with several electrical contractors over 15 years of practice. TitanX stands out for one reason: they read drawings properly. On the Sea Point penthouse they flagged a conduit routing conflict before we hit construction — that kind of initiative saves everybody money.",
    projectCategory: "electrical",
    rating: 5,
  },
  {
    id: "t4",
    name: "Liesel Engelbrecht",
    role: "HOA Chairperson",
    company: "Hout Bay Coastal Estate",
    quote:
      "We moved our maintenance contract to TitanX eighteen months ago and the difference is remarkable. One point of contact, consistent workmanship, and the quarterly condition reports help us plan our reserve fund with confidence.",
    projectCategory: "maintenance",
    rating: 5,
  },
  {
    id: "t5",
    name: "Pieter Louw",
    role: "Facilities Director",
    company: "Meridian Property Fund",
    quote:
      "Commissioning TitanX for the Bellville warehouse re-roofing was straightforward. They provided a detailed scope, stuck to the programme, and gave us a written workmanship guarantee. The building has been bone-dry through two Cape winters now.",
    projectCategory: "roofing",
    rating: 5,
  },
];
