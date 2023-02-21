export const filterData = [
  {
    items: [
      { name: "Lowest Price", value: "price-asc" },
      { name: "Highest Price", value: "price-desc" },
      { name: "Oldest", value: "date-desc" },
      { name: "Verified", value: "verified-score" },
      { name: "City Level Score", value: "city-level-score" },
    ],
    placeholder: "Sort",
    queryName: "sort",
  },

  {
    items: [
      { name: "50,000", value: "50000" },
      { name: "60,000", value: "60000" },
      { name: "85,000", value: "85000" },
      { name: "110,000", value: "110000" },
      { name: "135,000", value: "135000" },
      { name: "160,000", value: "160000" },
      { name: "185,000", value: "185000" },
      { name: "200,000", value: "200000" },
      { name: "300,000", value: "300000" },
      { name: "400,000", value: "400000" },
      { name: "500,000", value: "500000" },
      { name: "600,000", value: "600000" },
      { name: "700,000", value: "700000" },
      { name: "800,000", value: "800000" },
      { name: "900,000", value: "900000" },
      { name: "1000,000", value: "1000000" },
    ],
    placeholder: "Max Price(AED)",
    queryName: "priceMax",
  },
  {
    items: [
      { name: "Unfurnished", value: "unfurnished" },
      { name: "Furnished", value: "furnished" },
    ],
    placeholder: "Furnish Type",
    queryName: "furnishingStatus",
  },

  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Rooms",
    queryName: "roomsMin",
  },
];

export const getFilterValues = (filterValues) => {
  const { categoryExternalID, maxPrice, roomsMin } = filterValues;

  const values = [
    {
      name: "maxPrice",
      value: maxPrice,
    },

    {
      name: "roomsMin",
      value: roomsMin,
    },

    {
      name: "categoryExternalID",
      value: categoryExternalID,
    },
  ];

  return values;
};
