import { useState } from "react";
import DATA from "../data/data.json";

const ITEMS_PER_PAGE = 20;

interface IUseFilterData {}

export const useFilterData = () => {
  const [hasMore, setHasMore] = useState(true);

  const filterData = (key: string, start: number) => {
    const filteredData = DATA.filter((person) =>
      person.name.toLowerCase().includes(key)
    );
    if (
      start + ITEMS_PER_PAGE < filteredData.length &&
      start !== filteredData.length
    )
      setHasMore(true);
    else setHasMore(false);
    return filteredData.splice(start, ITEMS_PER_PAGE);
  };

  return {
    hasMore,
    filterData,
  };
};
