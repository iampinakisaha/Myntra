import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const FetchItems = () => {
  const fetchStatus =  useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    
    fetch("https://congenial-meme-x55g54p9j4g73pq99-8080.app.github.dev/", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log("Items Fetched", items);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <>
    <div>
      Fetch Done: {fetchStatus.fetchDone}
      currently Fetching: {fetchStatus.currentFetching}
    </div>
  </>
  
}

export default FetchItems