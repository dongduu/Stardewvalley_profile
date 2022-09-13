const url =
  "https://api.notion.com/v1/databases/a282fa5760144a40b460a21d1149a01b";
const options = {
  method: "GET",
  headers: { Accept: "application/json", "Notion-Version": "2022-06-28" },
};

fetch(url, options)
  .then((res) => console.log(res.json()))
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
