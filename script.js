async function fetchData() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    console.log("rrrrrrrr", data);

    return data;

    // let data = fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => console.log(json[2]));
  } catch (error) {
    console.error("Error:", error);
  }
}
// fetchData();
// let F = await fetchData();
// console.log("Alfiee", F);

// // function PrintAlfred(){
// //     console.log(Alfred);

// // }

async function displayData() {
  let products = await fetchData();


  //we are calling the div element in the .html file
  let x = document.getElementById("container");

  //we are mapping the products in which we have stored our data api to HTML
  x.innerHTML = products.map((item) => {
     const {category,description, image, price,id,  rating,title}=item;
    // we use this if you want to destructing
    return `
    <div class="cardi">
      <h4>${category}</h4>
       <div><p>${description} </p></div>

      <h4>${id}</h4>
      <div>
      <img src ="${image}" alt="">
        </div>
      
      <p>${price}</p>
      <P>${rating}</P>
      <h2>${title}</h2>
      </div>
      
      `;
  });
}

displayData();

//

// let y = data.map((item) => {
//   return displayData(item);
// });

// x.innerHTML = y;
