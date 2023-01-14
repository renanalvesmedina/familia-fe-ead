import { AuthenticationModel } from "../models/AuthenticationModel";

const REACT_LOCAL_STORAGE_AUTH_DATA = '@App:authData';

export function setAuthLocalStorage(authData: AuthenticationModel | null) {
  localStorage.setItem(REACT_LOCAL_STORAGE_AUTH_DATA, JSON.stringify(authData));
}

export function getAuthLocalStorage() {
  const data = localStorage.getItem(REACT_LOCAL_STORAGE_AUTH_DATA);
  if(!data) {
    return null;
  }

  return JSON.parse(data);
}

export function getToken() {
  var authData = getAuthLocalStorage();
  return authData != null ? authData.token.toString() : '';
}

export function removeAuthLocalStorage() {
  localStorage.removeItem(REACT_LOCAL_STORAGE_AUTH_DATA);
}

export function getAvatarLetters(userName: string) {
  var words = userName.trim().toLowerCase().split(" ");
  var avatarLetters = '';

  for (var a = 0; a < words.length; a++) {
    var w = words[a];
    words[a] = w[0].toUpperCase();
    avatarLetters = words.join().replace(',', '').substring(0, 2);
  }

  return avatarLetters;
}