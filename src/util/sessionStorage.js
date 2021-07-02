// sessionStorage에서 불러오기
function callData(key) {
  const savedData = sessionStorage.getItem(key);
  return JSON.parse(savedData);
}

//sessionStorage에 저장
function saveData(key, value) {
  const toJson = JSON.stringify(value);
  sessionStorage.setItem(key, toJson);
}

export { callData, saveData };
