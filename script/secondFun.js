let showFood = (data, box1) => {
  container.innerHTML = null;
  data.forEach((ele) => {
    let box = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.strMealThumb;
    let tag = document.createElement("p");
    tag.innerText = ele.strMeal;
    let type = document.createElement("h3");
    type.innerText = ele.strCategory;
    let div = document.createElement("div");
    let res = document.createElement("h1");
    res.innerText = "RECIPE";
    let inst = document.createElement("p");
    inst.innerText = ele.strInstructions;
    div.append(res, inst);
    box.append(image, tag, type, div);
    box1.append(box);
  });
};

export { showFood };
