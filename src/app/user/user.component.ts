import { Component, signal, computed, Input, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   id: string
//   avatar: string
//   name: string
// }

interface User {
  id: string
  avatar: string
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!: User

  // @Input({required: true}) avatar!:string
  // @Input({required: true}) name!:string
  // @Input({required: false}) id!:string
  @Output() select = new EventEmitter()

  // avatar = input.required<string>()
  // name = input.required<string>()

  // selectedUser = signal(DUMMY_USERS[randomIndex])
  get userImage() {
    return 'assets/users/' + this.user.avatar
  }

  // get userImage() {
  //   return 'assets/users/' + this.avatar
  // }

  onSelectUser() {
    this.select.emit(this.user.id)
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
