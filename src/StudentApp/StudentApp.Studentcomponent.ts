import { Component } from '@angular/core';
import { Student } from './StudentApp.Studentmodel';

@Component({
  templateUrl: './StudentApp.Studentcomponent.html',
  styleUrl: './StudentApp.Studentcomponent.css'
})

export class Studentcomponent {

  title = 'Registration From';
  btn_submit:boolean=false;
  showheading:boolean=true;
  btn_value:string='Add';
  editMode:boolean=false;
  emailTrue:boolean=false;
  studObj:Student=new Student();
  arrayObjs:Array<Student>= new Array<Student>();

  Add()
  {
    if (!this.editMode){
      this.arrayObjs.push(this.studObj);
      this.studObj=new Student();  //clear
    }
    else{
      this.studObj=new Student(); 
    }
  }

  edit(studEdit:Student)
    {    
       this.btn_value="Edit";
       this.showheading=true;
       this.btn_submit=false;
       this.editMode=true;
       this.studObj=studEdit; 
    }
  
  delete(studDelete:Student)
  {
    let index = this.arrayObjs.indexOf(studDelete);
    if (index !== -1) {
      this.arrayObjs.splice(index, 1);
    } 
  }

  clear()
  {
    this.studObj=new Student(); 
  }

  // validate(Email:string):void{
  //   if(this.studObj.Email.includes('@') && this.studObj.Email.includes('.com'))
  //   {
  //      this.emailTrue=true;
  //   }
  //   else{
  //     this.emailTrue=false;
  //     alert("Enter valid Email")
  //   }
  // }

  submit(){
    if (this.arrayObjs.length === 0) {
      alert("No Student Registered!");
    } else{
      this.btn_submit=true;
      this.showheading=false;
    }
  }

}
 