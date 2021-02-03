// chave api AIzaSyDNenQyuYb6b6zWnB6jyDN50h3jdcLHmLs
const content = document.querySelector(".content");

const getLivro = () => {
  const key = "AIzaSyDNenQyuYb6b6zWnB6jyDN50h3jdcLHmLs";

  const valInput = document.getElementById("conteudo-pesquisa").value;
  const tipo = document.getElementById("select-types").value;
  console.log("OLHA ==>> " + valInput.value, tipo.value);
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=+${tipo}:${valInput}&key=${key}`
  )
    .then((res) => res.json())
    .then((data) => {
      const arrLivros = data.items;
      for (let i = 0; i < arrLivros.length; i++) {
        // console.log(arrLivros[i].volumeInfo);
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const img = document.createElement("img");
        img.setAttribute("src", arrLivros[i].volumeInfo.imageLinks.thumbnail);
        card.appendChild(img);

        const h1 = document.createElement("h1");
        h1.innerText = arrLivros[i].volumeInfo.title;
        card.appendChild(h1);

        const subtitle = document.createElement("h2");
        subtitle.innerText = arrLivros[i].volumeInfo.subtitle;
        card.appendChild(subtitle);

        const categorie = document.createElement("p");
        categorie.innerText = arrLivros[i].volumeInfo.categories;
        card.appendChild(categorie);

        const autor = document.createElement("p");
        autor.innerText = arrLivros[i].volumeInfo.authors;
        card.appendChild(autor);

        const date = document.createElement("p");
        date.innerText = arrLivros[i].volumeInfo.publishedDate;
        card.appendChild(date);

        const decription = document.createElement("p");
        decription.innerHTML = arrLivros[i].volumeInfo.description;
        card.appendChild(decription);

        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "inner-div");

        const a1 = document.createElement("a");
        a1.setAttribute("href", arrLivros[i].selfLink);
        a1.setAttribute("target", "_blank");
        a1.innerText = "API do livro";
        innerDiv.appendChild(a1);

        const a2 = document.createElement("a");
        a2.setAttribute("href", arrLivros[i].volumeInfo.infoLink);
        a2.setAttribute("target", "_blank");
        a2.innerText = "Mais informações";
        innerDiv.appendChild(a2);

        const a3 = document.createElement("a");
        a3.setAttribute("href", arrLivros[i].saleInfo.buyLink);
        a3.setAttribute("target", "_blank");
        a3.innerText = "Link de compra";
        innerDiv.appendChild(a3);

        card.appendChild(innerDiv);
        content.appendChild(card);
      }
      //console.log(data);
    });
};

document.getElementById("search-btn").addEventListener("click", getLivro);
