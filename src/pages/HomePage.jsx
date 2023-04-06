import {
  ContainerHome,
  ContainerTitleHome,
  DivDiagram,
  DivHome,
  TaskEl,
  TaskGrid,
  WorkActivityBlock,
} from 'components/App.styled';
import pencil from '../img/pencil.svg';
import circular from '../img/circular.svg';

import { DivDiagramHome } from 'components/DivDiagram/DivDiagramHome';
// import { Tasks } from 'components/Tasks/Tasks';

const HomePage = () => (
  <ContainerHome>
    <ContainerTitleHome>
      <h3>Daily Task Manager</h3>
      <img src={pencil} alt="pencil" />
    </ContainerTitleHome>
    <DivDiagramHome />
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
    </DivHome>
    <TaskGrid>
      <TaskEl>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          labore ratione nesciunt, recusandae molestiae odio illo unde deserunt
          distinctio eum.
        </p>
      </TaskEl>
      <TaskEl>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          labore ratione nesciunt, recusandae molestiae odio illo unde deserunt
          distinctio eum.
        </p>
      </TaskEl>
    </TaskGrid>
    <WorkActivityBlock>
      <h4 style={{ textAlign: 'end' }}>Work Activity</h4>
    </WorkActivityBlock>
  </ContainerHome>
);

export default HomePage;
