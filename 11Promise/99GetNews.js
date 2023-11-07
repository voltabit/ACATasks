const url =
  "https://newsapi.org/v2/everything?q=ARMENIA&apiKey=6e3ce28d4dd8468db8e6aefa97aec725";

async function getNews() {
  // const myQuery = document.getElementById(query).value;
  // const myUrl = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=6e3ce28d4dd8468db8e6aefa97aec725`;
  // const myUrl = `https://newsapi.org/v2/everything?q=${myQuery}&apiKey=6e3ce28d4dd8468db8e6aefa97aec725`;
  let response = await fetch(url);
  const data = await response.json();
  // document.getElementById("theNewsStream").innerHTML = data;
  console.log(data);
}

getNews();
