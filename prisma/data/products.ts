import { type Product } from "@prisma/client";

export type DataProducts = Omit<Product, "createdAt" | "updatedAt" >;

export const dataProducts = [
  {
   
    name: "Gazille Low Back White",
    price: 408000,
    description:
      "The original silhouette of Compass that started it all in 1998. Re-designed to combine classic vintage with modern details, the Gazelle Low is your ideal every day footwear. Its low-cut design embodies an easy-going effortless style that is versatile for all ocassion and look.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/82fee0dd9cb3f8a4fdb775287069dc9873b5fa42.png",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    name: "Gazille Hi Back White",
    price: 438000,
    description:
      "Inspired bythe 1950s, the Gazelle Hi took an iconic silhouette and gave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/3d63a4b03418224a8747e860ec8c48aa7f17cd4f.png",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    name: "Retrograde Low Black White",
    price: 538000,
    description:
      "The Retrograde range celebrates the heritage of Compass®️ by drawing inspiration from the archives of its forerunner brand, Gazelle®️. Every detail of the Retrograde tells a story and is designed to evoke a sense of pride when worn.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/15172481b3855cbbc11617432685312bce2545ef.jpg",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
];
