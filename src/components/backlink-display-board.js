import React from 'react';
import './backlink-display-board.css';

function BacklinkDisplayBoard(props) {
  console.log("props ", props);
  const backlinks = props.backlinks;
  let index = 0;
  return backlinks.length === 0 ? null :
   (
    <div className="container">
      <ul className="responsive-table">
        <li className="table-header">
        
        <div className="col col-1">#</div>
          <div className="col col-2">Backlink URL</div>
          <div className="col col-3">Status</div>
        </li>

        {backlinks.map(backlink => {
          index++;
            return (
              <li className="table-row">
                <div className="col col-1" >
                  {index}
                </div>
                <div className="col col-2" >
                  <a href={backlink} target="_blank">{backlink}</a>
                </div>
                <div className="col col-3" >
                  Success
                   </div>
              </li>)
        })}

      </ul>
    </div>);
}

export default BacklinkDisplayBoard;