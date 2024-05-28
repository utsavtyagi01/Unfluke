import { avatarImages } from './const/avatarImg';

function Avatars(props) {
  return (
    <div className="container px-1 justify-content-center" style={{ height: '100px' }}>
      <h2 className="text-center text-white font-alt mb-4">UNFLUKE <i className="bi-heart-fill"></i></h2>
      <div className="container text-center px-3 my-2">
        {Object.keys(avatarImages)?.map((pName, index) =>
          <span key={index}>
            <img src={process.env.PUBLIC_URL + avatarImages[pName]} alt={pName + 'avatar'} width="80" />
          </span>
        )}
      </div>
      <div className="container text-center px-5">
        <a href="#page-top" className="btn btn-outline-light py-3 px-4 rounded-pill">Go to Top!</a>
      </div>
    </div>
  );
}

export default Avatars;
