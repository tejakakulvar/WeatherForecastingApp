import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function calculateaverage(input) {
  return (_.round(_.sum(input)/input.length));
};

export default (props) => {
  return(
    <div>
      <Sparklines height={100} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>
        {calculateaverage(props.data)} {props.units}
      </div>
    </div>
  )
}
