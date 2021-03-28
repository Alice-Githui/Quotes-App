import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  likes:number=0;

  add(){
    this.likes = this.likes+1;
  }
 

   notLike(){
    this.likes = this.likes-1;
   }


  constructor() { }

  ngOnInit(): void {
  }

  url="./assets/likebutton.jpg";
  lru = "./assets/dislikebutton.jpg";
  // url1 = "./assets/topnavimage.jpeg"

}
