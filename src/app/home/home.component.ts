import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private route: Router) { }

  public heroes : any = [
    {
    "name": "Abomination",
    "image": "https://www.superherodb.com/pictures2/portraits/10/100/1.jpg",
    "id": "4"
    },
    {
      "name": "Air-Walker",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/1358.jpg",
      "id": "12"
    },
    {
      "name": "Amazo",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg",
      "id": "20"
    },
    {
      "name": "Penguin",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/753.jpg",
      "id": "514",
    },
    {
      "name": "Joker",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/719.jpg",
      "id": "370"
    },
    {
      "name": "Batman",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg",
      "id": "70"
    },
    {
      "name": "Alfred Pennyworth",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/628.jpg",
      "id": "17"
    },
    {
      "name": "Heat Wave",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/705.jpg",
      "id": "320"
    },
    {
      "name": "Spider-Man",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/10647.jpg",
      "id": "622"
    },
    {
      "name": "Superman",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg",
      "id": "644"
    },
    {
      "name": "Allan Quatermain",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/630.jpg",
      "id": "19"
    },
    {
      "name": "Anti-Spawn",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/1071.jpg",
      "id": "33"
    },
    {
      "name": "Angel",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/10431.jpg",
      "id": "23"
    },
    {
      "name": "Ares",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/1118.jpg",
      "id": "43"
    },
    {
      "name": "Atom",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/934.jpg",
      "id": "50"
    },
    {
      "name": "Ariel",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/1348.jpg",
      "id": "44"
    },
    {
      "name": "Beetle",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/1122.jpg",
      "id": "77"
    },
    {
      "name": "Batgirl IV",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/1113.jpg",
      "id": "66"
    },
    {
      "name": "Ant-Man",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/857.jpg",
      "id": "30"
    },
    {
      "name": "Ant-Man II",
      "image": "https://www.superherodb.com/pictures2/portraits/10/100/166.jpg",
      "id": "31"
    }
  ]

  ngOnInit(): void {
  }

  goToDetail(id){
    this.route.navigate(['/detail'], { queryParams: { id: id } });
  }

}
