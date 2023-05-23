import React, { useState } from 'react';
import './Leadership.scss';
import BOD from '../BoardOfDirectors/BOD';
import HOD from '../HeadOfDepartments/HOD';
import MT from '../ManagementTeam/MT';
import ToggleButton from '../../ToggleButton/ToggleButton';

const Leadership = () => {
  const [activeState, setActiveState] = useState(null);

  function handleClick(index) {
    setActiveState(index);
  }

  return (
    <div id="leadership">
      <div className="buttons">
        <ToggleButton
          title={"BOARD OF DIRECTORS"}
          onClick={() => handleClick(null)}
          className={`toggle ${activeState === null ? 'active' : ''}`}
        />
        <ToggleButton
          title={"HEAD OF PORTFOLIOS"}
          onClick={() => handleClick(1)}
          className={`toggle ${activeState === 1 ? 'active' : ''}`}
        />
        <ToggleButton
          title={"MANAGEMENT TEAM"}
          onClick={() => handleClick(2)}
          className={`toggle ${activeState === 2 ? 'active' : ''}`}
        />
      </div>
      {activeState === null && <BOD />}
      {activeState === 1 && <HOD />}
      {activeState === 2 && <MT />}
    </div>
  );
};

export default Leadership;
