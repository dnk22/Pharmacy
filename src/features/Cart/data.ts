export type dataProps = {
  id: string;
  image: any;
  title: string;
  subTitle: string;
  priceOrigin: string;
  priceDiscount: string;
  amount: number;
};
export const data: dataProps[] = [
  {
    id: '1',
    image: require('../../assets/images/men1.png'),
    title: 'Peter England Causual',
    subTitle: 'Printed Longline Pure Cotteon T-shirt',
    priceOrigin: '$158.2',
    priceDiscount: '$170',
    amount: 1,
  },
  {
    id: '3',
    image: require('../../assets/images/girl.png'),
    title: 'Peter England Causual',
    subTitle: 'Printed Longline Pure Cotteon T-shirt',
    priceOrigin: '$158.2',
    priceDiscount: '$170',
    amount: 2,
  },
  {
    id: '2',
    image: require('../../assets/images/men1.png'),
    title: 'Peter England Causual',
    subTitle: 'Printed Longline Pure Cotteon T-shirt',
    priceOrigin: '$158.2',
    priceDiscount: '$170',
    amount: 3,
  },
];
