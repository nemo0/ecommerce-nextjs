export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  imageLink: string;
  quantity?: number;
}

export interface Cart {
  Item: Item;
  setCart: (prev: any) => void;
}
