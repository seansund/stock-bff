import {AutoWired, Inject, Singleton} from 'typescript-ioc';
import {GET, Path} from 'typescript-rest';

import {StockItemsApi} from '../services';
import {StockItemModel} from '../models/stock-item.model';
import {LoggerApi} from '../logger';

@AutoWired
@Singleton
@Path('/stock-service')
export class StockServiceController {
  @Inject
  service: StockItemsApi;
  @Inject
  _logger: LoggerApi;

  get logger(): LoggerApi {
    return this._logger.child('StockServiceController');
  }

  @GET
  async listStockItems(): Promise<StockItemModel[]> {
    this.logger.info('got stock-service request');
    return this.service.listStockItems();
  }
}
