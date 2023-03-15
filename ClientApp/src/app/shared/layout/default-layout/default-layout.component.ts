import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  test: boolean;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.test = this.commonService.layoutNav = false;
  }
}
