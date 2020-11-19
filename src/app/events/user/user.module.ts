import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
// THIS IS THE FEATURE MODULE TO CREATE A DIFFERENT FEATURE OF THE WEBSITE 
//KEYDIFF FROM APPMODULE : USED COMMONMODULE INSTEAD OF BROWSERMODULE

//THIS WILL USE A DIFFERNET ROUTE FILE userRoutes
@NgModule({

    imports : [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations : [
ProfileComponent
    ],
    providers : [

    ]
})

export class UserModule{

}