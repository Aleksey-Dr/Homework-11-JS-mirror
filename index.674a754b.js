async function e(e){const t="https://pixabay.com/api/?key="+o+"&q="+e+"&image_type=photo&orientation=horizontal&safesearch=true",r=await fetch(t);return await r.json()}const t={searchForm:document.querySelector(".search-form"),galleryImages:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")},o="35129314-12d9f6cafbe4df38ad9bc5f6b";t.searchForm.addEventListener("submit",(function(t){t.preventDefault();const o=t.currentTarget.elements.searchQuery.value.trim();console.log(o),e(o).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.674a754b.js.map