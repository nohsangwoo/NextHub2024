import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type All_Prompt_Type = {
  __typename?: 'ALL_PROMPT_TYPE';
  RNG?: Maybe<Scalars['String']['output']>;
  adetailerConfidence?: Maybe<Scalars['String']['output']>;
  adetailerControlNetModel?: Maybe<Scalars['String']['output']>;
  adetailerControlNetModule?: Maybe<Scalars['String']['output']>;
  adetailerDenoisingStrength?: Maybe<Scalars['String']['output']>;
  adetailerDilateErode?: Maybe<Scalars['String']['output']>;
  adetailerInpaintOnlyMasked?: Maybe<Scalars['Boolean']['output']>;
  adetailerInpaintPadding?: Maybe<Scalars['String']['output']>;
  adetailerMaskBlur?: Maybe<Scalars['String']['output']>;
  adetailerModel?: Maybe<Scalars['String']['output']>;
  adetailerVersion?: Maybe<Scalars['String']['output']>;
  cfgScale?: Maybe<Scalars['String']['output']>;
  clipSkip?: Maybe<Scalars['String']['output']>;
  controlNet0?: Maybe<Scalars['String']['output']>;
  controlNet1?: Maybe<Scalars['String']['output']>;
  denoisingStrength?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  hiresCheckpoint?: Maybe<Scalars['String']['output']>;
  hiresNegativePrompt?: Maybe<Scalars['String']['output']>;
  hiresPrompt?: Maybe<Scalars['String']['output']>;
  hiresResize1?: Maybe<Scalars['String']['output']>;
  hiresResize2?: Maybe<Scalars['String']['output']>;
  hiresSampler?: Maybe<Scalars['String']['output']>;
  lowQualityLowresSimpleBackground?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  modelHash?: Maybe<Scalars['String']['output']>;
  negativePrompt?: Maybe<Scalars['String']['output']>;
  negativeTemplate?: Maybe<Scalars['String']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  sampler?: Maybe<Scalars['String']['output']>;
  scheduleMaxSigma?: Maybe<Scalars['String']['output']>;
  scheduleMinSigma?: Maybe<Scalars['String']['output']>;
  scheduleRho?: Maybe<Scalars['String']['output']>;
  scheduleType?: Maybe<Scalars['String']['output']>;
  seed?: Maybe<Scalars['String']['output']>;
  steps?: Maybe<Scalars['String']['output']>;
  tiHashes?: Maybe<Scalars['String']['output']>;
  vae?: Maybe<Scalars['String']['output']>;
  vaeDecoder?: Maybe<Scalars['String']['output']>;
  vaeEncoder?: Maybe<Scalars['String']['output']>;
  vaeHash?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
  worstQuality?: Maybe<Scalars['String']['output']>;
};

export type Attachments_Normal_Type = {
  __typename?: 'ATTACHMENTS_NORMAL_TYPE';
  ATTACHMENT_FILE_TYPE: Scalars['String']['output'];
  ATTACHMENT_ID: Scalars['Int']['output'];
  ATTACHMENT_NAME: Scalars['String']['output'];
  ATTACHMENT_SIZE: Scalars['Float']['output'];
  ATTACHMENT_URL: Scalars['String']['output'];
};

export type Attachment_Input_For_Create_Args = {
  fileName: Scalars['String']['input'];
  fileSize: Scalars['Int']['input'];
  fileType: Scalars['String']['input'];
  fileUrl: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type DogAttribute = {
  __typename?: 'DogAttribute';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type DogResult = {
  __typename?: 'DogResult';
  ageInWeeks: Scalars['Int']['output'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String']['output'];
  breed: Scalars['String']['output'];
  color: Scalars['String']['output'];
  description: Array<Scalars['String']['output']>;
  fee: Scalars['Float']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sex: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
};

export enum Main_Content_Type_Enum {
  Image = 'image',
  Posts = 'posts',
  T2i = 't2i',
  Video = 'video'
}

export type Query = {
  __typename?: 'Query';
  dogByName?: Maybe<DogResult>;
  mutationDogByName?: Maybe<DogResult>;
};


export type QueryDogByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryMutationDogByNameArgs = {
  name: Scalars['String']['input'];
};

export type Requirement_Specifications_Type = {
  __typename?: 'REQUIREMENT_SPECIFICATIONS_TYPE';
  AGREED_DATE_DISABLED_FOR_HUNTER?: Maybe<Scalars['String']['output']>;
  AGREED_DATE_DISABLED_FOR_QUEST_PROVIDER?: Maybe<Scalars['String']['output']>;
  AGREED_DATE_FOR_HUNTER?: Maybe<Scalars['String']['output']>;
  AGREED_DATE_FOR_QUEST_PROVIDER?: Maybe<Scalars['String']['output']>;
  FRST_REG_DT: Scalars['String']['output'];
  IS_AGRED_DETAIL?: Maybe<Scalars['String']['output']>;
  IS_AGREED_DISABLED_FOR_HUNTER: Scalars['Boolean']['output'];
  IS_AGREED_DISABLED_FOR_QUEST_PROVIDER: Scalars['Boolean']['output'];
  IS_AGREED_FOR_HUNTER: Scalars['Boolean']['output'];
  IS_AGREED_FOR_QUEST_PROVIDER: Scalars['Boolean']['output'];
  LST_CHG_DT: Scalars['String']['output'];
  REQUIREMENT: Scalars['String']['output'];
  REQUIREMENT_PROGRESS: Scalars['Int']['output'];
  REQUIREMENT_SPECIFICATION_ID: Scalars['Int']['output'];
  qUESTQUEST_ID?: Maybe<Scalars['Int']['output']>;
};

export type Review_Type = {
  __typename?: 'REVIEW_TYPE';
  FRST_REG_DT: Scalars['String']['output'];
  LST_CHG_DT: Scalars['String']['output'];
  PARENT_ID?: Maybe<Scalars['Int']['output']>;
  REVIEW_ID: Scalars['Int']['output'];
  REVIEW_TEXT: Scalars['String']['output'];
  SCORE: Scalars['Int']['output'];
  TAGED_USERS?: Maybe<Array<Taged_Users_Type>>;
  USER?: Maybe<User_For_Review_Type>;
};

export type Taged_Users_Type = {
  __typename?: 'TAGED_USERS_TYPE';
  FRST_REG_DT: Scalars['String']['output'];
  LST_CHG_DT: Scalars['String']['output'];
  TAGED_USER_ID: Scalars['Int']['output'];
  TAGED_USER_TYPE: Scalars['String']['output'];
  uSERUSER_ID: Scalars['Int']['output'];
};

export type User_For_Review_Type = {
  __typename?: 'USER_FOR_REVIEW_TYPE';
  AVATAR_URL?: Maybe<Scalars['String']['output']>;
  EMAIL: Scalars['String']['output'];
  FRST_REG_DT: Scalars['String']['output'];
  IS_PUBLIC: Scalars['Boolean']['output'];
  LST_CHG_DT: Scalars['String']['output'];
  NICK_NAME: Scalars['String']['output'];
  USER_ID: Scalars['Int']['output'];
};

export type DogByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type DogByNameQuery = { __typename?: 'Query', dogByName?: { __typename?: 'DogResult', name: string, breed: string, ageInWeeks: number, image: string, sex: string, description: Array<string>, color: string, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> } | null };

export type MutationDogByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type MutationDogByNameQuery = { __typename?: 'Query', mutationDogByName?: { __typename?: 'DogResult', name: string, breed: string, ageInWeeks: number, image: string, sex: string, description: Array<string>, color: string, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> } | null };


export const DogByNameDocument = gql`
    query dogByName($name: String!) {
  dogByName(name: $name) {
    name
    breed
    ageInWeeks
    image
    sex
    description
    color
    attributes {
      key
      value
    }
  }
}
    `;
export const MutationDogByNameDocument = gql`
    query mutationDogByName($name: String!) {
  mutationDogByName(name: $name) {
    name
    breed
    ageInWeeks
    image
    sex
    description
    color
    attributes {
      key
      value
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    dogByName(variables: DogByNameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DogByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DogByNameQuery>(DogByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dogByName', 'query', variables);
    },
    mutationDogByName(variables: MutationDogByNameQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MutationDogByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MutationDogByNameQuery>(MutationDogByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'mutationDogByName', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;