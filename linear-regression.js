// Create two arrays x, y and fill them with 40 random numbers
const x = Array(40)
  .fill()
  .map(() => Math.floor(100 * Math.random()));
const y = Array(40)
  .fill()
  .map(() => Math.floor(100 * Math.random()));

// Function to calculate the linear regression
function linearRegression(x, y) {
  const n = x.length;

  // Calculate the sum of x, y, x^2, x*y
  let sumX = 0;
  let sumY = 0;
  let sumXX = 0;
  let sumXY = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXX += x[i] * x[i];
    sumXY += x[i] * y[i];
  }

  // Calculate the slope and the intercept
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}

// Run the function to calculate the linear regression with x,y as input variables
const regression = linearRegression(x, y);

// Print the slope and intercept to console
console.log("Slope:", regression.slope);
console.log("Intercept:", regression.intercept);
