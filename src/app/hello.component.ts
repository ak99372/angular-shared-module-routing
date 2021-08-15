import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hello-cmp',
  template: '<p> Hellow Component</p>'
})
export class HelloComponent {
  constructor(router: Router) {
    //console.log(`This is router`, router);
  }
}
