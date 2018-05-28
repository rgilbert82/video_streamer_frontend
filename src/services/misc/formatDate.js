export default (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString();
}
