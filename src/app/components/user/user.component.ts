import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  changed: boolean;

  constructor(private _ref: ChangeDetectorRef, private _applicationRef: ApplicationRef) { }

  ngOnInit() {
  }

  addedCard(cardAdded: boolean) {
    this.changed = cardAdded;
    this._applicationRef.tick();
    this._ref.detectChanges();
  }

}
