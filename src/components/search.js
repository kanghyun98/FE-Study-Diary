export default class SearchSection {
  constructor({ $target, onSearch }) {
    this.onSearch = onSearch;

    this.section = document.createElement("section");
    this.section.className = ".search-section";

    $target.appendChild(this.section);

    this.render();
  }

  //
  searchByKeyword(keyword) {
    if (keyword.length == 0) return;

    this.onSearch(keyword);
  }

  render() {
    const searchInput = document.createElement("input");
    searchInput.className = "search-box";
    searchInput.placeholder = "검색어를 입력하세요.";

    searchInput.addEventListener(
      "search",
      this.searchByKeyword(searchInput.value) //검색값으로 찾기
    );

    this.section.appendChild(searchInput);
  }
}
