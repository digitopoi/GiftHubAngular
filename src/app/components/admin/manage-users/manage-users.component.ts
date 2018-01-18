import { UsersService } from './../../../services/users.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  usersDataSource: UsersDataSource | null;
  public usersColumnNames = ['userId', 'email', 'username'];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe(d => {
      console.log(d);
      this.usersDataSource = new UsersDataSource(d);
    });
  }

}

export class UsersDataSource extends DataSource<any> {

  constructor(private _usersData) {
    super();
  }

  connect(collectionViewer): Observable<any[]> {
    return Observable.of(this._usersData);
  }

  disconnect(collectionViewer): void { }
}
