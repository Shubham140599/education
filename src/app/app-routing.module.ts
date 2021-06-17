import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { CourseComponent } from './course/course.component'
import { HomeComponent } from './home/home.component'
import { JoinnowComponent } from './joinnow/joinnow.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'joinnow', component: JoinnowComponent },
  { path: 'course', component: CourseComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
