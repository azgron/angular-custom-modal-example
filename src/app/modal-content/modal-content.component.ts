import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit() {
    /* tslint:disable */
    console.info('AppModalContentComponent: created');
    /* tslint:enable */
  }

  ngOnDestroy() {
    /* tslint:disable */
    console.info('AppModalContentComponent: destroyed');
    /* tslint:enable */
  }
}
