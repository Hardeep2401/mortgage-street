import { Component, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';
import {
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  layoutNav: boolean;
  closeResult = '';
  offcanvasContent: any;

  protected isMenuCollapsed: boolean = true;
  @Input() isValue: boolean = true;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private commonService: CommonService
  ) {}
  ngOnInit() {
    this.layoutNav = this.commonService.layoutNav;
  }
  ngDoCheck() {
    this.offcanvasContent = this.commonService.offcanvasContent;
  }

  open(content) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
