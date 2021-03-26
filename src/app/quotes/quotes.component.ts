import { Component, OnInit } from '@angular/core';
import {QuotesList} from '../quotes-list'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:QuotesList[] = [
    {id:1, narration:'We cannot become what we want by remaining what we are', author:'Max Depree', enteredBy:'Alice Githui', dateEntered:new Date(2021,2, 26)},
    {id:2, narration:'There is no greater agony than bearing an untold story inside you', author:'Maya Angelou', enteredBy:'Alice Githui', dateEntered:new Date(2021, 2, 26)},
    {id:3, narration: 'You cannot use up creativity. The more you use, the more you have', author:'Maya Angelou', enteredBy:'Alice Githui', dateEntered: new Date(2021, 2, 27)},
    {id:4, narration: 'You have to be odd to be number one', author:'Dr.Seuss', enteredBy:'Alice Githui', dateEntered: new Date(2020, 2, 27)}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
