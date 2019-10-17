import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: '../pages/planets/planets.module#PlanetsPageModule'
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: '../pages/people/people.module#PeoplePageModule'
          }
        ]
      },
      {
        path: 'starships',
        children: [
          {
            path: '',
            loadChildren: '../pages/starships/starships.module#StarshipsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/planets',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/planets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
