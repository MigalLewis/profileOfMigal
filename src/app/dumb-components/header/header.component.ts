import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean;

  constructor() { 
    this.isCollapsed = false;
  }

  ngOnInit(): void {
  }

  togglePanel(collapseButton: HTMLElement, collapsePanel: HTMLElement) {
    if (this.isCollapsed) {
      collapseButton.classList.add('collapsed');
      collapsePanel.classList.remove('show');
    } else {
      collapsePanel.classList.add('show');
      collapseButton.classList.remove('collapsed');
    }
    this.isCollapsed = !this.isCollapsed
  }

}
