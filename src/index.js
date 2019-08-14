import "./styles.css";

const cards = [[["♠️"], "♣"], ["♥", "♦️"]];

console.log(cards.flat()); // flat() implies a maximum depth of 1
// result: [Array[1], "♣", "♥", "♦️"]

console.log(cards.flat(2)); // Here we use a maximum depth of 2
// result: ["♠️", "♣", "♥", "♦️"]

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
