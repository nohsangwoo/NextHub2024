import { gql } from 'graphql-tag'

export default gql`
  type DogAttribute {
    key: String!
    value: String!
  }

  type DogResult {
    name: String!
    attributes: [DogAttribute!]!
    description: [String!]!
    image: String!
    ageInWeeks: Int!
    sex: String!
    breed: String!
    color: String!
    fee: Float!
    weight: Float!
    availableDate: String!
  }

  enum MAIN_CONTENT_TYPE_ENUM {
    image
    video
    t2i
    posts
  }

  type ALL_PROMPT_TYPE {
    prompt: String
    negativePrompt: String
    negativeTemplate: String
    worstQuality: String
    lowQualityLowresSimpleBackground: String
    clipSkip: String
    hiresResize1: String
    hiresResize2: String
    hiresSampler: String
    hiresCheckpoint: String
    hiresPrompt: String
    hiresNegativePrompt: String
    RNG: String
    scheduleType: String
    scheduleMaxSigma: String
    scheduleMinSigma: String
    scheduleRho: String
    vaeEncoder: String
    vaeDecoder: String
    steps: String
    sampler: String
    cfgScale: String
    seed: String
    width: String
    height: String
    modelHash: String
    model: String
    vaeHash: String
    vae: String
    denoisingStrength: String
    adetailerModel: String
    adetailerConfidence: String
    adetailerDilateErode: String
    adetailerMaskBlur: String
    adetailerDenoisingStrength: String
    adetailerInpaintOnlyMasked: Boolean # string일 확률이 있음 나중에 에러나면 확인.
    adetailerInpaintPadding: String
    adetailerControlNetModel: String
    adetailerControlNetModule: String
    adetailerVersion: String
    controlNet0: String
    controlNet1: String
    tiHashes: String
    version: String
  }

  type ATTACHMENTS_NORMAL_TYPE {
    ATTACHMENT_ID: Int!
    ATTACHMENT_URL: String!
    ATTACHMENT_FILE_TYPE: String!
    ATTACHMENT_SIZE: Float!
    ATTACHMENT_NAME: String!
  }

  input ATTACHMENT_INPUT_FOR_CREATE_ARGS {
    fileUrl: String!
    fileType: String!
    fileSize: Int!
    fileName: String!
    type: String!
  }

  type TAGED_USERS_TYPE {
    TAGED_USER_ID: Int!
    FRST_REG_DT: String!
    LST_CHG_DT: String!
    TAGED_USER_TYPE: String!
    uSERUSER_ID: Int!
  }

  type REVIEW_TYPE {
    REVIEW_ID: Int!
    FRST_REG_DT: String!
    LST_CHG_DT: String!
    SCORE: Int!
    REVIEW_TEXT: String!
    PARENT_ID: Int
    TAGED_USERS: [TAGED_USERS_TYPE!]
    USER: USER_FOR_REVIEW_TYPE
  }

  type USER_FOR_REVIEW_TYPE {
    USER_ID: Int!
    FRST_REG_DT: String!
    LST_CHG_DT: String!
    NICK_NAME: String!
    EMAIL: String!
    IS_PUBLIC: Boolean!
    AVATAR_URL: String
  }

  type REQUIREMENT_SPECIFICATIONS_TYPE {
    REQUIREMENT_SPECIFICATION_ID: Int!
    FRST_REG_DT: String!
    LST_CHG_DT: String!
    REQUIREMENT: String!
    IS_AGREED_FOR_QUEST_PROVIDER: Boolean!
    AGREED_DATE_FOR_QUEST_PROVIDER: String
    IS_AGREED_FOR_HUNTER: Boolean!
    AGREED_DATE_FOR_HUNTER: String
    IS_AGREED_DISABLED_FOR_QUEST_PROVIDER: Boolean!
    AGREED_DATE_DISABLED_FOR_QUEST_PROVIDER: String
    IS_AGREED_DISABLED_FOR_HUNTER: Boolean!
    AGREED_DATE_DISABLED_FOR_HUNTER: String
    IS_AGRED_DETAIL: String
    REQUIREMENT_PROGRESS: Int!
    qUESTQUEST_ID: Int
  }
`
