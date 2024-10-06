import axios from 'axios';

interface ClothingItem {
  id: number;
  name: string;
  brandName: string;
  price: {
    current: {
      value: number;
    };
  };
  imageUrl: string;
  category: string;
}

const randomClothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Classic Fedora",
    brandName: "HatCo",
    price: { current: { value: 49.99 } },
    imageUrl: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Hat"
  },
  {
    id: 2,
    name: "Aviator Sunglasses",
    brandName: "ShadeCo",
    price: { current: { value: 129.99 } },
    imageUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Sunglasses"
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    brandName: "TopsCo",
    price: { current: { value: 24.99 } },
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Top"
  },
  {
    id: 4,
    name: "Slim Fit Jeans",
    brandName: "PantsCo",
    price: { current: { value: 79.99 } },
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Pants"
  },
  {
    id: 5,
    name: "Leather Sneakers",
    brandName: "ShoesCo",
    price: { current: { value: 89.99 } },
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    category: "Shoes"
  }
];

export async function getRecommendations(characteristics: {
  skinTone: string;
  hairColor: string;
  eyeColor: string;
}): Promise<ClothingItem[]> {
  // Instead of making API calls, we'll return our random items
  return randomClothingItems;
}