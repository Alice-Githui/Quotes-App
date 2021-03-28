import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { QuotesList } from '../quotes-list';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  newQuotesList = new QuotesList(0, "", "", "", new Date()); 
  @Output() addQuote = new EventEmitter<QuotesList>()

  submitQuote(){
    this.addQuote.emit(this.newQuotesList);

  }
 

  constructor() { }

  ngOnInit(): void {

  }

}
