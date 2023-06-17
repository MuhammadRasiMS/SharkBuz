import React, { useState } from "react";
import "./Live.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Live = () => {
  const [datasource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (datasource.length < 200) {
      //making api call
      setTimeout(() => {
        setDataSource(datasource.concat(Array.from({ length: 20 })));
      }, 500);
    }else {
        setHasMore(false);
    }
  }
   
  return (
    <div className="contests-container">
      <div id="parentScrollDiv" className="contests-datas">
        <InfiniteScroll
          dataLength={datasource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p>You are all set!</p>}
          scrollableTarget="parentScrollDiv"
        >
          {datasource.map((item, index) => {
            return (
              <div className="cards">
                This is a div #{index + 1} inside infinite
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Live;
