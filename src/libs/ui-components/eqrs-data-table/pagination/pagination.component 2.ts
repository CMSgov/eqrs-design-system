import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  pageSizes: number[];
  
  @Input()
  numberOfPageOptions: number;

  constructor() { }

  ngOnInit() {
  }

}
