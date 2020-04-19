import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { tempMasterData, tempRuleHeaderDetails, tempProductModel } from './temp-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public constructor(private persistenceService: PersistenceService, ) {
    this.persistenceService.set('masterData', tempMasterData, { type: StorageType.SESSION });
    this.persistenceService.set('ruleHeaderDetails',
      tempRuleHeaderDetails, { type: StorageType.SESSION });
    this.persistenceService.set('productModel', tempProductModel, { type: StorageType.SESSION });
  }
}
