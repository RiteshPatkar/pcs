import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/setupProject', title: 'Setup Project',  icon: 'dashboard', class: '' },
  { path: '/scopedocument', title: 'Project Scope',  icon: 'dashboard', class: '' },
  { path: '/stakeholders', title: 'Stakeholders',  icon: 'dashboard', class: '' },
  { path: '/receivematerial', title: 'Receive Material',  icon: 'content_paste', class: '' },
  { path: '/materialmanagement', title: 'Material Management',  icon: 'content_paste', class: '' },
  { path: '/cablemanagement', title: 'Cable Management',  icon: 'content_paste', class: '' },
  { path: '/manageManpower', title: 'Manpower Management',  icon: 'content_paste', class: '' },
//{ path: '/projects', title: 'Project List',  icon:'content_paste', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

export const TEMP_ROUTES: RouteInfo[] = [

  { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  tempMenuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.tempMenuItems = TEMP_ROUTES.filter(tempMenuItem => tempMenuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
