import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText= '';
  // matchingText:boolean=false;

  onInput(eve:any){
    // this.matchingText=false;
    // if(eve.target.value==this.randomText){
    //   this.matchingText=true;
    // }
    this.enteredText=eve.target.value;
  }
  compare(randomLetter:string,enteredLetter:string){
    if(!enteredLetter){
      return 'pending';
    }
    return randomLetter==enteredLetter? 'correct' : 'incorrect';
  }

}
