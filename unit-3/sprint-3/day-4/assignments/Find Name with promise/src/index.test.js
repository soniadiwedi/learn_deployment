import config from "../config.js";
import fetch from "isomorphic-fetch";

it.skip("the data is peanut butter", () => {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      expect(data.name).toBe("Leanne Graham");
    });
});
