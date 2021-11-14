export default class NewApiService {
  constructor() {
    this.CAY_API = '24204810-4c4e56177cf5555097dc8a654';
    this.pageNumber = 1;
    this.whatToSearch = '';
  }

  async gatePage() {
    const res =
      await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.whatToSearch}&page=${this.pageNumber}&per_page=12&key=${this.CAY_API}
`);
    const { hits } = await res.json();
    this.pageNumber += 1;
    return hits;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get query() {
    return this.whatToSearch;
  }

  set query(newQuery) {
    this.whatToSearch = newQuery;
  }
}
