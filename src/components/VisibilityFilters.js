import React from "react";
import { useTodoStore } from "../models/todo";
import { VISIBILITY_FILTERS } from "../constants";

export default function VisibilityFilters() {
  const { activeFilter, setActiveFilter } = useTodoStore();
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={`filter ${
              currentFilter === activeFilter && "filter--active"
            }`}
            onClick={() => {
              setActiveFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
}
