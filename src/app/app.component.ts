import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {ModalComponent} from "angular-custom-modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('componentInsideModal') public componentInsideModal: ModalComponent;

  onAnswer(answer) {
    console.log(answer);
    this.componentInsideModal.close();
  }

  openFromComponent() {
    this.componentInsideModal.open();
  }

  title = 'app';
}
