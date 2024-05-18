
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector(".search button");
  const searchInput = document.querySelector(".search input");

  console.log(searchButton, searchInput);

  searchButton.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase().trim();
      console.log("Search query:", query);

      let url = "";

      switch(query) {
          case "the great gatsby":
              url = "thegreatgatsby.html";
              break;
          case "ulysses":
              url = "ulysses.html";
              break;
          case "nineteen eighty four":
          case "1984":
              url = "nineteeneightyfour.html";
              break;
          default:
              alert("Book not found!");
              return;
      }

      console.log("Redirecting to:", url);
      window.location.href = url;
  });
});
