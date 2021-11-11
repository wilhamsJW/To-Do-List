import * as React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'

import './style.css'

export default function RadioButton({ selectedValue, handleChange }) {

  const CustomRadio = withStyles({
    root: {
      color: '#ffd3ca', '&$checked': { color: '3eb87a', },
    },
    checked: {},
  })((props) => <Radio color='dedault' {...props} />);

  return (
    <div className="radioOptions">
      <div>
        <CustomRadio
          checked={selectedValue === 'all'}
          onChange={e => handleChange(e.target)}
          value='all'
        />
        <span>Todos</span>
      </div>

      <div>
        <CustomRadio
          checked={selectedValue === 'true'}
          onChange={e => handleChange(e.target)}
          value='true'
        />
        <span>Prioridade</span>
      </div>

      <div>
        <CustomRadio 
          checked={selectedValue === 'false'}
          onChange={e => handleChange(e.target)}
          value='false'
        />
        <span>Normal</span>
      </div>
    </div>

  );
}






// ==================================================

// export default function RadioButton() {

//   const [selectedValue, setSelectedValue] = React.useState('a');

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <Radio
//         checked={selectedValue === 'a'}
//         onChange={handleChange}
//         value="a"
//         name="radio-buttons"
//         inputProps={{ 'aria-label': 'A' }}
//       />
//       <Radio
//         checked={selectedValue === 'b'}
//         onChange={handleChange}
//         value="b"
//         name="radio-buttons"
//         inputProps={{ 'aria-label': 'B' }}
//       />
//     </div>

//   );
// }
