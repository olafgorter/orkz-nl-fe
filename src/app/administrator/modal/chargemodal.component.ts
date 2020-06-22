import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdministratorService } from 'src/app/services/administrator.service';
import { Charge } from 'src/app/model/charge';

@Component({
  selector: 'app-charge-modal',
  templateUrl: './chargemodal.component.html',
  styleUrls: ['./chargemodal.component.scss'],
})

export class ChargeModalComponent implements OnInit{

    @Input('charge') charge: Charge;

    editForm: FormGroup;
    askDelete = false;

    constructor(private modalService: NgbModal, private activeModal: NgbActiveModal,
                private formBuilder: FormBuilder, private administratorService: AdministratorService) { }

    ngOnInit(){
    
        this.editForm = this.formBuilder.group({
            description: [null, Validators.required],
            });

        if (this.charge) {
            this.editForm.patchValue({
                description: this.charge.description,
                });

        } else {
        }
    }

    onDelete(){       
        if(!this.charge || !this.charge.id) { 
            return;
        }

        this.askDelete =  false;
        
        this.administratorService.deleteCharge(this.charge.id).subscribe(res => {
            console.log("Deleted");
            
            this.activeModal.close();
         }, (err) => {
            console.log("Delete failed");
         });
    }

    onSave(){
        let ef = this.editForm.value;

        let charge;
        if(this.charge){
            charge = this.charge;
        } else {
            charge = new Charge();
        }
        
        charge.description = ef.description;
        
            this.administratorService.saveCharge(charge).subscribe(res => {
            this.charge = res as Charge;
            this.activeModal.close();
        },
        (err => {
            console.log("Saving failed");
        }
        ));

    }

    onDismiss() {
        this.activeModal.dismiss('Dismissed!');
    }
  
    onClose() {
        this.activeModal.dismiss('Close!');
    }
  }
