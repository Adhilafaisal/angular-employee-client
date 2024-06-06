import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent  implements OnInit{
   eid:any=""
   emp:any=""
  

   constructor(private ar:ActivatedRoute,private api:ApiService,private toastr:ToastrService,private router:Router){
    this.ar.params.subscribe((res:any)=>{
      console.log(res)
      this.eid=res.id
    })
    console.log(this.eid)
   }

   ngOnInit() {
    this.api.getSpecificEmployee(this.eid).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.emp=res
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
   }


   handleSubmit(){
    console.log(this.emp)
    this.api.updateEmployee(this.eid,this.emp).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success("Employee Updated Successfully");
        this.router.navigateByUrl('employee');
      },
      error:(error:any)=>{
        console.log(error)
        this.toastr.error("Error occured");
      }
    }) 
   }
     
   }