import React from 'react';
import ClassyMainContext from './ClassyMainContext';
import ClassyMiddle from './ClassyChildren';

export default class Classy extends React.Component<{},{}> {

  render(){
    return(
      <div className="wrap">
        <p>
          <ClassyMainContext>
            <ClassyMiddle />
          </ClassyMainContext>
        </p>
      </div>
    )
  }
}

