import "./style/main.css";


const symbolsArr= ['&#9824;','&#9827;','&#9829;', '&#9830;'];
const numberArr= ['A',2,3,4,5,6,7,8,9,10,'J','Q','K',];

const symbol_up= document.querySelector('.symbol_up');
const symbol_down= document.querySelector('.symbol_down');
const number= document.querySelector('.number');
const generateRandomNumber= (arrLength) => Math.floor(Math.random()*arrLength);

const changeInnerCard= () => {
    
    const symbolToShow= symbolsArr[generateRandomNumber(symbolsArr.length)];
    const numberToShow= numberArr[generateRandomNumber(numberArr.length)];
    document.querySelector('.back_of_card_container').style.color=(symbolToShow === '&#9829;' || symbolToShow === '&#9830;' )? 'red':'black';

    const ArrSymbolsToShow= (number) => {
        let allSymbolsCombine = '';
        for(let i = 0; i < number; i++){allSymbolsCombine += `<div>${symbolToShow}</div>`}
        return allSymbolsCombine
    }

    const numberToDisplay= (numberToShow === 'A' || numberToShow === 'J' || numberToShow === 'Q' || numberToShow === 'K')? numberToShow : ArrSymbolsToShow(numberToShow);

    symbol_up.innerHTML= symbolToShow + numberToShow;
    symbol_down.innerHTML=  numberToShow + symbolToShow;
    number.innerHTML= numberToDisplay;
}

document.getElementById('img').addEventListener("mouseover", changeInnerCard);