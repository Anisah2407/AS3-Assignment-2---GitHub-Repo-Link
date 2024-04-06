// add-new-task.page.ts
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage {
  taskData = {
    itemName: '',
    itemDueDate: '',
    itemPriority: 'High', // default value
  };

  constructor(public modalCtlr: ModalController) {}

  dismiss() {
    this.modalCtlr.dismiss();
  }

  addTask() {
    this.modalCtlr.dismiss(this.taskData);
  }
}
