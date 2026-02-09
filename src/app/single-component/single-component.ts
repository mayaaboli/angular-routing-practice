import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.html',
  styleUrl: './single-component.css',
})
export class SingleComponent implements OnInit{
 constructor(private route:ActivatedRoute){}
 ngOnInit(): void {
  this.route.paramMap.subscribe(value =>{
    console.log(value);
    let id = value.get('id');
    let name = value.get('name');
    console.log(id);
    console.log(name);
  })
 }
 }
