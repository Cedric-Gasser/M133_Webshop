export type Potion = {
    name: string,
    description: string,
    image: string,
    price: number,
    oldPrice: number,
    id: number
}

export type CartItem = {
    id: number,
    amount: number
}

export type Cart = {
    totalPrice: number,
    items: CartItem[]
}