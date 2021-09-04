import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { RepositoryComponent } from './repository/repository.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  { path: 'biography', component: BiographyComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
