import React, { useState, useCallback, useEffect } from "react";
import { PersonDetail } from "../../Components/PeopleDetail";
import { Spinner } from "../../Components/Spinner";

import { IPerson } from "../../types";
import { useScrolledToBottom } from "../../hooks/useScrolledToBottom";
import { useFilterData } from "../../hooks/useFilterData";

import debounce from "lodash.debounce";
import DATA from "../../data/data.json";

import "./PeopleFinder.css";

const INITIAL_DATA = DATA.filter((item, index) => index >= 0 && index < 20);

export const PeopleFinder = () => {
  const [searchKey, setSearchKey] = useState("");
  const [loadMore, setLoadMore] = useState(false);
  const { hasMore, filterData } = useFilterData();
  const [people, setPeople] = useState<IPerson[]>(() => INITIAL_DATA);

  useScrolledToBottom(() => {
    if (hasMore) {
      setLoadMore(true);
      setTimeout(() => {
        console.log("2 seconds delay spinner loader");
      }, 2000);
    }
  });

  useEffect(() => {
    if (loadMore) {
      loadMorePeople();
      setLoadMore(false);
    }
  }, [loadMore]);

  const delayedSearch = useCallback(
    debounce((key: string) => setPeople(filterData(key, 0)), 1000),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
    delayedSearch(e.target.value.toLowerCase());
  };

  const loadMorePeople = () => {
    const filteredData = filterData(searchKey, people.length);
    setPeople([...people, ...filteredData]);
  };

  return (
    <div className="people-finder">
      <h1>The People Finder</h1>
      <p>
        If you just can't find someone and need to know what they look like,
        you've come to the right place! Just type the name of the person you are
        looking for below into search box!
      </p>
      <input
        className="search-input"
        placeholder="Search in Air HQ"
        name="searchKey"
        aria-label="search-key"
        value={searchKey}
        onChange={handleChange}
      />
      <div className="persons-container">
        {people.map((person) => (
          <PersonDetail key={person.id} person={person} />
        ))}
      </div>
      {loadMore && <Spinner />}
    </div>
  );
};
