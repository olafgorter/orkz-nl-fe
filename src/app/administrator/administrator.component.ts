import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { UserModalComponent } from './modal/usermodal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  menuRoute: string = 'users';

  users: Array<User> = [];

  constructor(private router:Router, private route: ActivatedRoute, private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res as Array<User>;
    });
    
  }

  onMenuClick(menuRoute: string) {
    this.menuRoute = menuRoute;
  }

  openUserModal(user){
    let modal = this.modalService.open(UserModalComponent, {ariaLabelledBy: 'app-user-modal'});

    if(user) {
      modal.componentInstance.user = user;
    }

    modal.result.then((result) => {
      window.location.reload();
      
    }, (reason) => {
      if(reason === 'Deleted') {
        window.location.reload();
      }
    });


  }

}
