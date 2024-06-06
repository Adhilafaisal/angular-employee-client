import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
  
  cdate=new Date()
  employees:any=[]
  searchKey:string=''

  constructor(private api:ApiService,private toastr:ToastrService) { }

  ngOnInit(){
    console.log("hello")
    this.api.getALLEmployee().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getData(res)
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }
  getData(data:any){
    this.employees=data
    console.log(this.employees)
  }



  deleteEmployee(id:any){
    this.api.deleteEmployee(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success("Employee Deleted Successfully")
        this.ngOnInit()
      },
      error:(error:any)=>{
        console.log(error)
        this.toastr.error("Error occured")
      }
    })
  }

  sortId(){
    this.employees.sort((a:any,b:any)=>a.id-b.id)
  }
  
  sortUsername(){
    this.employees.sort((a:any,b:any)=>a.username.localeCompare(b.username))
  }

  exportToPdf(){
    const body=this.employees.map((item:any)=>Object.values(item))
    console.log(body)

    const doc=new jsPDF()
    autoTable(doc,{
      head:[['ID','Username','Email','Status']],
      body:body
    })

    doc.save('employee-table.pdf')
  }
  

}
