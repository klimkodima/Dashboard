import axios from 'axios';

import { apiBaseUrl } from "../constants";
import { UIGuest } from "../types";

interface guestsResponse {
    guests: UIGuest[];
};

export async function fetchGuests(querry: string): Promise<guestsResponse> {
    return await await axios.get(apiBaseUrl + querry);;
};