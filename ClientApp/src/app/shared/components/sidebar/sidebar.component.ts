import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  active: boolean = false;
  constructor() {}
  public isCollapsed = true;
  ngOnInit(): void {}

  isActive() {
    this.active = !this.active;
  }
}
