import { useDispatch } from 'react-redux';

import './newsletter.scss';

function NewsLetter() {
  const dispatch = useDispatch();

  const handleSubmitNewsLetter = (e) => {
    e.preventDefault();
  };

  const handleCloseModal = () => {
    dispatch({ type: 'UNACTIVE_NEWSLETTER' });
  };

  return (
    <main className="newsletter">
      <div className="newsletter__container">
        <h1 className="newsletter__container-title">NewsLetter</h1>
        <button
          className="newsletter__container-close"
          type="button"
          onClick={handleCloseModal}
        >
          X
        </button>
        <form
          className="newsletter__container__form"
          onSubmit={handleSubmitNewsLetter}
        >
          <input
            className="newsletter__container__form-input"
            placeholder="Votre email"
          />
          <button className="newsletter__container__form-button" type="submit">
            Valider
          </button>
        </form>
      </div>
    </main>
  );
}

export default NewsLetter;
