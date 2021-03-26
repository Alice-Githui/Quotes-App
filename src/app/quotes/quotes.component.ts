import { Component, OnInit } from '@angular/core';
import {QuotesList} from '../quotes-list'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:QuotesList[] = [
    new QuotesList(1, 'We cannot become what we want by remaining what we are', 'Max Depree', 'Alice Githui', new Date(2021,2, 26)),
    new QuotesList(2, 'There is no greater agony than bearing an untold story inside you', 'Maya Angelou', 'Alice Githui', new Date(2021, 2, 26)),
    new QuotesList(3, 'You cannot use up creativity. The more you use, the more you have', 'Maya Angelou', 'Alice Githui' , new Date(2021, 2, 27)),
    new QuotesList(4, 'You have to be odd to be number one', 'Dr.Seuss', 'Alice Githui', new Date(2020, 2, 27))

  ]

  //function to show details when the show details button is clicked
  showDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
