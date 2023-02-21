import React, { useState } from "react";
import { filterData } from "../../utils/filteredData";
import "./InputArea.css";

const InputArea = ({ getFilters }) => {
  /* Creating a state variable called filteredData and a function called setFilteredData to keep track of applied filters */
  const [filteredData, setFilteredData] = useState({
    sort: "",
    priceMax: "",
    furnishingStatus: "",
    roomsMin: "",
  });

  /**
   * It takes two arguments, a string and a value, and then sets the state of filteredData to a new
   * object with the string as the key and the value as the value.
   * @param filterQuery - the property of the object you want to filter by
   * @param filterValue - the value of the input field
   */
  const searchProperty = (filterQuery, filterValue) => {
    setFilteredData({ ...filteredData, [filterQuery]: filterValue });
    console.log(filteredData);
  };

  /**
   * When the user clicks the submit button, the getFilters function is called and the filteredData
   * variable is passed to it.
   */
  const handleSubmit = () => {
    getFilters(filteredData);
  };

  return (
    <>
      <div className="center-div">
        <h1>Search Properties to Rent</h1>
        <h6>Apply all four filters to make it work</h6>

        <div className="filtering-container">
          <ul className="filters-container">
            {filterData.map((filter) => (
              <li key={filter.queryName}>
                <p>{filter.placeholder}</p>
                <select
                  onChange={(e) =>
                    searchProperty(filter.queryName, e.target.value)
                  }
                >
                  {filter?.items?.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </li>
            ))}
            <li>
              <button onClick={() => handleSubmit()} className="search-btn">
                Sort
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InputArea;
