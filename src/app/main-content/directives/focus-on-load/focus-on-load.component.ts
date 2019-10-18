import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus-on-lload',
  templateUrl: './focus-on-load.component.html',
  styleUrls: ['./focus-on-load.component.css']
})
export class FocusOnLoadComponent implements OnInit {
  focusContent: any;
  cssLanguage = 'css';
  constructor() { }

  ngOnInit() {
    this.focusContent = '<input focusOnLoad name="xyz">';
  }

}
