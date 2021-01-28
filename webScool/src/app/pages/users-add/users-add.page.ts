import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.page.html',
  styleUrls: ['./users-add.page.scss'],
})
export class UsersAddPage implements OnInit {

  user : User = new User();

  constructor() { }

  ngOnInit() {
  }

  salvar(){
    console.log('Dados Salvos...', this.user);
  }

}
