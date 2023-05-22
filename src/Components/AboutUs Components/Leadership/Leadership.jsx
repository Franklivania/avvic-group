import React from 'react';
import './Leadership.scss';
import BOD from '../BoardOfDirectors/BOD';
import HOD from '../HeadOfDepartments/HOD';
import MT from '../ManagementTeam/MT';

const Leadership = ({ activeSubLink }) => {
  return (
    <div id="leadership">
      leadership
      {activeSubLink === 'bod' && <BOD />}
      {activeSubLink === 'hop' && <HOD />}
      {activeSubLink === 'mt' && <MT />}
    </div>
  );
};

export default Leadership;
