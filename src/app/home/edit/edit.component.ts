import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  listsArray = JSON.parse(localStorage.getItem('taskData')!)
     id = this.route.snapshot.params['id']
   
     title = this.listsArray[this.id].title
     detail = this.listsArray[this.id].detail
     duedate = this.listsArray[this.id].dueDate
   
   

  constructor(private route: ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
    

    
    
  }
  onCancel(){
    this._router.navigate(['/home'])
  }

}
