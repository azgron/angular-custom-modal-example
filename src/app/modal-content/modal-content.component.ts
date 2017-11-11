import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {flatMap} from "tslint/lib/utils";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit, OnDestroy {
  @Input('answers') answers: {answer: string, value: string} [] = [];
  @Input('isMultiSelection') isMultiSelection: boolean = false;
  @Output('onAnswer') onAnswer = new EventEmitter<string>();

  public chosenAnswers: {answer: string, value: string}[] = [];

  constructor() {
  }

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
