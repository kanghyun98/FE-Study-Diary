export default class SearchSection {
  constructor({ $target, onSearch }) {
    this.onSearch = onSearch;

    this.section = document.createElement('section');
    this.section.className = 'search-section';

    $target.appendChild(this.section);

    this.render();
  }

  render() {
    const searchInput = document.createElement('input');
    searchInput.className = 'search-section__box';
    searchInput.placeholder = '검색어를 입력하세요';
    searchInput.type = 'search';

    searchInput.addEventListener('search', () => {
      this.onSearch(searchInput.value); //검색값으로 찾기
    });

    this.section.appendChild(searchInput);
  }
}
