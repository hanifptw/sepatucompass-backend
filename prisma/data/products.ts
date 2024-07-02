import { type Product } from "@prisma/client";

export type DataProducts = Omit<Product, "createdAt" | "updatedAt">;

export const dataProducts = [
  {
    slug: "gazille-low-back-white",
    name: "Gazille Low Back White",
    price: 408000,
    description:
      "The original silhouette of Compass that started it all in 1998. Re-designed to combine classic vintage with modern details, the Gazelle Low is your ideal every day footwear. Its low-cut design embodies an easy-going effortless style that is versatile for all ocassion and look.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/82fee0dd9cb3f8a4fdb775287069dc9873b5fa42.png",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    slug: "gazille-hi-back-white",
    name: "Gazille Hi Back White",
    price: 438000,
    description:
      "Inspired bythe 1950s, the Gazelle Hi took an iconic silhouette and gave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/3d63a4b03418224a8747e860ec8c48aa7f17cd4f.png",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    slug: "retrograde-low-back-white",
    name: "Retrograde Low Black White",
    price: 538000,
    description:
      "The Retrograde range celebrates the heritage of Compass®️ by drawing inspiration from the archives of its forerunner brand, Gazelle®️. Every detail of the Retrograde tells a story and is designed to evoke a sense of pride when worn.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/15172481b3855cbbc11617432685312bce2545ef.jpg",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    slug: "gazele-low-white-blue",
    name: "Gazele Low White Blue",
    price: 408000,
    description:
      "The original silhouette of Compass that started it all in 1998. Re-designed to combine classic vintage with modern details, the Gazelle Low is your ideal every day footwear. Its low-cut design embodies an easy-going effortless style that is versatile for all occasion and look.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/1c494df7dacb780bb957276d55df9c662a6a060d.jpg",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    slug: "gazele-hi-white-blue",
    name: "Gazele Hi White Blue",
    price: 438000,
    description:
      "Inspired bythe 1950s, the Gazelle Hi took an iconic silhouette and gave it a Compass twist. The Hi-cut adds attitude to the classic Gazelle style, making it both timeless and fresh.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/ec9057dd6cf94f0682812b60c8cbe9fdfb9f00e0.jpg",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    slug: "velocity-black",
    name: "Velocity Black",
    price: 798000,
    description:
      "Combining vintage sensibility and modern technology, the new Compass®️ Retrograde VELOCITY manifests our dreams from the past till now. The name VELOCITY when defined, is the directional speed of an object in motion; this is our rally call for people to keep moving forward and achieve their utmost potential.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/3efe572df6528229114fc66ce9bc85d7400095df.png",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    slug: "velocity-blue/yellow",
    name: "Velocity Blue/Yellow",
    price: 798000,
    description:
      "Compass® Retrograde VELOCITY is a fusion of vintage style and modern technology, offering the best of both worlds. The name VELOCITY represents the speed and direction of movement, which encapsulates the philosophy that Compass® aims to inspire in everyone - to keep pushing forward and achieve their maximum potential.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/3cb536b9cf1b1a33f742c50cf66d84f148c6329b.png",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
  {
    slug: "velocity-white-gum",
    name: "Velocity White Gum",
    price: 798000,
    description:
      "Compass® Velocity® Gum Pack is the latest Velocity shoe collection which combines the natural color of rubber with an all-monochromatic colour way. The Gum Pack collection also highlights a series of improvements made to the Velocity® model - resulting in a lighter, more breathable and comfortable rendition of the original.",
    imageURL:
      "https://compass-ecom-bucket.s3-ap-southeast-1.amazonaws.com/images/productdetail/9504a678480014be04e4cb40ccc130e5dbaaabec.png",
    sizes: ["34", "35", "36", "37", "38", "39", "40", "41", "42"],
  },
];
