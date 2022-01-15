export function setLoginStorage(login) {
  localStorage.setItem('userData', JSON.stringify(login));
}

export function getLoginStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}
