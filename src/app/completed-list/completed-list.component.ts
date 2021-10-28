import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ManageTaskService } from '../manage-task.service';
import { ManageTodoService } from '../manage-todo.service';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {

  listsArray : any =[]
  
  isCollapsed = false;
  countArray!: number;

  constructor(private toastr : ToastrService, private _task : ManageTaskService, private _managetodo : ManageTodoService) { }

  ngOnInit(): void {
  
     this.listsArray = this._task.manageComplete()
    
  }

  onDelete(index: any) {
    this._managetodo.deleteItem(index)
    location.reload()
  }
  
  onUnDone(id: any){
    this._managetodo.onIncomplete(id)
    location.reload()
  }
  
  
  completedDelete(index : number){
   
  }
}
