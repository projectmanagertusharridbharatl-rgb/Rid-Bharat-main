
//   // const searchInput = document.getElementById("searchInput");
//   // const courseCards = document.querySelectorAll(".course-card");

//   // searchInput.addEventListener("input", () => {
//   //   const query = searchInput.value.toLowerCase();

//   //   courseCards.forEach(card => {
//   //     const h2 = card.querySelector("h2");
//   //     const h3 = card.querySelector("h3");
//   //     const title = (h2?.textContent || h3?.textContent || "").toLowerCase();

//   //     if (title.includes(query)) {
//   //       card.style.display = "block";
//   //     } else {
//   //       card.style.display = "none";
//   //     }
//   //   });
//   // });


// const searchInput = document.getElementById("searchInput");
// const courseCards = document.querySelectorAll(".course-card");

// searchInput.addEventListener("input", () => {
//   const query = searchInput.value.toLowerCase();

//   courseCards.forEach(card => {
//     const h2 = card.querySelector("h2");
//     const h3 = card.querySelector("h3");
    
//     // Combine both h2 and h3 text
//     const combinedText = `${h2?.textContent || ""} ${h3?.textContent || ""}`.toLowerCase();

//     // Match against combined text
//     if (combinedText.includes(query)) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// });


    const searchInput = document.getElementById("searchInput");
    const courseCards = document.querySelectorAll(".course-card");

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();

      courseCards.forEach(card => {
        // h2 और h3 दोनों से text content लें
        const h2 = card.querySelector("h2");
        const h3 = card.querySelector("h3");
        const combinedText = `${h2 ? h2.textContent : ""} ${h3 ? h3.textContent : ""}`.toLowerCase();

        // यदि combinedText में query मौजूद है तो दिखाएं, नहीं तो छिपाएं
        if (combinedText.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
