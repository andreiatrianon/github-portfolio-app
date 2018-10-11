function onChangeSelect() {
  let selectValue = document.getElementById('select-order').value;
  if (selectValue === 'name') {
    sortByName()
  } else if (selectValue === 'stars') {
    sortByStars()
  }
}

export default onChangeSelect;

function sortByName() {
  let divOfCards = [].slice.call(document.querySelectorAll('.card'));
  let newDivOfCards = divOfCards.sort(function(a, b) {
    return a.childNodes[0].textContent < b.childNodes[0].textContent;
  });
  document.getElementsByClassName('card-deck').innerHTML= newDivOfCards;
}

function sortByStars() {
  let divOfCards = [].slice.call(document.querySelectorAll('.card'));
  let newDivOfCards = divOfCards.sort(function(a, b) {
    return a.childNodes[1].childNodes[0].textContent > b.childNodes[1].childNodes[0].textContent;
  });
  console.log(newDivOfCards);
  document.getElementsByClassName('card-deck').innerHTML = newDivOfCards;  
}