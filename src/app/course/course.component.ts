import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  course = [
    {
      id: 1,
      name: 'Learn Angular',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: '../../assets/angular.png',
    },
    {
      id: 2,
      name: 'Learn TypeScript',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: '../../assets/ts.png',
    },
    {
      id: 3,
      name: 'Learn Node JS',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: '../../assets/node.png',
    },
    {
      id: 4,
      name: 'Learn ReactJS',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: '../../assets/react.png',
    },
  ]
}
