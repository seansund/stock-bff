import {Provides} from 'typescript-ioc';
import {StockItemsApi} from './stock-items.api';
import {StockItemModel} from '../models/stock-item.model';

@Provides(StockItemsApi)
export class StockItemsService implements StockItemsApi {
  async listStockItems(): Promise<StockItemModel[]> {
    return [
      {
        name: "Lin",
        description: "123 Main Street",
        stock: 10,
        unitPrice: 10.5,
        picture: "12345",
        manufacturer: "United States"
      },
      {
        name: "Mak",
        description: "45 2nd Street",
        stock: 20,
        unitPrice: 20.0,
        picture: "78766",
        manufacturer: "United States"
      },
      {
        name: "Joe",
        description: "40 Down Street",
        stock: 30,
        unitPrice: 5.25,
        picture: "90706",
        manufacturer: "United States"
      }
    ];
  }

}
