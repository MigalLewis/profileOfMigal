import { Pipe, PipeTransform } from '@angular/core';
import * as firebase from 'firebase/firestore';

@Pipe({
  name: 'timestampToDate'
})
export class FirebaseToDatePipe implements PipeTransform {
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  transform(timestamp: firebase.Timestamp | {seconds:number , nanoseconds: number} ) {
    if(!timestamp) {
      return '';
    }
    const newTimestamp = new firebase.Timestamp( timestamp.seconds,timestamp.nanoseconds);
    const pastDate = new Date(1990, 7, 5, 0, 0, 0, 0);
    const monthIndex = newTimestamp.toDate().getMonth();

    let date: string| null;
    date= `${newTimestamp.toDate().getDate()} ${this.months[monthIndex]} 
    ${newTimestamp.toDate().getFullYear()}`

    const currentString = `Current`;

    let isCurrent = newTimestamp.toDate().getDate() <= pastDate.getDate() &&
    newTimestamp.toDate().getMonth() == pastDate.getMonth() &&
    newTimestamp.toDate().getFullYear() == pastDate.getFullYear()

    return isCurrent? currentString : date

  }

}
