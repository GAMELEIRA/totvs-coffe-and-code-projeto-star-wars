import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _storage: Storage) { }

  ngOnInit() {
    this.setStorage('nome', 'Gabriel');
    this.setStorage('sobrenome', 'Gameleira');
    this.getStorage('nome');
    this.getStorage('sobrenome');
  }

  setStorage(atributo: string, valor: string) {
    this._storage.set(atributo, valor);
  }

  public getStorage(atributo: string): void {
    this._storage.get(atributo).then(res => {
      console.log(res);
    });
  }

  // this._storage.ready().then(() => {

  // });

  // Storage.remove(key).then(() => { })

  // this._storage.set('name', 'Max');

  // // Or to get a key/value pair
  // this._storage.get('age').then((val) => {
  //   console.log('Your age is', val);
  // });

}
