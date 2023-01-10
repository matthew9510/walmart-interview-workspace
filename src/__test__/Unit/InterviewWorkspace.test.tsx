import { render, RenderResult } from '@testing-library/react';
import InterviewWorkspace from '../../Components/InterviewWorkspace';

let documentBody: RenderResult;

describe('<InterviewWorkspace />', () => {
  beforeEach(() => {
    documentBody = render(<InterviewWorkspace />);
  });
  
  it("Shows Matthew's workspace", () => {
    expect(documentBody.getByText("Matthew's Workspace!")).toBeInTheDocument();
  });
});