import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() title:string="";
  @Input() data:any[]=[];
  @Input() all:boolean=true;
  @Output() selectedValue:EventEmitter<string>=new EventEmitter()
  @Input() select="";
  constructor() { }
  selectedCategoryItems(event:any){
   this.selectedValue.emit(event);
  }
  ngOnInit(): void {
  }


}
