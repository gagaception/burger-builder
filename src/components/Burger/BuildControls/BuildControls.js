import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Meat', type: 'meat'},
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctr => (
      <BuildControl key={ctr.label} label={ctr.label}/>
    ))}
  </div>
);

export default buildControls;
