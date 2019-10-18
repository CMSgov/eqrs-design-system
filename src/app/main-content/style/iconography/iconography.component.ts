import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconography',
  templateUrl: './iconography.component.html',
  styleUrls: ['./iconography.component.css']
})
export class IconographyComponent implements OnInit {
  htmlLanguage = 'html';
  cssLanguage = 'css';
  htmlContent = '<p>test</p>';
  cssContent = ' <h4 class="eqrs-alert-heading">Success status</h4>';
  constructor() { }

  ngOnInit() {
  }

}
