import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ManageTaskService } from '../manage-task.service';
import { ManageTodoService } from '../manage-todo.service';
// import { ManageTaskService } from '../manage-task.service';


interface taskObject {
  id: number;
  title: string;
  description: string;
  duedate: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('list', { static: true }) list!: ElementRef;


  @ViewChild('rowEl', { static: true }) rowEl!: ElementRef;

  listsArray: any = []
  completedTask: any = []
  completedArray: any = []

  constructor(private _task : ManageTaskService, private _router: Router, private toastr: ToastrService, private _managetodo: ManageTodoService) { }

  ngOnInit(): void {
    this.getTodo()
    // console.log(this.listsArray )
    
  }

  getTodo(){
    this.listsArray = this._task.manageInComplete()
    
  }

 

  onDelete(index: any) {
    this._managetodo.deleteItem(index)
    this.ngOnInit()
  }


  onEdit(index: any) {
    this._managetodo.onEdit(index)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listsArray, event.previousIndex, event.currentIndex);
  }


  onComplete(id : any){
   
    let temp : any = localStorage.getItem("taskData")
    this.listsArray = JSON.parse(temp) 
    
    for(let list of this.listsArray){
      if(list.id === id){
        list.status = "DONE"
        localStorage.setItem("taskData",JSON.stringify(this.listsArray))
      }
    }
    this.ngOnInit()
    
  }
 


}
