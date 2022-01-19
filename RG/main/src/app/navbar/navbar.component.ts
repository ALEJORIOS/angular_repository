import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  age:number;
  constructor() { 
    this.age = 24;
  }

  ngOnInit(): void {

  }

  aumentar() {
    this.age++;
    console.log(this.age);
  }

}
