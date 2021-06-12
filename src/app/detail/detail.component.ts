import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public heroesDetail: any;
  private id: any;
  constructor(private detailSrv : DetailService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    this.getHeroeById(this.id);
  }

  getParams(){
    this.router.queryParams.subscribe(params =>{
      this.id = params['id'];
    });
  }

  getHeroeById(id){
    this.detailSrv.getHeroeByid(id).subscribe((res) => {
      this.heroesDetail = res;
    })
  }

}
