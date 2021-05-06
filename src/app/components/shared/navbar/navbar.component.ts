import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

img: string = '../../../../assets/pokemon-icon-0.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
