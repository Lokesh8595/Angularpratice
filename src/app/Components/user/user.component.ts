import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  Name="lokesh"
  education="Graduate"
  isgreen = true;
  styleColor= "blue"

  ngOnInit(): void {
    this.getClass()
    this.getStyle()
  }
  handleChange(value: String){
    if(value == 'green'){
      this.isgreen=true;
    }
    else{
      this.isgreen=false
    }
  }
  istext=true;
  textcolorchange(value:string){
    console.log(value)
    // if(value === 'black'){
      console.log(true)
      this.istext=!this.istext;
    // }
    // else{
    //   this.istext=false;
    // }
  }
  login(){
    alert("your SuccessFully login")
  }
  bgColor=true;
  bgcolorchange(){
    
  //   if(value === 'card'){
  //     this.bgColor=true;
  //   }
  //   else{
  //     this.bgColor=false;
  //   }
    this.bgColor=!this.bgColor;
}
// show and hide
textshow=true;
showandhide(){
  this.textshow=!this.textshow;
}
// box color change
box=true;
boxbgchnage(value:string){
  // this.box=!this.box;
  console.log(this.box);
  if(value === 'blue'){
    this.box=true;
  }
  else{
    this.box=false;
  }
}
// new-text 
newtext=true;
newtextchange(){
 this.newtext=!this.newtext;
}

getClass(){
  return 'text-danger bg-info'
}
changeStyle(){
  this.styleColor = "black"
}
getStyle(){
  return {'background-color': 'yellow', "color": "red"}
}

}

