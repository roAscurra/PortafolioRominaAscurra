import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  sectionsVariable:boolean = false;
  sections_icon_Class:boolean = false;
  openSections(){
    this.sectionsVariable =! this.sectionsVariable;
    this.sections_icon_Class =! this.sections_icon_Class;
  }
  ngOnInit(): void {
  }
}
