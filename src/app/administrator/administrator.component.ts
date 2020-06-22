import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../model/user';

import { Charge } from '../model/charge';
import { ChargeService } from '../services/charge.service';
import { Resident} from '../model/resident';
import { ResidentService } from '../services/resident.service';

import { UserService } from '../services/user.service';
import { UserModalComponent } from './modal/usermodal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChargeModalComponent } from './modal/chargemodal.component';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  menuRoute: string = 'users';

  users: Array<User> = [];

  residents: Array<Resident> = [];

  charges: Array<Charge> = [];

  constructor(  private router:Router, 
                private route: ActivatedRoute, 
                private userService: UserService, 
                private residentService: ResidentService, 
                private chargeService: ChargeService, 
                private modalService: NgbModal
                ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(res => {
      this.users = res as Array<User>;
    });
    
    // this.residentService.getAllResidents().subscribe(res => {
    //   this.residents = res as Array<Resident>;
    // });

    this.chargeService.getAllCharges().subscribe(res => {
      this.charges = res as Array<Charge>;
    });

  }

  onMenuClick(menuRoute: string) {
    this.menuRoute = menuRoute;
  }

  openUserModal(user?){
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

  openChargeModal(charge){
    let modal = this.modalService.open(ChargeModalComponent, {ariaLabelledBy: 'app_charge_modal'});

    if(charge) {
      modal.componentInstance.charge = charge;
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
