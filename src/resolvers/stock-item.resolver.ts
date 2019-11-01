import {Inject} from 'typescript-ioc';
import {Query, Resolver} from 'type-graphql';

import {resolverManager} from './_resolver-manager';
import {StockItemModel} from '../models';
import {StockItem} from '../schemas';
import {StockItemsApi} from '../services';

@Resolver(of => StockItem)
export class StockItemResolver {
  @Inject
  stockItemService: StockItemsApi;

  @Query(returns => [StockItem])
  async stockItems(): Promise<StockItemModel[]> {
    return this.stockItemService.listStockItems();
  }
}

resolverManager.registerResolver(StockItemResolver);
