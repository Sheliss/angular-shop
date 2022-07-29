import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFilterClick(data: string) {
    this.filterClick.emit(data);
  }

}
