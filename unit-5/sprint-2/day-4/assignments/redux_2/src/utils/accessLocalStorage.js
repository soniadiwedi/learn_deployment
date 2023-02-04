export let saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export let loadData = (key) => {
  let temp = localStorage.getItem(key);
  temp = JSON.parse(temp);
  return temp;
};
