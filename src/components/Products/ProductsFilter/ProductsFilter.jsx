import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import {
  Filters,
  MainFiltersContainer,
  MainText,
  SearchInput,
  SearchInputBox,
  SelectorA,
  SelectorC,
  Option,
  SvgIcon,
} from './ProductsFilter.styled';
import { getProductsCategories } from '../../../redux/products/operations';
import {
  selectProductsCategories,
  selectSearchFilter,
} from '../../../redux/products/selectors';
import { setFilter } from '../../../redux/products/productsSlice';

export const ProductsFilter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsCategories());
  }, [dispatch]);

  const categoriesList = useSelector(selectProductsCategories);
  const searchFilter = useSelector(selectSearchFilter);

  return (
    <MainFiltersContainer>
      <MainText>Products</MainText>
      <Filters>
        <SearchInputBox>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchFilter}
            onChange={(evt) => dispatch(setFilter(evt.target.value))}
          />
          <SvgIcon width="18px" height="18px">
            <use xlinkHref={sprite + '#icon-search'} />
          </SvgIcon>
        </SearchInputBox>

        <SelectorC name="Categories" id="cat" placeholder="Categories">
          <Option value disabled selected>
            Categories
          </Option>
          {categoriesList.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </SelectorC>
        <SelectorA name="all" id="all">
          <Option value selected>
            All
          </Option>
          <Option value="">Recommended</Option>
          <Option value="">Not recommended</Option>
        </SelectorA>
      </Filters>
    </MainFiltersContainer>
  );
};
