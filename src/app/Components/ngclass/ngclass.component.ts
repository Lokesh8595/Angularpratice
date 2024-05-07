import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent implements OnInit {
  ngOnInit(): void {
    this.getStyle()
  }
  styleColor='blue';
  Changestyle(){
    this.styleColor = 'black';
  }
  getStyle(){
    return {'background-color':'red', 'color':'black'}
  }
  getClass(){
    return  'text-danger bg-info'
  }
  newtext=true;
newtextchange(){
 this.newtext=!this.newtext;
}
}
