export const sortByTitle = (dataSource = [], orderBy = 'asc') => {
  const res = [...dataSource].sort((a, b) => orderBy === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
  return res;
}