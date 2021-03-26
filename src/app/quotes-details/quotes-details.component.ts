import { Component, Input, OnInit, } from '@angular/core';
import {QuotesList} from '../quotes-list'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  constructor() { }
  
  @Input() quote: QuotesList

  ngOnInit(): void {
  }

}
