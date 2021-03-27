import { Component, OnInit } from '@angular/core';
import {QuotesList} from '../quotes-list'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:QuotesList[] = [
    new QuotesList(1, 'We cannot become what we want by remaining what we are', 'Max Depree', 'Alice Githui', new Date(2021,2, 20)),
    new QuotesList(2, 'There is no greater agony than bearing an untold story inside you', 'Maya Angelou', 'Alice Githui', new Date(2021, 2, 26)),
    new QuotesList(3, 'You cannot use up creativity. The more you use, the more you have', 'Maya Angelou', 'Alice Githui' , new Date(2021, 2, 25)),
    new QuotesList(4, 'You have to be odd to be number one', 'Dr.Seuss', 'Alice Githui', new Date(2021, 2, 25))

  ]

  //add a new Quote to the existing quotes

  addNewQuotesList(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateEntered = new Date(quote.dateEntered)
    this.quotes.push(quote)

  }

  //function to show details when the show details button is clicked
  showDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor
  }

  //catches the event emitted and gives the action to be taken 
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm (`Are you sure you want to delete this quote`)

      if(toDelete){
        this.quotes.splice(index,1);
      }

    } 
  }


  constructor() { }

  ngOnInit(): void {
  }

  url="./assets/likebutton.jpg";
  lru = "./assets/dislikebutton.jpg";
  url1 = "./assets/topnavimage.jpeg"

}
