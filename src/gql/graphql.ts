/* eslint-disable */
import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateTaskInput = {
  assigneeId?: InputMaybe<Scalars["String"]["input"]>;
  dueDate: Scalars["DateTime"]["input"];
  name: Scalars["String"]["input"];
  pointEstimate: PointEstimate;
  status: Status;
  tags: Array<TaskTag>;
};

export type DeleteTaskInput = {
  id: Scalars["String"]["input"];
};

export type FilterTaskInput = {
  assigneeId?: InputMaybe<Scalars["String"]["input"]>;
  dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  ownerId?: InputMaybe<Scalars["String"]["input"]>;
  pointEstimate?: InputMaybe<PointEstimate>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<TaskTag>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createTask: Task;
  deleteTask: Task;
  updateTask: Task;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

/** Estimate point for a task */
export enum PointEstimate {
  Eight = "EIGHT",
  Four = "FOUR",
  One = "ONE",
  Two = "TWO",
  Zero = "ZERO"
}

export type Query = {
  __typename?: "Query";
  profile: User;
  tasks: Array<Task>;
  users: Array<User>;
};


export type QueryTasksArgs = {
  input: FilterTaskInput;
};

/** Status for Task */
export enum Status {
  Backlog = "BACKLOG",
  Cancelled = "CANCELLED",
  Done = "DONE",
  InProgress = "IN_PROGRESS",
  Todo = "TODO"
}

export type Task = {
  __typename?: "Task";
  assignee?: Maybe<User>;
  createdAt: Scalars["DateTime"]["output"];
  creator: User;
  dueDate: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  pointEstimate: PointEstimate;
  position: Scalars["Float"]["output"];
  status: Status;
  tags: Array<TaskTag>;
};

/** Enum for tags for tasks */
export enum TaskTag {
  Android = "ANDROID",
  Ios = "IOS",
  NodeJs = "NODE_JS",
  Rails = "RAILS",
  React = "REACT"
}

export type UpdateTaskInput = {
  assigneeId?: InputMaybe<Scalars["String"]["input"]>;
  dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  id: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  pointEstimate?: InputMaybe<PointEstimate>;
  position?: InputMaybe<Scalars["Float"]["input"]>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<TaskTag>>;
};

export type User = {
  __typename?: "User";
  avatar?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  fullName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  type: UserType;
  updatedAt: Scalars["DateTime"]["output"];
};

/** Type of the User */
export enum UserType {
  Admin = "ADMIN",
  Candidate = "CANDIDATE"
}

export type GetTasksStatusQueryVariables = Exact<{
  input: FilterTaskInput;
}>;


export type GetTasksStatusQuery = { __typename?: "Query", tasks: Array<{ __typename?: "Task", status: Status }> };

export type GetTasksQueryVariables = Exact<{
  input: FilterTaskInput;
}>;


export type GetTasksQuery = { __typename?: "Query", tasks: Array<{ __typename?: "Task", createdAt: any, dueDate: any, id: string, name: string, pointEstimate: PointEstimate, position: number, status: Status, tags: Array<TaskTag>, assignee?: { __typename?: "User", avatar?: string | null, createdAt: any, email: string, fullName: string, id: string, type: UserType, updatedAt: any } | null, creator: { __typename?: "User", avatar?: string | null, createdAt: any, email: string, fullName: string, id: string, type: UserType, updatedAt: any } }> };


export const GetTasksStatusDocument = gql`
    query getTasksStatus($input: FilterTaskInput!) {
  tasks(input: $input) {
    status
  }
}
    `;

/**
 * __useGetTasksStatusQuery__
 *
 * To run a query within a React component, call `useGetTasksStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTasksStatusQuery(baseOptions: Apollo.QueryHookOptions<GetTasksStatusQuery, GetTasksStatusQueryVariables> & ({ variables: GetTasksStatusQueryVariables; skip?: boolean; } | { skip: boolean; })) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTasksStatusQuery, GetTasksStatusQueryVariables>(GetTasksStatusDocument, options);
}
export function useGetTasksStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksStatusQuery, GetTasksStatusQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTasksStatusQuery, GetTasksStatusQueryVariables>(GetTasksStatusDocument, options);
}
export function useGetTasksStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTasksStatusQuery, GetTasksStatusQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTasksStatusQuery, GetTasksStatusQueryVariables>(GetTasksStatusDocument, options);
}
export type GetTasksStatusQueryHookResult = ReturnType<typeof useGetTasksStatusQuery>;
export type GetTasksStatusLazyQueryHookResult = ReturnType<typeof useGetTasksStatusLazyQuery>;
export type GetTasksStatusSuspenseQueryHookResult = ReturnType<typeof useGetTasksStatusSuspenseQuery>;
export type GetTasksStatusQueryResult = Apollo.QueryResult<GetTasksStatusQuery, GetTasksStatusQueryVariables>;
export const GetTasksDocument = gql`
    query getTasks($input: FilterTaskInput!) {
  tasks(input: $input) {
    assignee {
      avatar
      createdAt
      email
      fullName
      id
      type
      updatedAt
    }
    createdAt
    creator {
      avatar
      createdAt
      email
      fullName
      id
      type
      updatedAt
    }
    dueDate
    id
    name
    pointEstimate
    position
    status
    tags
  }
}
    `;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables> & ({ variables: GetTasksQueryVariables; skip?: boolean; } | { skip: boolean; })) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export function useGetTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export function useGetTasksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
}
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksSuspenseQueryHookResult = ReturnType<typeof useGetTasksSuspenseQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;