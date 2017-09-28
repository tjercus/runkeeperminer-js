
export const extractDistance = (line) => {
  let result = parseFloat(line.split(",")[3]);
  return isNaN(result) ? 0 : result;
};

export const extractShoeName = (line, shoeNames) => {
  let shoe = "unknown";
  line = line.toLowerCase();
  shoeNames.forEach(function(shoeName) {
    if (line.indexOf(shoeName) !== -1) {
      shoe = shoeName;
    }
  });
  return shoe;
};
