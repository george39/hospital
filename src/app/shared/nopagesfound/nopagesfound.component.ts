import { Component, OnInit } from '@angular/core';

declare function init_pugins();

@Component({
  selector: 'app-nopagesfound',
  templateUrl: './nopagesfound.component.html',
  styles: []
})
export class NopagesfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_pugins();
  }

}
