import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client'

const Home = ({products, bannerData}) => {
  return ( 
    <>
      <HeroBanner heroBanner = { bannerData.length && bannerData[0]  } />
        
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many Variations</p>
      </div>

      <div className="products-container">
        { products?.map((product) => product.name

        )}
      </div>

      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  // fetch all products from sanity dashboard
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // fetch banner from sanity dashboard
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // Whatever serverside props returns gets passed to our index function 
  return {
    props: {
      products, bannerData
    }
  }
}
export default Home