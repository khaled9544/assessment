import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'models/:brandId',
    loadChildren: () => import('./pages/models/models.module').then(m => m.ModelsPageModule)
  },
  {
    path: 'branches/:brandId/:modelId',
    loadChildren: () => import('./pages/branches/branches.module').then( m => m.BranchesPageModule)
  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  private pagesURL = [
    {
      id: 'brands',
      path: 'home'
    },
    {
      id: 'models',
      path: 'models'
    }];

  getRoute = (page: string, id: string = '') => () => {
    const requestedPage = this.pagesURL.find(p => p.id === page);
    if(id) {
      return `${requestedPage.path}/${id}`
    }
    return requestedPage.path;
  }

}
