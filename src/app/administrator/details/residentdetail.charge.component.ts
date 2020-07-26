import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import { Resident } from 'src/app/model/resident';
import { ResidentService } from 'src/app/services/resident.service';
import { AdministratorService } from 'src/app/services/administrator.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ResidentModalComponent } from '../modal/residentmodal.component';
import { Charge } from 'src/app/model/charge';
import { ResidentCharge } from 'src/app/model/residentcharge';

@Component({
  selector: 'app-residentdetail-charge',
  templateUrl: './residentdetail.charge.component.html'
})
export class ResidentDetailChargeComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute, private tokenStorageService: TokenStorageService,
               private residentService: ResidentService, private administratorService: AdministratorService,
               private modalService: NgbModal ) { }

  residentId: number;
  resident: Resident;
  residentCharges: Array<ResidentCharge> = [];

  ngOnInit(): void {

    this.residentId = this.toNumber(this.route.snapshot.paramMap.get('residentId'));

    this.administratorService.getResident(this.residentId).subscribe(res => {
      this.resident = res as Resident;
    });

    this.residentService.getChargesByResident(this.residentId).subscribe(res => {
      this.residentCharges = res as Array<ResidentCharge>;
    });

    // if(!this.tokenStorageService.getUser()) {
    //   this.router.navigate(['login']);
    // }

  }

  public toNumber(text: string){
    if(isNaN(Number(text))){
      return undefined;
    } 
    return Number(text);
  }

  openResidentModal(resident?){
    let modal = this.modalService.open(ResidentModalComponent, {ariaLabelledBy: 'app-resident-modal'});

    if(resident) {
      modal.componentInstance.resident = resident;
    }

    modal.result.then((result) => {
      window.location.reload();
      
    }, (reason) => {
      if(reason === 'Deleted') {
        window.location.reload();
      }
    });

  };

  openChargeModal(residentCharge?: ResidentCharge){
    // TODO: En gebruik this.resident om de resident mee te geven...
  }

}
