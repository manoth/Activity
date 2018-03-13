import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  data: any = { room_name: 'จองห้องประชุม' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService
  ) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (this.filterData(params.id)) {
          this.data = this.filterData(params.id);
        } else {
          this.router.navigate(['/']);
        }
    });
  }

  filterData(id) {
    let data = this.mainService.data();
    for (let i = 0; i < data.length; i++) {
      if (data[i].room_id == id) {
        return data[i];
      }
    }
  }

}
