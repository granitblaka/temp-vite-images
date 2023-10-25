/* api-key 9OK5rRHSusQZh2h3Xho8gHolo2x-RM7CdPpxk6qsQ0o  */

import { useContextHook } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useContextHook();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className='title'>the Title</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
