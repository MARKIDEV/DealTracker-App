import {ADD_REQUEST} from "./actiontype";
import {DELETE_REQUEST} from "./actiontype";
import {SEARCH_REQUEST} from "./actiontype";

import { ADD_CLIENT} from "./actiontype";
import { ADD_TRANSPORTER} from "./actiontype";

import {DELETE_CLIENT} from "./actiontype";
import {DELETE_TRANSPORTER} from "./actiontype";

import {ADD_QUOTE} from "./actiontype";
import {DELETE_QUOTE} from "./actiontype";

export function addRequest(payload) {
  return { type: ADD_REQUEST, payload };
}
export function deleteRequest(payload) {
  return { type: DELETE_REQUEST, payload };
}
export function searchRequest(payload) {
  return { type: SEARCH_REQUEST, payload };
}
export function addClient(payload) {
  return { type: ADD_CLIENT, payload };
}
export function addTransporter(payload) {
  return { type: ADD_TRANSPORTER, payload };
}
export function deleteClient(payload) {
  return { type: DELETE_CLIENT, payload };
}
export function deleteTransporter(payload) {
  return { type: DELETE_TRANSPORTER, payload };
}

export function addQuote(payload) {
  return { type: ADD_QUOTE, payload };
}
export function deleteQuote(payload) {
  return { type: DELETE_QUOTE, payload };
}



