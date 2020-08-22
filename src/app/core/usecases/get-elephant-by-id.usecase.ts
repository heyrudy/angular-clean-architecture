import {Injectable} from '@angular/core';
import {ElephantModel} from '../domain/elephant.model';
import {UseCase} from '../base/use-case';
import {Observable} from 'rxjs';
import {ElephantRepository} from '../repositories/elephant.repository';

@Injectable({
  providedIn: 'root'
})
export class GetElephantByIdUsecase implements UseCase<number, ElephantModel> {

  constructor(private _elephantRepository: ElephantRepository) {
  }

  execute(params: number): Observable<ElephantModel> {
    return this._elephantRepository.getElephantById(params);
  }
}
