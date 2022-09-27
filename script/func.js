let getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

let showFood = (data, container) => {
  container.innerHTML = null;
  data.forEach((ele) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.strMealThumb;
    let tag = document.createElement("p");
    tag.innerText = ele.strMeal;
    box.append(image, tag);
    container.append(box);
  });
};

export { getData, showFood };
