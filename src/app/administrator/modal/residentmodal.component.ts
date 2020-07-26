import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdministratorService } from 'src/app/services/administrator.service';
import { User } from 'src/app/model/user';
import { Resident } from 'src/app/model/resident';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-resident-modal',
  templateUrl: './residentmodal.component.html',
  styleUrls: ['./residentmodal.component.scss'],
})

export class ResidentModalComponent implements OnInit{

    @Input('resident') resident: Resident;

    residents: Array<Resident> = [];
    editForm: FormGroup;
    askDelete = false;

    rooms: Array<Room> = [];

    constructor(private modalService: NgbModal, private activeModal: NgbActiveModal,
                private formBuilder: FormBuilder, private administratorService: AdministratorService) { }

    ngOnInit(){

        this.administratorService.getRooms().subscribe(res => {
            let rooms = res as Array<Room>;
            //console.log(rooms);
        });

        this.administratorService.getResidents().subscribe(res => {
            this.residents = res as Array<Resident>;
        });

        this.editForm = this.formBuilder.group({
            fullname: [null, Validators.required],
            bankaccount: [null, Validators.required],
            room: [null, Validators.required],
        });

        if (this.resident) {
            this.editForm.patchValue({
                fullname: this.resident.fullName,
                bankaccount: this.resident.bankAccount,
                room: this.resident.room,
            });

        } else {
        }
    }

    onDelete(){       
        if(!this.resident || !this.resident.id) { 
            return;
        }

        this.askDelete = false;
        
        this.administratorService.deleteResident(this.resident.id).subscribe(res => {
            this.activeModal.close("Deleted")
         }, (err) => {
            console.log("Delete failed");
         });
    }

    onSave(){
        let ef = this.editForm.value;

        let resident;
        if(this.resident){
            resident = this.resident;
        } else {
            resident = new Resident();
        }
        
        resident.fullname = ef.fullname;
        resident.room = ef.room;
        resident.bankaccount = ef.bankaccount;

        resident = this.residents.find(obj => obj.id == ef.residentId);

        this.administratorService.saveResident(resident).subscribe(res => {
            this.resident = res as Resident;
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
