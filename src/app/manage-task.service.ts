import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ManageTaskService {
  listsArray : any = []
  todoArray : any = []
  completedArray : any =  []


  constructor() { }

  manageInComplete(){
    let temp : any = localStorage.getItem("taskData")
    this.listsArray = JSON.parse(temp) 

    const result = this.listsArray.filter((list: { status: string; }) =>list.status === "TODO");
    // console.log(result)
    return result
  }

  manageComplete(){
    let temp : any = localStorage.getItem("taskData")
    this.listsArray = JSON.parse(temp) 
    
    const result = this.listsArray.filter((list: { status: string; }) =>list.status === "DONE");
    // console.log(result)
    return result
  }
 
  
 
}

