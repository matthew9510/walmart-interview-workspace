import { render, RenderResult } from '@testing-library/react';
import InterviewWorkspace from '../../Components/InterviewWorkspace';

let documentBody: RenderResult;

describe('<InterviewWorkspace />', () => {
  beforeEach(() => {
    documentBody = render(<InterviewWorkspace interviewData={[
      {
        "Name": "A",
        "Type": "String",
        "Required": "Y"
      },
      {
        "Name": "B",
        "Type": "Integer",
        "Required": "N"
      },
      {
        "Name": "C",
        "Type": "Booleen",
        "Required": "Y"
      }
    ]} />);
  });
  
  it("Shows Table content", () => {
    expect(documentBody.getByText("Name")).toBeInTheDocument();
    expect(documentBody.getByText("Type")).toBeInTheDocument();
    expect(documentBody.getByText("Required")).toBeInTheDocument();

  });
});