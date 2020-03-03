import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomCoolComponent } from './components/random-cool.component';


const routes: Routes = [
  {
    path: 'about/:superduperparam',
    component: RandomCoolComponent,
    data: {
      blah: {
        text: '(data from app-routing) really cool app, yoyo',
        foobar: 'woot'
      }
    }
  },
  {
    path: '',
    component: RandomCoolComponent,
    data: {
      blah: {
        text: '(data from app-routing) really cool app, yo',
        foobar: 'woot'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
