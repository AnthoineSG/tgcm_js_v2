import { useDispatch, useSelector } from 'react-redux';

import { unactiveNewsletter, changeInputNewsletter } from 'src/store/actions';

import InputCustom from 'src/components/InputCustom';

import './newsletter.scss';

function NewsLetter() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.newsLetter.email);

  const handleSubmitNewsLetter = (e) => {
    e.preventDefault();
  };

  const handleCloseModal = () => {
    dispatch(unactiveNewsletter());
  };

  return (
    <div className="newsletter">
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
          <InputCustom
            className="newsletter__container__form-input"
            name="email"
            placeholder="Votre email"
            type="email"
            value={email}
            action={changeInputNewsletter}
          />

          <button className="newsletter__container__form-button" type="submit">
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
