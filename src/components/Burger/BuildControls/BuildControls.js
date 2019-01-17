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
    <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctr => (
      <BuildControl
        key={ctr.label}
        label={ctr.label}
        added={() => props.ingredientAdded(ctr.type)}
        removed={() => props.ingredientRemoved(ctr.type)}
        disabled={props.disabled[ctr.type]}/>
    ))}
  </div>
);

export default buildControls;
