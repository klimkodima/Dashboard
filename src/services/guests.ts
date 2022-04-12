import axios from 'axios';

import { apiBaseUrl } from "../constants";
import { UIGuest, Currency, PizzaOrderFromApi, ColaOrderFromApi } from "../types";

interface guestsResponse {
    guests: UIGuest[];
};

interface currencyResponse {
    currency: Currency;
};

interface colaOrderResponse {
    colaOrder: ColaOrderFromApi;
};

interface pizzaOrderResponse {
    pizzOrder: PizzaOrderFromApi;
};


export async function fetchAPI(querry: string): Promise<guestsResponse | currencyResponse | colaOrderResponse | pizzaOrderResponse> {
    return await await axios.get(apiBaseUrl + querry);;
};