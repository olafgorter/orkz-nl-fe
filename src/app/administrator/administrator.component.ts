import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  menuRoute: string = 'users';

  users: Array<User> = [];

  constructor(private router:Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res as Array<User>;
      console.log(this.users);
    });
    
  }

  onMenuClick(menuRoute: string) {
    this.menuRoute = menuRoute;
  }

}
