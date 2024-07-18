import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-management/task-list/task-list.component';
import { TaskCreateComponent } from './task-management/create-task/create-task.component';
import { UpdateTaskComponent } from './task-management/update-task/update-task.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },

  { path: 'dashboard', component: HomeComponent },
  { path: 'list', component: TaskListComponent },
  { path: 'create', component: TaskCreateComponent },
  { path: 'update/:id', component: UpdateTaskComponent },

  { path: '**', redirectTo: '' },


  
  // {
  //   path: '',
  //   component: CustomLayoutComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     // { path: 'dashboard', component: DashboardComponent },
  //     { path: 'list', component: TaskListComponent },
  //     { path: 'create', component: TaskCreateComponent },
  //     { path: 'edit/:id', component: UpdateTaskComponent },
  //   ],
  // },
  // { path: '**', redirectTo: '' },

  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
