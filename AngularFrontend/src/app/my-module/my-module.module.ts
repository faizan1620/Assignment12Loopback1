import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudtableComponent } from './crudtable/crudtable.component';
import { AddDataComponent } from './add-data/add-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const myModuleRoutes:Routes=[

  { path: 'crudtable', component: CrudtableComponent },
  { path: 'edit-data/:id', component: EditDataComponent },
  {path:'add-data', component:AddDataComponent}
];

@NgModule({
  declarations: [
    CrudtableComponent,
    AddDataComponent,
    EditDataComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myModuleRoutes),
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyModuleModule { }
