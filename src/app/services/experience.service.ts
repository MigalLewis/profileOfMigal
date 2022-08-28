import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Experience } from '../models/company.model';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private readonly afs: AngularFirestore) { }

    getExperience(): Observable<Experience[]> {
        return this.afs.collection<Experience>('Experience', ref => ref.orderBy('dateFrom', 'desc')).valueChanges();
    }
}