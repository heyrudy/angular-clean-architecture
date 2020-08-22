import {Component} from '@angular/core';
import {ElephantModel} from '../../core/domain/elephant.model';
import {GetAllElephantsUsecase} from '../../core/usecases/get-all-elephants.usecase';

@Component({
  selector: 'app-elephant-card',
  templateUrl: './elephant-card-list.component.html',
  styleUrls: []
})
export class ElephantCardListComponent {

  elephants: Array<ElephantModel>;

  constructor(private _getAllElephants: GetAllElephantsUsecase) {

  }

  updateElephants() {
    this.elephants = [];
    this._getAllElephants.execute().subscribe((value: ElephantModel) => {
      this.elephants.push(value);
    });
  }

  onSelect(event) {
    console.log(event.target);
  }
}
