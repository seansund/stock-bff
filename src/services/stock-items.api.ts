import {StockItemModel} from '../models/stock-item.model';

export abstract class StockItemsApi {
  async abstract listStockItems(): Promise<StockItemModel[]>;
}
