/**
 *
 *  This holds the urls/srcs for the bgs
 *
 */

import { CDNBGReturn } from "./CDNReturns";

const INDEX_COWS = CDNBGReturn("index", "cows-2", "webp");
const INDEX_FARMER = CDNBGReturn("index", "farmer-2", "webp");
const INDEX_FARMERS_MARKET = CDNBGReturn("index", "farmers-market-1", "webp");
const INDEX_GREENHOUSE = CDNBGReturn("index", "greenhouse-2", "webp");
const INDEX_HARVESTING = CDNBGReturn("index", "harvesting-4", "webp");
const INDEX_MILK = CDNBGReturn("index", "milk-1", "webp");
const INDEX_PETTING_1 = CDNBGReturn("index", "petting-1", "webp");
const INDEX_PETTING_2 = CDNBGReturn("index", "petting-2", "webp");
const INDEX_PRODUCE_2 = CDNBGReturn("index", "produce-2", "webp");
const INDEX_PRODUCE_5 = CDNBGReturn("index", "produce-5", "webp");

const NOTFOUND_MAIN = CDNBGReturn("404", "404-main-bg", "webp");

export {
  INDEX_COWS,
  INDEX_FARMER,
  INDEX_FARMERS_MARKET,
  INDEX_GREENHOUSE,
  INDEX_HARVESTING,
  INDEX_MILK,
  INDEX_PETTING_1,
  INDEX_PETTING_2,
  INDEX_PRODUCE_2,
  INDEX_PRODUCE_5,
};

export { NOTFOUND_MAIN };
