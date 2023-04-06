import { DivDiagram, DivHome } from 'components/App.styled';

import circular from 'img/circular.svg';

export const DivDiagramHome = () => {
  <DivHome>
    <DivDiagram>
      <img src={circular} alt="diagram" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Projects Pending</p>
        <p>10</p>
      </div>
    </DivDiagram>
    <DivDiagram>
      <img src={circular} alt="diagram" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Finished Projects</p>
        <p>10</p>
      </div>
    </DivDiagram>
  </DivHome>;
};
