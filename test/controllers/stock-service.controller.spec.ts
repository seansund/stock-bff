import {Application} from 'express';
import * as request from 'supertest';

import {buildApiServer} from '../helper';
import Mock = jest.Mock;
import {Container} from 'typescript-ioc';
import {StockItemsApi} from '../../src/services';

describe('stock-service.controller', () => {

  let app: Application;
  let listStockItems: Mock;
  beforeEach(async () => {
    listStockItems = jest.fn();
    Container.bind(StockItemsApi).provider({
      get: () => ({
        listStockItems
      })
    });

    const apiServer = buildApiServer();

    app = await apiServer.getApp();
  });

  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given GET /stock-service', () => {
    const expectedResult = [{value: 'value'}];
    beforeEach(() => {
      listStockItems.mockResolvedValue(expectedResult);
    });

    test('should return 200 status', () => {
      return request(app).get('/stock-service').expect(200);
    });

    test('should return an array', () => {
      return request(app).get('/stock-service').expect(expectedResult);
    });
  });

});
