
import React, {useState} from 'react';

function MarcoPolo(){
  const [marcoPolo, setMarcoPolo] = useState("Marco");
  const [marcoPoloToggler, setMarcoPoloToggler] = useState("Polo");

  const toggleMarcoPolo = () => {
    marcoPolo === "Marco" ? setMarcoPolo("Polo") : setMarcoPolo("Marco");
    marcoPoloToggler === "Polo" ? setMarcoPoloToggler("Marco") : setMarcoPoloToggler("Polo");
  };

  return (
    <div>
      <h1 id="marco-polo">{marcoPolo}</h1>
      <button id="marco-polo-toggler" onClick={toggleMarcoPolo}>{marcoPoloToggler}</button>
    </div>
  );
}

export default MarcoPolo;
