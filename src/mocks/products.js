import { productStatus } from '../models/productStatus'

export const products = [
  [
    {
      id: 0,
      image:
        'https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg',
      title: 'Grapes',
      info: '1kg',
      status: productStatus.none,
      price: 3,
      prevPrice: 5,
    },
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_960_720.jpg',
      title: 'Farfour Cup',
      info: 'Just a regular cup of tea',
      status: productStatus.none,
      price: 12,
      prevPrice: 20,
    },
    {
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2018/11/12/20/34/spices-3811727_960_720.jpg',
      title: 'Spices',
      info: 'Just a regular spices',
      status: productStatus.onSales,
      price: 100,
      prevPrice: 200,
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2014/06/26/08/56/cutlery-377700_960_720.jpg',
      title: 'Tea set',
      info:
        'This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set!',
      status: productStatus.goodPrice,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 4,
      image:
        'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
      title: 'Olive',
      info: '5l',
      status: productStatus.none,
      price: 14,
      prevPrice: null,
    },
    {
      id: 5,
      image:
        'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg',
      title: 'Strawberry',
      info: 'Strawberry, 5kg',
      status: productStatus.none,
      price: 16,
      prevPrice: 10,
    },
    {
      id: 6,
      image:
        'https://cdn.pixabay.com/photo/2021/09/17/12/12/coffee-6632524_960_720.jpg',
      title: 'Coffe',
      info: 'NesCoffe 15kg',
      status: productStatus.onSales,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 7,
      image:
        'https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_960_720.jpg',
      title: 'Yogurt',
      info: '500ml',
      status: productStatus.none,
      price: 3,
      prevPrice: null,
    },
    {
      id: 8,
      image:
        'https://cdn.pixabay.com/photo/2017/07/16/22/22/bath-oil-2510783_960_720.jpg',
      title: 'Bath oil',
      info: 'Harmony and calming',
      status: productStatus.onSales,
      price: 30,
      prevPrice: 40,
    },
    {
      id: 9,
      image:
        'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg',
      title: 'IMac 16',
      info: 'IMac 3023',
      status: productStatus.goodPrice,
      price: 1600,
      prevPrice: 0,
    },
    {
      id: 10,
      image:
        'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg',
      title: 'MacBook',
      info: 'MacBook Ultra Pro',
      status: productStatus.none,
      price: 2000,
      prevPrice: null,
    },
    {
      id: 11,
      image:
        'https://cdn.pixabay.com/photo/2017/02/27/21/47/yogurt-2104327_960_720.jpg',
      title: 'Yogurt',
      info: 'Dairy product',
      status: productStatus.onSales,
      price: 5,
      prevPrice: 7,
    },
    {
      id: 12,
      image:
        'https://cdn.pixabay.com/photo/2018/02/01/19/21/easter-3123834_960_720.jpg',
      title: 'Eggs',
      info: 'Easter eggs',
      status: productStatus.none,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 13,
      image:
        'https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_960_720.jpg',
      title: 'Bread',
      info: 'Baked goods',
      status: productStatus.none,
      price: 1,
      prevPrice: null,
    },
    {
      id: 14,
      image:
        'https://cdn.pixabay.com/photo/2016/07/03/23/18/raspberries-1495713_960_720.jpg',
      title: 'Raspberries',
      info: '1kg',
      status: productStatus.onSales,
      price: 10,
      prevPrice: 20,
    },
    {
      id: 15,
      image:
        'https://cdn.pixabay.com/photo/2018/05/29/23/18/potato-3440360_960_720.jpg',
      title: 'Potato',
      info: '10kg',
      status: productStatus.goodPrice,
      price: 10,
      prevPrice: null,
    },
    {
      id: 16,
      image:
        'https://cdn.pixabay.com/photo/2015/03/04/09/55/walnut-658569_960_720.jpg',
      title: 'Nut',
      info: '500g',
      status: productStatus.none,
      price: 2,
      prevPrice: 10,
    },
    {
      id: 17,
      image:
        'https://cdn.pixabay.com/photo/2010/12/13/10/24/cheese-2785_960_720.jpg',
      title: 'Cheese',
      info: 'Cheese wheel',
      status: productStatus.onSales,
      price: 100,
      prevPrice: 111,
    },
    {
      id: 18,
      image:
        'https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_960_720.jpg',
      title: 'Ice cream',
      info: 'Dessert',
      status: productStatus.none,
      price: 3,
      prevPrice: 20,
    },
    {
      id: 19,
      image:
        'https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_960_720.jpg',
      title: 'Cherries',
      info: '10kg',
      status: productStatus.onSales,
      price: 10,
      prevPrice: 12,
    },
  ],
  [
    {
      id: 20,
      image:
        'https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg',
      title: 'Grapes',
      info: '1kg',
      status: productStatus.none,
      price: 3,
      prevPrice: 5,
    },
    {
      id: 21,
      image:
        'https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_960_720.jpg',
      title: 'Farfour Cup',
      info: 'Just a regular cup of tea',
      status: productStatus.none,
      price: 12,
      prevPrice: 20,
    },
    {
      id: 22,
      image:
        'https://cdn.pixabay.com/photo/2018/11/12/20/34/spices-3811727_960_720.jpg',
      title: 'Spices',
      info: 'Just a regular spices',
      status: productStatus.onSales,
      price: 100,
      prevPrice: 200,
    },
    {
      id: 23,
      image:
        'https://cdn.pixabay.com/photo/2014/06/26/08/56/cutlery-377700_960_720.jpg',
      title: 'Tea set',
      info:
        'This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set!',
      status: productStatus.goodPrice,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 24,
      image:
        'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
      title: 'Olive',
      info: '5l',
      status: productStatus.none,
      price: 14,
      prevPrice: null,
    },
    {
      id: 25,
      image:
        'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg',
      title: 'Strawberry',
      info: 'Strawberry, 5kg',
      status: productStatus.none,
      price: 16,
      prevPrice: 10,
    },
    {
      id: 26,
      image:
        'https://cdn.pixabay.com/photo/2021/09/17/12/12/coffee-6632524_960_720.jpg',
      title: 'Coffe',
      info: 'NesCoffe 15kg',
      status: productStatus.onSales,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 27,
      image:
        'https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_960_720.jpg',
      title: 'Yogurt',
      info: '500ml',
      status: productStatus.none,
      price: 3,
      prevPrice: null,
    },
    {
      id: 28,
      image:
        'https://cdn.pixabay.com/photo/2017/07/16/22/22/bath-oil-2510783_960_720.jpg',
      title: 'Bath oil',
      info: 'Harmony and calming',
      status: productStatus.onSales,
      price: 30,
      prevPrice: 40,
    },
    {
      id: 29,
      image:
        'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg',
      title: 'IMac 16',
      info: 'IMac 3023',
      status: productStatus.goodPrice,
      price: 1600,
      prevPrice: 0,
    },
    {
      id: 30,
      image:
        'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg',
      title: 'MacBook',
      info: 'MacBook Ultra Pro',
      status: productStatus.none,
      price: 2000,
      prevPrice: null,
    },
    {
      id: 31,
      image:
        'https://cdn.pixabay.com/photo/2017/02/27/21/47/yogurt-2104327_960_720.jpg',
      title: 'Yogurt',
      info: 'Dairy product',
      status: productStatus.onSales,
      price: 5,
      prevPrice: 7,
    },
    {
      id: 32,
      image:
        'https://cdn.pixabay.com/photo/2018/02/01/19/21/easter-3123834_960_720.jpg',
      title: 'Eggs',
      info: 'Easter eggs',
      status: productStatus.none,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 33,
      image:
        'https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_960_720.jpg',
      title: 'Bread',
      info: 'Baked goods',
      status: productStatus.none,
      price: 1,
      prevPrice: null,
    },
    {
      id: 34,
      image:
        'https://cdn.pixabay.com/photo/2016/07/03/23/18/raspberries-1495713_960_720.jpg',
      title: 'Raspberries',
      info: '1kg',
      status: productStatus.onSales,
      price: 10,
      prevPrice: 20,
    },
    {
      id: 35,
      image:
        'https://cdn.pixabay.com/photo/2018/05/29/23/18/potato-3440360_960_720.jpg',
      title: 'Potato',
      info: '10kg',
      status: productStatus.goodPrice,
      price: 10,
      prevPrice: null,
    },
    {
      id: 36,
      image:
        'https://cdn.pixabay.com/photo/2015/03/04/09/55/walnut-658569_960_720.jpg',
      title: 'Nut',
      info: '500g',
      status: productStatus.none,
      price: 2,
      prevPrice: 10,
    },
    {
      id: 37,
      image:
        'https://cdn.pixabay.com/photo/2010/12/13/10/24/cheese-2785_960_720.jpg',
      title: 'Cheese',
      info: 'Cheese wheel',
      status: productStatus.onSales,
      price: 100,
      prevPrice: 111,
    },
    {
      id: 38,
      image:
        'https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_960_720.jpg',
      title: 'Ice cream',
      info: 'Dessert',
      status: productStatus.none,
      price: 3,
      prevPrice: 20,
    },
    {
      id: 39,
      image:
        'https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_960_720.jpg',
      title: 'Cherries',
      info: '10kg',
      status: productStatus.onSales,
      price: 10,
      prevPrice: 12,
    },
  ],
  [
    {
      id: 40,
      image:
        'https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg',
      title: 'Grapes',
      info: '1kg',
      status: productStatus.none,
      price: 3,
      prevPrice: 5,
    },
    {
      id: 41,
      image:
        'https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_960_720.jpg',
      title: 'Farfour Cup',
      info: 'Just a regular cup of tea',
      status: productStatus.none,
      price: 12,
      prevPrice: 20,
    },
    {
      id: 42,
      image:
        'https://cdn.pixabay.com/photo/2018/11/12/20/34/spices-3811727_960_720.jpg',
      title: 'Spices',
      info: 'Just a regular spices',
      status: productStatus.onSales,
      price: 100,
      prevPrice: 200,
    },
    {
      id: 43,
      image:
        'https://cdn.pixabay.com/photo/2014/06/26/08/56/cutlery-377700_960_720.jpg',
      title: 'Tea set',
      info:
        'This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set!',
      status: productStatus.goodPrice,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 44,
      image:
        'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
      title: 'Olive',
      info: '5l',
      status: productStatus.none,
      price: 14,
      prevPrice: null,
    },
    {
      id: 45,
      image:
        'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg',
      title: 'Strawberry',
      info: 'Strawberry, 5kg',
      status: productStatus.none,
      price: 16,
      prevPrice: 10,
    },
    {
      id: 46,
      image:
        'https://cdn.pixabay.com/photo/2021/09/17/12/12/coffee-6632524_960_720.jpg',
      title: 'Coffe',
      info: 'NesCoffe 15kg',
      status: productStatus.onSales,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 47,
      image:
        'https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_960_720.jpg',
      title: 'Yogurt',
      info: '500ml',
      status: productStatus.none,
      price: 3,
      prevPrice: null,
    },
    {
      id: 48,
      image:
        'https://cdn.pixabay.com/photo/2017/07/16/22/22/bath-oil-2510783_960_720.jpg',
      title: 'Bath oil',
      info: 'Harmony and calming',
      status: productStatus.onSales,
      price: 30,
      prevPrice: 40,
    },
    {
      id: 49,
      image:
        'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg',
      title: 'IMac 16',
      info: 'IMac 3023',
      status: productStatus.goodPrice,
      price: 1600,
      prevPrice: 0,
    },
    {
      id: 50,
      image:
        'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg',
      title: 'MacBook',
      info: 'MacBook Ultra Pro',
      status: productStatus.none,
      price: 2000,
      prevPrice: null,
    },
    {
      id: 51,
      image:
        'https://cdn.pixabay.com/photo/2017/02/27/21/47/yogurt-2104327_960_720.jpg',
      title: 'Yogurt',
      info: 'Dairy product',
      status: productStatus.onSales,
      price: 5,
      prevPrice: 7,
    },
    {
      id: 52,
      image:
        'https://cdn.pixabay.com/photo/2018/02/01/19/21/easter-3123834_960_720.jpg',
      title: 'Eggs',
      info: 'Easter eggs',
      status: productStatus.none,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 53,
      image:
        'https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_960_720.jpg',
      title: 'Bread',
      info: 'Baked goods',
      status: productStatus.none,
      price: 1,
      prevPrice: null,
    },
    {
      id: 54,
      image:
        'https://cdn.pixabay.com/photo/2016/07/03/23/18/raspberries-1495713_960_720.jpg',
      title: 'Raspberries',
      info: '1kg',
      status: productStatus.onSales,
      price: 10,
      prevPrice: 20,
    },
    {
      id: 55,
      image:
        'https://cdn.pixabay.com/photo/2018/05/29/23/18/potato-3440360_960_720.jpg',
      title: 'Potato',
      info: '10kg',
      status: productStatus.goodPrice,
      price: 10,
      prevPrice: null,
    },
    {
      id: 56,
      image:
        'https://cdn.pixabay.com/photo/2015/03/04/09/55/walnut-658569_960_720.jpg',
      title: 'Nut',
      info: '500g',
      status: productStatus.none,
      price: 2,
      prevPrice: 10,
    },
    {
      id: 57,
      image:
        'https://cdn.pixabay.com/photo/2010/12/13/10/24/cheese-2785_960_720.jpg',
      title: 'Cheese',
      info: 'Cheese wheel',
      status: productStatus.onSales,
      price: 100,
      prevPrice: 111,
    },
    {
      id: 58,
      image:
        'https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_960_720.jpg',
      title: 'Ice cream',
      info: 'Dessert',
      status: productStatus.none,
      price: 3,
      prevPrice: 20,
    },
    {
      id: 59,
      image:
        'https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_960_720.jpg',
      title: 'Cherries',
      info: '10kg',
      status: productStatus.onSales,
      price: 10,
      prevPrice: 12,
    },
  ],
  [
    {
      id: 60,
      image:
        'https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg',
      title: 'Grapes',
      info: '1kg',
      status: productStatus.none,
      price: 3,
      prevPrice: 5,
    },
    {
      id: 61,
      image:
        'https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_960_720.jpg',
      title: 'Farfour Cup',
      info: 'Just a regular cup of tea',
      status: productStatus.none,
      price: 12,
      prevPrice: 20,
    },
    {
      id: 62,
      image:
        'https://cdn.pixabay.com/photo/2018/11/12/20/34/spices-3811727_960_720.jpg',
      title: 'Spices',
      info: 'Just a regular spices',
      status: productStatus.onSales,
      price: 100,
      prevPrice: 200,
    },
    {
      id: 63,
      image:
        'https://cdn.pixabay.com/photo/2014/06/26/08/56/cutlery-377700_960_720.jpg',
      title: 'Tea set',
      info:
        'This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set! This is brilliant tea set!',
      status: productStatus.goodPrice,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 64,
      image:
        'https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_960_720.jpg',
      title: 'Olive',
      info: '5l',
      status: productStatus.none,
      price: 14,
      prevPrice: null,
    },
    {
      id: 65,
      image:
        'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg',
      title: 'Strawberry',
      info: 'Strawberry, 5kg',
      status: productStatus.none,
      price: 16,
      prevPrice: 10,
    },
    {
      id: 66,
      image:
        'https://cdn.pixabay.com/photo/2021/09/17/12/12/coffee-6632524_960_720.jpg',
      title: 'Coffe',
      info: 'NesCoffe 15kg',
      status: productStatus.onSales,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 67,
      image:
        'https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_960_720.jpg',
      title: 'Yogurt',
      info: '500ml',
      status: productStatus.none,
      price: 3,
      prevPrice: null,
    },
    {
      id: 68,
      image:
        'https://cdn.pixabay.com/photo/2017/07/16/22/22/bath-oil-2510783_960_720.jpg',
      title: 'Bath oil',
      info: 'Harmony and calming',
      status: productStatus.onSales,
      price: 30,
      prevPrice: 40,
    },
    {
      id: 69,
      image:
        'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg',
      title: 'IMac 16',
      info: 'IMac 3023',
      status: productStatus.goodPrice,
      price: 1600,
      prevPrice: 0,
    },
    {
      id: 70,
      image:
        'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_960_720.jpg',
      title: 'MacBook',
      info: 'MacBook Ultra Pro',
      status: productStatus.none,
      price: 2000,
      prevPrice: null,
    },
    {
      id: 71,
      image:
        'https://cdn.pixabay.com/photo/2017/02/27/21/47/yogurt-2104327_960_720.jpg',
      title: 'Yogurt',
      info: 'Dairy product',
      status: productStatus.onSales,
      price: 5,
      prevPrice: 7,
    },
    {
      id: 72,
      image:
        'https://cdn.pixabay.com/photo/2018/02/01/19/21/easter-3123834_960_720.jpg',
      title: 'Eggs',
      info: 'Easter eggs',
      status: productStatus.none,
      price: 4,
      prevPrice: 10,
    },
    {
      id: 73,
      image:
        'https://cdn.pixabay.com/photo/2018/06/10/20/30/bread-3467243_960_720.jpg',
      title: 'Bread',
      info: 'Baked goods',
      status: productStatus.none,
      price: 1,
      prevPrice: null,
    },
    {
      id: 74,
      image:
        'https://cdn.pixabay.com/photo/2016/07/03/23/18/raspberries-1495713_960_720.jpg',
      title: 'Raspberries',
      info: '1kg',
      status: productStatus.onSales,
      price: 10,
      prevPrice: 20,
    },
    {
      id: 75,
      image:
        'https://cdn.pixabay.com/photo/2018/05/29/23/18/potato-3440360_960_720.jpg',
      title: 'Potato',
      info: '10kg',
      status: productStatus.goodPrice,
      price: 10,
      prevPrice: null,
    },
    {
      id: 76,
      image:
        'https://cdn.pixabay.com/photo/2015/03/04/09/55/walnut-658569_960_720.jpg',
      title: 'Nut',
      info: '500g',
      status: productStatus.none,
      price: 2,
      prevPrice: 10,
    },
    {
      id: 77,
      image:
        'https://cdn.pixabay.com/photo/2010/12/13/10/24/cheese-2785_960_720.jpg',
      title: 'Cheese',
      info: 'Cheese wheel',
      status: productStatus.onSales,
      price: 100,
      prevPrice: 111,
    },
    {
      id: 78,
      image:
        'https://cdn.pixabay.com/photo/2017/11/30/08/56/ice-cream-2987955_960_720.jpg',
      title: 'Ice cream',
      info: 'Dessert',
      status: productStatus.none,
      price: 3,
      prevPrice: 20,
    },
    {
      id: 79,
      image:
        'https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_960_720.jpg',
      title: 'Cherries',
      info: '10kg',
      status: productStatus.onSales,
      price: 10,
      prevPrice: 12,
    },
  ],
]
