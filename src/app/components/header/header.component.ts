import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // make sure we put if string or number here
  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription!: Subscription;
  //  because we have this now we can do this.uiservice and any methods that are in there
  constructor(private UiService: UiService, private router: Router) {
    this.subscription = this.UiService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  ngOnInit(): void {}

  //  when we click this we call the toggleAddTask on service
  toggleAddTask() {
    this.UiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
