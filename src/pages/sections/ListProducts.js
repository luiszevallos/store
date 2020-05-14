import React from 'react';
import TitleSearch from '../components/TitleSearch';
import './styles/listproducts.css'
import Products from '../components/Products';
import { connect } from 'react-redux';
import { useSearchFilter } from '../Utils/filter';

function ListProducts(props) {
  const { products } = props;
  const {search, setSearch, filteredDatos} = useSearchFilter(products)
  return (
    <section className="List_products">
      <TitleSearch 
        value={search}
        onChange={({target: {value}}) => {
          setSearch(value);
        }}
        cant={filteredDatos.length}
      />
      <Products lists={filteredDatos} />
    </section>
  );
}

const mapStateToProps = ({ data }) => {
  return {
    products: data.products,
  };
};

export default connect(mapStateToProps)(ListProducts);
