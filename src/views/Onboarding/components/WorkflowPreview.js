import React, { useEffect, useState } from 'react';
import { useIndustrySelection } from '../hooks/useIndustrySelection';
import { workflowService } from '../services/workflowService';

const WorkflowPreview = () => {
  const { selectedIndustry } = useIndustrySelection(); // Hook to fetch the selected industry
  const [workflow, setWorkflow] = useState(null);

  useEffect(() => {
    if (selectedIndustry) {
      // Fetch the relevant workflow template based on the selected industry
      const fetchWorkflow = async () => {
        try {
          const data = await workflowService.getWorkflowTemplate(selectedIndustry);
          setWorkflow(data);
        } catch (error) {
          console.error("Error fetching workflow:", error);
        }
      };
      fetchWorkflow();
    }
  }, [selectedIndustry]);

  if (!workflow) {
    return <div>Loading workflow preview...</div>;
  }

  return (
    <div className="workflow-preview">
      <h2 className="text-xl font-bold mb-4">Workflow Preview</h2>
      <div className="workflow-details">
        <p className="mb-2"><strong>Industry:</strong> {selectedIndustry}</p>
        <p className="mb-2"><strong>Workflow Name:</strong> {workflow.name}</p>
        <p className="mb-2"><strong>Description:</strong> {workflow.description}</p>
      </div>
      <div className="workflow-steps">
        <h3 className="font-semibold mb-2">Steps:</h3>
        <ul className="list-disc pl-5">
          {workflow.steps.map((step, index) => (
            <li key={index} className="mb-1">{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkflowPreview;
