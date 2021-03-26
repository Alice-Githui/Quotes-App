import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {QuotesList} from '../quotes-list'

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote: QuotesList
  @Output() isComplete = new EventEmitter<boolean>()

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
