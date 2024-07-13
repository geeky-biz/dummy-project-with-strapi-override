import { c as useGetWorkflowsQuery, d as useCreateWorkflowMutation, e as useUpdateWorkflowMutation, f as useDeleteWorkflowMutation } from "./reviewWorkflows-qD_jGkTH.mjs";
function useReviewWorkflows(params = {}) {
  const { id = "", ...queryParams } = params;
  const { data, isLoading } = useGetWorkflowsQuery({
    id,
    populate: "stages",
    ...queryParams
  });
  const [createWorkflow] = useCreateWorkflowMutation();
  const [updateWorkflow] = useUpdateWorkflowMutation();
  const [deleteWorkflow] = useDeleteWorkflowMutation();
  const { workflows, meta } = data ?? {};
  return {
    // meta contains e.g. the total of all workflows. we can not use
    // the pagination object here, because the list is not paginated.
    meta,
    workflows,
    isLoading,
    createWorkflow,
    updateWorkflow,
    deleteWorkflow
  };
}
export {
  useReviewWorkflows as u
};
//# sourceMappingURL=useReviewWorkflows-AoF4WqsY.mjs.map
