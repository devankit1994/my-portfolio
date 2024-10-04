import { Component } from '@angular/core';
import { CardComponent } from '../../../../../ui-components/src/public-api';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {}
