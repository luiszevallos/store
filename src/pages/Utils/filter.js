import React from 'react';

export function useSearchFilter(list) {
  const [search, setSearch] = React.useState('');
  const [filteredDatos, setFilteredDatos] = React.useState(list);
  React.useMemo(() => {
    const result = list.filter(data => {
      return `${data.marca} ${data.name}`
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setFilteredDatos(result);
  },[list, search]);

  return {search, setSearch, filteredDatos};
}