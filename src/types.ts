export interface Guest {
    name: string;
    eatsPizza: boolean;
};

export interface UIGuest extends Guest  {
    isVegan: boolean;
    id: number;
    feedback?: Feedback;
};

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