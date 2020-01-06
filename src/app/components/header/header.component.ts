import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon/icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private iconService: IconService
  ) { }

  ngOnInit() {
    this.iconService.registerCustomIcons();
  }

  private openTab(framework: string): void {
    switch (framework) {
      case 'angular':
        window.open('https://angular.io');
        break;
      case 'jasmine':
        window.open('https://jasmine.github.io');
        break;
    }

    return;
  }
}
