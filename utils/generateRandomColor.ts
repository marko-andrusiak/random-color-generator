// Basic unsecure pseudo-random method
const generateRandomRGBColor = () => {
  const rgb = [];

  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }

  return `rgb(${rgb.join(", ")})`;
};

// True random method with Random.org API
const generateTrueRandomColor = async (): Promise<string> => {
  try {
    const API_URL =
      "https://www.random.org/integers/?num=3&min=0&max=255&col=1&base=10&format=plain&rnd=new";
    const response = await fetch(API_URL);
    const data = await response.text();
    const [r, g, b] = data.trim().split("\n").map(Number);

    return `rgb(${r}, ${g}, ${b})`;
  } catch (error) {
    console.error("Error fetching true random color:", error);
    return "#f0f0f0";
  }
};

export {
  generateRandomRGBColor,
  generateTrueRandomColor,
};
