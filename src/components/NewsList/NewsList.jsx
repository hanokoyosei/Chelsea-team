
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Input, Pagination, Empty } from "antd";

import { newsContext } from "../../contexts/newsContext";

import Filters from "../Filters/Filters"
import NewsCard from "./NewsCard";


const NewsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  // const [brand, setBrand] = useState([]);
  // const [price, setPrice] = useState([1, 1000000]);
  // const [showFilters, setShowFilters] = useState(false);

  const { getNews, news, newsTotalCount } =
    useContext(newsContext);
    
  // useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //     _page: page,
  //     _limit: limit,
  //     brand: brand,
  //     price_gte: price[0],
  //     price_lte: price[1],
  //   });
  // }, []);
  // useEffect(() => {
  //   getProducts();
  // }, [searchParams]);
  // useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //     _page: page,
  //     _limit: limit,
  //     brand: brand,
  //     price_gte: price[0],
  //     price_lte: price[1],
  //   });
  // }, [search, page, limit, brand, price]);
  // console.log(products);
  return (

     <div className="container" style={{ marginTop: "20px" }}>    
      <div>
        <img 
        style={{width: '100%'}} 
        src='https://1.bp.blogspot.com/-8XFYBHAySNo/YJzep_dDk4I/AAAAAAADAjA/FNbEJCbkdScHOSxXI4z07ZTp-pBvo5rzwCNcBGAsYHQ/s1600/chelsea-21-22-kit%2B%25282%2529.jpg' alt='' />
      </div>
      <div className="news-list">
       {news.length > 0 ? (
         news.map((item) => <NewsCard item={item} />)
       ) : (
         <Empty style={{ marginBottom: "20px" }} />
       )}
     </div>
     <div style={{ display: "flex", justifyContent: "center" }}>
     <Pagination
       onChange={(page, limit) => {
         setPage(page);
         setLimit(limit);
       }}
       current={+page}
       pageSize={+limit}
       defaultCurrent={1}
       total={+newsTotalCount}
     />
   </div>
     
   </div>  
  );
};

export default NewsList;