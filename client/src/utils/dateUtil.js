export const formatDate = (date) => {
    const d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
  
    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
};