import { useEffect, useState } from "react";

const useBookSearch = (query, pageNunmber) => {
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNunmber },
    }).then((res) => {
      console.log(res.data);
    });
  }, [query, pageNunmber]);

  return <div>useBookSearch</div>;
};

export default useBookSearch;
