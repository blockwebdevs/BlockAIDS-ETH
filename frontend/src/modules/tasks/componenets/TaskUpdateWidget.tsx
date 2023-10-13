import React, {ChangeEvent, FC, FormEvent, useEffect} from "react";
import {MySelect, ISelectOptions} from "../../../ui/MySelect/MySelect";
import {Box, Grid, Stack} from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";
import typeTaskIcon from '../../../ui/assets/typeTaskIcon.svg';
import organizationTaskIcon from '../../../ui/assets/organizationTaskIcon.svg';
import specialistTaskIcon from '../../../ui/assets/specialistTaskIcon.svg';
import MyTextarea from "../../../ui/MyTextarea";
import MyButton from "../../../ui/MyButton";
import MyDatePicker from "../../../ui/MyDatePicker";
import MyInput from "../../../ui/MyInput";
import {tasksApi} from "../../../api/tasksApi";
import {useParams} from "react-router-dom";
import {taskTypesApi} from "../../../api/taskTypesApi";
import {organizationsApi} from "../../../api/organizationsApi";
import {specialistsApi} from "../../../api/specialistsApi";
import {isErrorWithMessage, isFetchBaseQueryError} from "../../../helpers/errors";
import DoneAlert from "../../../components/DoneAlert";

const mockOptions: ISelectOptions[] = [
  {
    name: 'one',
    value: '1',
  },
  {
    name: 'two',
    value: '2',
  },
  {
    name: 'three',
    value: '3',
  }
];

const TaskUpdateWidget: FC = () => {
  const {id} = useParams()
  const {data: task} = tasksApi.useFetchTaskByIdQuery(Number(id));
  const [updateTask] = tasksApi.useUpdateTaskMutation();

  const [taskTypesOptions, setTaskTypesOptions] = React.useState<ISelectOptions[]>([]);
  const [organizationsOptions, setOrganizationsOptions] = React.useState<ISelectOptions[]>([]);
  const [specialistsOptions, setSpecialistsOptions] = React.useState<ISelectOptions[]>([]);

  const {data: taskTypes} = taskTypesApi.useFetchAllTaskTypesQuery();
  const {data: organizations} = organizationsApi.useFetchAllOrganizationsQuery();
  const {data: specialists} = specialistsApi.useFetchAllSpecialistsQuery();

  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');
  const [organization, setOrganization] = React.useState('');
  const [specialist, setSpecialist] = React.useState('');
  const [dateDue, setDateDue] = React.useState<Date | null | undefined>(null);
  const [description, setDescription] = React.useState('');
  const [error, setError] = React.useState('');
  const [isSaved, setIsSaved] = React.useState(false);

  useEffect(() => {
    if (!taskTypes) return;
    setTaskTypesOptions(taskTypes.map(taskType => ({
      name: taskType.name, value: taskType.id.toString()
    } as ISelectOptions)));
  }, [taskTypes])

  useEffect(() => {
    if (!organizations) return;
    setOrganizationsOptions(organizations.map(organization => ({
      name: organization.name, value: organization.id.toString()
    } as ISelectOptions)));
  }, [organizations])

  useEffect(() => {
    if (!specialists) return;
    setSpecialistsOptions(specialists.map(specialist => ({
      name: specialist.name, value: specialist.id.toString()
    } as ISelectOptions)));
  }, [specialists])

  useEffect(() => {
    if (task) {
      setName(task.name);
      setType(task.taskType.id.toString());
      setOrganization(task.organization.id.toString());
      setSpecialist(task.specialist.id.toString());
      setDateDue(new Date(task.dateDue));
      setDescription(task.description);
    }
  }, [task]);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleTaskType = (event: SelectChangeEvent) => setType(event.target.value);
  const handleTaskOrganization = (event: SelectChangeEvent) => setOrganization(event.target.value);
  const handleTaskSpecialist = (event: SelectChangeEvent) => setSpecialist(event.target.value);
  const handleTaskDateDue = (date: Date | null | undefined) => setDateDue(date);
  const handleTaskDescription = (event: ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value);

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    try {
      if (task) {
        await updateTask({
          id: task.id,
          userId: task.user.id.toString(),
          specialistId: specialist,
          taskTypeId: type,
          organizationId: organization,
          notificationId: "2",
          name,
          status: task.status,
          points: 0,
          description
        }).unwrap();
        showSuccessAnimation();
      }
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data)
        setError(JSON.parse(errMsg).message);
      } else if (isErrorWithMessage(err)) {
        setError(err.message);
      }
    }
  }

  const showSuccessAnimation = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 1000);
  }

  return (
    <>
      {isSaved && <DoneAlert/>}
      <div className="tasks-area">
        <div className="task-create-area">
          <form action="" onSubmit={handleForm}>
            <Grid container rowSpacing={{xs: 0, sm: 2, md: 3}} columnSpacing={{xs: 0, sm: 2, md: 3}}>
              <Grid item md={12} xs={12} style={{marginBottom: '25px'}}>
                <MyInput type="text"
                         name="name"
                         required={true}
                         label="Task Name"
                         icon={typeTaskIcon}
                         value={name}
                         onChange={handleName}/>
              </Grid>
              <Grid item sm={6} xs={12}>
                <MySelect label="Type of task"
                          defaultOption="Select the task"
                          onChange={handleTaskType}
                          options={taskTypesOptions}
                          value={type}
                          icon={typeTaskIcon}/>
              </Grid>
              <Grid item sm={6} xs={12}>
                <MySelect label="Organization"
                          defaultOption="Select Organization"
                          onChange={handleTaskOrganization}
                          options={organizationsOptions}
                          value={organization}
                          icon={organizationTaskIcon}/>
              </Grid>
              <Grid item sm={6} xs={12}>
                <MySelect label="Specialist/Patient"
                          defaultOption="Select the specialist"
                          onChange={handleTaskSpecialist}
                          options={specialistsOptions}
                          value={specialist}
                          icon={specialistTaskIcon}/>
              </Grid>
              <Grid item md={6} xs={12}>
                <MyDatePicker label={'Due Date'} onChange={handleTaskDateDue} selected={dateDue}
                              placeholder="01/07/2023"></MyDatePicker>
              </Grid>
              <Grid item sm={12} xs={12}>
                <MyTextarea name="description" onChange={handleTaskDescription} value={description}
                            label="Description"></MyTextarea>
              </Grid>
              <Grid item xs={12} className="flex-center">
                {error && <Box className="error-area">{error}</Box>}
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row"
                       justifyContent="space-between"
                       alignItems="center"
                       sx={{mt: 3, mb: 2}}>
                  <MyButton>Update</MyButton>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
}

export default TaskUpdateWidget;