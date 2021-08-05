import './style.css';

import CONVICT_JPEG from '../static/convict.jpeg';
import CUBE_SVG from '../static/rubikscube.svg';

export const App = () => {
  return (
    <>
      <img src={CONVICT_JPEG} alt={"convict's logo in jpeg format"} />
      <pre>
        Mode: {process.env.NODE_ENV} {' \n'}
        By: {process.env.name} inspired from Codevolution
      </pre>
      <img src={CUBE_SVG} alt={"linkedin's logo in svg format"} />
    </>
  );
};
