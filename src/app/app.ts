import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PostList } from './post-list/post-list';
import { Home } from './home/home';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PostList,Home,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-ecomerce-app');

constructor(private router : Router){

}
ngOnInit(): void {
  const testOberable$ = new Observable(obserable => {
    console.log("practice obserable");
  }).subscribe();
}

// *******return value from obervable
//  ngOnInit(): void {
//   const testOberable$ = new Observable(obserable => {
//     obserable.next('this return the oservable value')
//   }).subscribe( value =>{
//     console.log(value)
//   });
// }

//***********asynchronous example
// ngOnInit(): void {
//   const testOberable$ = new Observable(obserable => {
//     obserable.next('this return the oservable value')
//     obserable.next('this return the oservable value second')

//     setTimeout( ()=>{
//       obserable.next('this return the oservable value from set Timeout')
//     },2000)

//     obserable.next('this return the oservable value third')
//   }).subscribe( value =>{
//     console.log(value)
//   });
//   testOberable$.unsubscribe();
// }


//******************navigate route programatically */
onSubmit(){
 this.router.navigate(['/posts']);
 this.router.navigate(['/post',1,'postName']);
 this.router.navigate(['/posts'],{queryParams: {page : 1 , pageName : "first"}});
}
}
