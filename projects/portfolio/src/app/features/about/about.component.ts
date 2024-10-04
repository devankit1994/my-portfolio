import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../ui-components/src/public-api';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
