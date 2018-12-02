import React, { Component } from 'react';
import styled from 'styled-components';
import MaterialResumeTemplate from './components/MaterialResumeTemplate';
import about from './resume/about';
import contact from './resume/contact';
import awards from './resume/awards';
import references from './resume/references';
import hobbies from './resume/hobbies';
import professionalSkills from './resume/professionalSkills';
import workEnvironment from './resume/workEnvironment';
import educations from './resume/educations';
import workExperiences from './resume/workExperiences';
import {getQueryParameterByName} from './utils/url';

const ResumeWrapper = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  ${props => !props.raw && `
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 20px auto;
    overflow: hidden;
  `}
`;

const ToolsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ToolButton = styled.button`
  margin: 10px;
  border: 1px solid #BBB;
  background: #EEE;
  padding: 10px;
  font-family: Open Sans, sans-serif;
  cursor: pointer;
  &:focus { outline: 0; }
  ${props => props.isActive && `
    background: #333;
    color: #FFF;
    border: 1px solid #444;
  `}
`;

const paperSizeConfig = {
  a4: {
    // @see puppetter pdf A4 dimensions
    // A4: 8.27in x 11.7in => in 100DPI
    width: 827,
    height: 1170,
  },
  letter: {
    // @see puppetter pdf Letter dimensions
    // Letter: 8.5in x 11in => in 100DPI
    width: 850,
    height: 1100,
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    const paperSize = getQueryParameterByName('paper-size');
    const defaultPaperSize = 'a4';

    this.state = {
      raw: getQueryParameterByName('raw') === 'true',
      paperSize: ['a4', 'letter'].indexOf(paperSize) > -1
        ? paperSize
        : defaultPaperSize,
    };
  }

  setPaperSize = (paperSize) => this.setState({ paperSize });

  renderResume = () => {
    const { paperSize, raw } = this.state;
    const { width, height } = paperSizeConfig[paperSize];

    return (
      <ResumeWrapper
        width={width}
        height={height}
        raw={raw}
      >
        <MaterialResumeTemplate
          about={about}
          contact={contact}
          awards={awards}
          references={references}
          hobbies={hobbies}
          professionalSkills={professionalSkills}
          workEnvironment={workEnvironment}
          educations={educations}
          workExperiences={workExperiences}
        />
      </ResumeWrapper>
    );
  };

  render() {
    const { paperSize, raw } = this.state;

    if (raw) {
      return this.renderResume();
    }

    return (
      <React.Fragment>
        <ToolsWrapper>
          <ToolButton isActive={paperSize === 'a4'} onClick={() => this.setPaperSize('a4')}>
            Paper Size: A4
          </ToolButton>
          <ToolButton isActive={paperSize === 'letter'} onClick={() => this.setPaperSize('letter')}>
            Paper Size: Letter
          </ToolButton>
        </ToolsWrapper>
        {this.renderResume()}
      </React.Fragment>
    );
  }
}

export default App;
