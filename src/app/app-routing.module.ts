import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HousesComponent } from "./houses/houses.component";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from "./login/login.component";
import { HouseStartComponent } from "./houses/house-start/house-start.component";
import { HouseDetailComponent } from "./houses/house-detail/house-detail.component";
import { HouseEditComponent } from "./houses/house-edit/house-edit.component";
import { SignupComponent } from "./login/signup/signup.component";
import { AuthGuard } from "./login/auth-guard.service";


const appRoutes: Routes = [
    { path:"", redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'homes', component: HousesComponent, children: [
        { path: '', component: HouseStartComponent },
        { path: 'new', component: HouseEditComponent, canActivate: [AuthGuard]},
        { path: ':id', component: HouseDetailComponent },
        { path: ':id/edit', component: HouseEditComponent, canActivate: [AuthGuard]}

    ]},
    { path: 'users', component: UsersComponent},
    { path: 'signup', component: SignupComponent}
  ];



@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
 
})

@NgModule({

})
export class AppRoutingModule {

}