import React, { useState, useEffect } from "react";

const useDebounce = (search) => {
  const [debounceSearch, setDebounceSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 2000);
    return () => clearTimeout(timer);
  }, [search]);

  return { debounceSearch };
};

export default useDebounce;
