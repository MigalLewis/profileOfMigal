import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private readonly afs: AngularFirestore) { }

    getFavouritePokemon(): Observable<Pokemon[]> {
        return this.afs.collection<Pokemon>('pokemon').valueChanges();
    }

}