import { Component, OnInit } from '@angular/core';
import { Result, Api } from './last-result-f1.interface';
import { LastResultF1Service } from './last-result-f1.service';

@Component({
  selector: 'app-last-result-f1',
  templateUrl: './last-result-f1.component.html',
  styleUrls: ['./last-result-f1.component.css']
})
export class LastResultF1Component implements OnInit {
  results: Array<Result> = [];
  raceName = '';
  constructor(private api: LastResultF1Service) { }

  ngOnInit(): void {
    this.api.get().subscribe((data: Api) => {
      const selectRace = data.MRData.RaceTable.Races[0];
      this.results = selectRace.Results;
      this.raceName = selectRace.raceName;
      console.log(this.results);
      console.log(this.raceName);
    });
  }

}
