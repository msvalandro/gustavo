import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = '';
  sequence = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.appService.getSequence(this.value).subscribe((sequence) => {
      this.sequence = sequence;
      this.value = '';
    });
  }
}
