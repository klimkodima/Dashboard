export interface Guest {
    name: string;
    eatsPizza: boolean;
};

export interface UIGuest extends Guest  {
    isVegan: boolean;
    id: number;
    feedback?: Feedback;
};
export interface GuestWithOrder extends   UIGuest  {
    order: number;
}

export interface Currency {
    USD: string;
    BYN: string;
    EUR: string;
}

export interface ColaOrderFromApi {
    qty: string;
    sugar: string;
    price: string;
}

export interface PizzaOrderFromApi {
    type: string;
    name: string,
    price: string;
}

export interface Order {
    totalOrder: number;
    moneyToCollect: number;
    collectedMoney: number;
}

export interface Diet {
    name: string;
    isVegan: boolean
};

export interface Feedback {
    phone: string;
    rating: number;
    comment: string;
};

export interface FormField {
    id: string;
    type: string;
    name: string;
};

export enum ListFilter {
    Active = 'ACTIVE',
    All = 'ALL',
    Meat = "MEAT",
    Vegans ='VEGANS'
};

export enum TableFilter {
    All = 'ALL',
    Meat = "MEAT",
    Vegans ='VEGANS',
    Paid = 'PAID',
    NotPaid = 'NOT_PAID'
}