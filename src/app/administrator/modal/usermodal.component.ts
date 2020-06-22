import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdministratorService } from 'src/app/services/administrator.service';
import { User } from 'src/app/model/user';
import { Resident } from 'src/app/model/resident';

@Component({
  selector: 'app-user-modal',
  templateUrl: './usermodal.component.html',
  styleUrls: ['./usermodal.component.scss'],
})

export class UserModalComponent implements OnInit{

    @Input('user') user: User;

    residents: Array<Resident> = [];
    editForm: FormGroup;
    askDelete = false;

    constructor(private modalService: NgbModal, private activeModal: NgbActiveModal,
                private formBuilder: FormBuilder, private administratorService: AdministratorService) { }

    ngOnInit(){

        this.administratorService.getResidentList().subscribe(res => {
            this.residents = res as Array<Resident>;
        });

        this.editForm = this.formBuilder.group({
            username: [null, Validators.required],
            password: [null, Validators.required],
            email: [null, Validators.required],
            residentId: [null, Validators.required],
        });

        if (this.user) {
            this.editForm.patchValue({
                username: this.user.username,
                password: this.user.password,
                email: this.user.email,
                residentId: this.user.resident.id,
            });

        } else {
        }
    }

    onDelete(){       
        if(!this.user || !this.user.id) { 
            return;
        }

        this.askDelete = false;
        
        this.administratorService.deleteUser(this.user.id).subscribe(res => {
            this.activeModal.close("Deleted")
         }, (err) => {
            console.log("Delete failed");
         });
    }

    onSave(){
        let ef = this.editForm.value;

        let user;
        if(this.user){
            user = this.user;
        } else {
            user = new User();
        }
        
        user.username = ef.username;
        user.password = ef.password;
        user.email = ef.email;

        let resident = this.residents.find(obj => obj.id == ef.residentId);
        user.resident = resident;

        this.administratorService.saveUser(user).subscribe(res => {
            this.user = res as User;
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
