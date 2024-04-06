import { Component } from '@angular/core';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { ModalController } from '@ionic/angular';

// Define the type for todo item
interface TodoItem {
  itemName: string;
  itemDueDate: string;
  itemPriority: 'Low' | 'Middle' | 'High';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList: TodoItem[] = []; // Initialize todoList with correct type

  today: number = Date.now();

  constructor(public modalCtlr: ModalController) {}

  async addTask() {
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
    });

    modal.onDidDismiss().then((data) => {
      if (data.role === 'dismissed' || !data.data) return; // Check if data is present
      this.todoList.push(data.data);
    });

    return await modal.present();
  }

  delete(index: number) {
    this.todoList.splice(index, 1);
  }
}
