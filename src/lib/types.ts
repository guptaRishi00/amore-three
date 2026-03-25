export interface Flavor {
  id: number;
  name: string;
  tag: string;
  description: string;
  image: string;
  color: string;
  shadow: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
  rating: number;
  type: "primary" | "secondary" | "tertiary";
}
