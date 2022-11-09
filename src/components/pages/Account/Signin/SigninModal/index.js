import { closeModalSignin } from 'src/store/actions';

import LinkCuston from 'src/components/LinkCustom';

import { modalSigninData } from 'src/data/modalData';

function SigninModal() {
  return (
    <div className="signin__modal">
      <h2 className="signin__modal-title">Vous etes connecter !</h2>
      <p className="signin__modal-text">Ou voulez vous allez ?</p>
      <nav className="signin__modal__nav">
        {modalSigninData.map((modal) => (
          <LinkCuston
            key={modal.id}
            className="signin__modal__nav-items"
            action={closeModalSignin}
            link={modal.link}
            text={modal.text}
          />
        ))}
      </nav>
    </div>
  );
}

export default SigninModal;
