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
    this.getRoom();
  }

  filterData(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].room_id == id) {
        return data[i];
      }
    }
  }

  getRoom() {
    this.mainService.getData('room')
      .then((data: any) => {
        this.route.params.subscribe(params => {
          if (this.filterData(params.id, data.data)) {
            this.data = this.filterData(params.id, data.data);
          } else {
            if (this.router.url != '/add') {
              this.router.navigate(['/']);
            }
          }
        });
      }).catch((err: any) => {
        this.router.navigate(['/']);
      });
  }

}
