import {Field, Float, Int, ObjectType} from 'type-graphql';

@ObjectType()
export class StockItem {
  @Field(type => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  description: string;
  @Field(type => Int)
  stock: number;
  @Field(type => Float)
  unitPrice: number;
  @Field()
  picture: string;
  @Field()
  manufacturer: string;
}
