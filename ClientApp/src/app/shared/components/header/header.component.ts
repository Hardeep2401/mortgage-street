import { Component, Input } from '@angular/core';
import { CommonService,  } from '../../services/common.service';

 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  layoutNav: boolean;
  protected isMenuCollapsed: boolean = true;
  @Input() isValue : boolean = true;

  constructor(private commonService: CommonService) {}
  ngOnInit() {
    this.layoutNav = this.commonService.layoutNav;
  }



}
