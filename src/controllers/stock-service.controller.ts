import {AutoWired, Inject, Singleton} from 'typescript-ioc';
import {GET, Path} from 'typescript-rest';

import {StockItemsApi} from '../services';
import {StockItemModel} from '../models/stock-item.model';

@AutoWired
@Singleton
@Path('/stock-service')
export class StockServiceController {
  @Inject
  service: StockItemsApi;

  @GET
  async listStockItems(): Promise<StockItemModel[]> {
    return this.service.listStockItems();
  }
}
