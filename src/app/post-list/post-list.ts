import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
 posts = [
  {
    id : 24,
    name : 'aboli',
    isFemale : true
  },
  {
    id : 25,
    name : 'mayuresh',
    isFemale : false
  },
  {
    id : 22,
    name : 'ani',
    isFemale : false
  }
 ]

 constructor(private qparam : ActivatedRoute){
    this.qparam.queryParamMap.subscribe(value =>{
      console.log(value);
      let qparams = value.get('page');
      console.log(qparams);
    })
 }
}
