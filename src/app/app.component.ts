import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {  
  employees: any[] = [    
        {    
            code: '1001', name: 'Ram', gender: 'Male',    
            annualSalary: 5500, dateOfBirth: '25/6/1988'    
        },    
        {    
            code: '1002', name: 'Mohit', gender: 'Male',    
            annualSalary: 5700.95, dateOfBirth: '9/6/1982'    
        },    
        {    
            code: '1003', name: 'Rohit', gender: 'Male',    
            annualSalary: 5900, dateOfBirth: '12/8/1979'    
        },    
        {    
            code: '1004', name: 'Sam', gender: 'Female',    
            annualSalary: 6500.826, dateOfBirth: '14/10/1980'    
        },    
    ];     
} 
