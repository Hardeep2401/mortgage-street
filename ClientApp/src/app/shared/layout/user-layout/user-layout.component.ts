import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent implements OnInit {
  layoutNav: boolean;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.layoutNav = this.commonService.layoutNav = true;
  }
}
