import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuitem'>
    <div className="app__menuitem-head">
      {/* menu item title */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={ {color: '#DCCA87'} }>{title}</p>
      </div>
      <div className='app__menuitem-dash'/>
      {/* menu item price */}
      <div className="app__menuitem-name">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
