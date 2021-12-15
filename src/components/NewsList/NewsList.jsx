
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Pagination, Empty } from "antd";

import { newsContext } from "../../contexts/newsContext";
import NewsCard from "./NewsCard";


const NewsList = () => {
  const [searchParams] = useSearchParams();
  const [] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );

  const { news, newsTotalCount, getNews } =
    useContext(newsContext);

  useEffect(() => {
    getNews()
  }, [])

  return (
    
      <div>
      <div className="news-list">
       {news.length > 0 ? (
         <NewsCard/>
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