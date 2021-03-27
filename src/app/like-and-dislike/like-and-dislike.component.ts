import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { QuotesList } from '../quotes-list';

@Component({
  selector: 'app-like-and-dislike',
  templateUrl: './like-and-dislike.component.html',
  styleUrls: ['./like-and-dislike.component.css']
})
export class LikeAndDislikeComponent implements OnInit {

  @Input() quote: QuotesList;
  @Output() likeQuote = new EventEmitter<boolean>()

  likeButtonClick(liked:boolean){
    this.likeQuote.emit(liked)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
