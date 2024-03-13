import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DietBlockContainer } from './DietCardsList.styled';

import { getAllProducts } from '../../../redux/products/operations';
import { ProductsItem } from '../ProductsItem/ProductsItem';
import {
  selectAllProducts,
  selectIsLoading,
} from '../../../redux/products/selectors';
import { Loader } from '../../Loader/Loader';

import { EmptyProductsListMessage } from '../EmptyProductsListMessage/EmptyProductsListMessage';
// import { selectFilter } from '../../../redux/products/selectors';
import {SelectUser} from '../../../redux/profile/selectors'

export const DietCardsList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const userBloodType = useSelector(SelectUser).blood;
  // const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // const bloodType = '3';

  // const products = useSelector(selectAllProducts)
  //   // .slice(0, 1000) //можна залишити замість пагінації. Не таке сильне навантаження будуе. І лагів менше
  //   .map((item) => ({
  //     ...item,
  //     recommended: item.groupBloodNotAllowed[bloodType],
  //   }));

  const products = useSelector(selectAllProducts)
  console.log(products)

  // const filteredCards = filterProduct(products, filter);

  // треба описати логіку закриття модалки по бекдропу і по Esc

  return (
    <>
      {/* Лоадер якогось хєра не застосовується 
      також треба обробити повідомлення про пустий список*/}
      <DietBlockContainer>
        {isLoading ? (
          <Loader />
        ) : products.length === 0 ? (
          <EmptyProductsListMessage />
        ) : (
          products.map((item) => (
            <ProductsItem key={item._id} value={item} blood={userBloodType} />
          ))
        )}
      </DietBlockContainer>
    </>
  );
};
