import { createNewAccountSuccess } from 'src/store/actions';

import LinkCuston from 'src/components/LinkCustom';

import { modalSignupData } from 'src/data/modalData';

function SignupModal() {
  return (
    <div className="signup__modal">
      <h2 className="signup__modal-title">Bienvenue</h2>
      <p className="signup__modal-text">
        Maintenant que vous avez cree un compte vous pouvez vous connecter
      </p>
      {modalSignupData.map((modal) => (
        <LinkCuston
          key={modal.id}
          className="signup__modal-button"
          action={createNewAccountSuccess}
          link={modal.link}
          text={modal.text}
        />
      ))}
    </div>
  );
}

export default SignupModal;
