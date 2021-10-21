import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  listsArray:any = []

  constructor(private _router: Router, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getlist()
    
  }

  getlist(){
    this.listsArray = JSON.parse(localStorage.getItem('taskData')!)
    console.log(this.listsArray)
  }

//   function onDelete(index) {
//     noteItem.splice(index, 1)
//     localStorage.setItem("noteItem", JSON.stringify(noteItem))
//     renderNotes()
// }

onDelete(index: any){
  if(window.confirm('Are sure you want to delete this item ?')){
    this.listsArray.splice(index, 1)
  localStorage.setItem("taskData",JSON.stringify(this.listsArray))
  this.toastr.info("Deleted Successfully")
   }
  
  // this.getlist()
  setTimeout(() => {
    location.reload()
  }, 1000);
  
}


onEdit(index: any){
  let currentIndex = index
  
 
  this._router.navigate(['edit/',index])
}

}
