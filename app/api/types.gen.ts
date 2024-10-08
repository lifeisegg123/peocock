// This file is auto-generated by @hey-api/openapi-ts

export type CreateRecruitmentRequest = {
    type: 'STURY' | 'PROJECT' | 'NETWORKING';
    title: string;
    content: string;
    purpose: 'INCOME_STARTUP' | 'PORTFOLIO' | 'ETC';
    method: Method;
    processType: 'ONLINE' | 'OFFLINE' | 'BOTH';
    endedAt?: string;
    duration: string;
    interval: Interval;
    positionGroup: Array<PositionGroup>;
};

export type type = 'STURY' | 'PROJECT' | 'NETWORKING';

export type purpose = 'INCOME_STARTUP' | 'PORTFOLIO' | 'ETC';

export type processType = 'ONLINE' | 'OFFLINE' | 'BOTH';

export type Interval = {
    type: 'WEEKLY' | 'MONTHLY' | 'TO_BE_DISCUSSED';
    frequency: number;
};

export type type2 = 'WEEKLY' | 'MONTHLY' | 'TO_BE_DISCUSSED';

export type Method = {
    type: 'OPEN_CHAT' | 'GOOGLE_FORM' | 'EMAIL';
    contact: string;
};

export type type3 = 'OPEN_CHAT' | 'GOOGLE_FORM' | 'EMAIL';

export type PositionGroup = {
    count: number;
    positions: Array<(number)>;
    skills: Array<(number)>;
};

export type CreateRecruitmentResponse = {
    recruitmentId: number;
};

export type SignUpRequest = {
    code: string;
    provider: 'GOOGLE' | 'KAKAO';
    redirectUri?: string;
};

export type provider = 'GOOGLE' | 'KAKAO';

export type Position = {
    id: number;
    name: string;
};

export type Skill = {
    id: number;
    name: string;
};

export type StaticResponse = {
    positions: Array<Position>;
    skills: Array<Skill>;
};

export type PositionId = {
    value: number;
};

export type SearchRecruitmentRequest = {
    type: Array<('STURY' | 'PROJECT' | 'NETWORKING')>;
    keyword: string;
    positionIds: Array<PositionId>;
    skillIds: Array<SkillId>;
};

export type SkillId = {
    value: number;
};

export type Pageable = {
    page?: number;
    size?: number;
    sort?: Array<(string)>;
};

export type PageSearchRecruitmentDto = {
    totalElements?: number;
    totalPages?: number;
    first?: boolean;
    last?: boolean;
    pageable?: PageableObject;
    size?: number;
    content?: Array<SearchRecruitmentDto>;
    number?: number;
    sort?: Array<SortObject>;
    numberOfElements?: number;
    empty?: boolean;
};

export type PageableObject = {
    paged?: boolean;
    pageNumber?: number;
    pageSize?: number;
    unpaged?: boolean;
    offset?: number;
    sort?: Array<SortObject>;
};

export type SearchRecruitmentDto = {
    id: number;
    createdAt: string;
    type: 'STURY' | 'PROJECT' | 'NETWORKING';
    title: string;
    endedAt?: string;
    positions: Array<(string)>;
    author: string;
    viewCount: number;
    totalCapacity: number;
};

export type SortObject = {
    direction?: string;
    nullHandling?: string;
    ascending?: boolean;
    property?: string;
    ignoreCase?: boolean;
};

export type CreateRecruitmentData = {
    body: CreateRecruitmentRequest;
};

export type CreateRecruitmentResponse2 = (CreateRecruitmentResponse);

export type CreateRecruitmentError = unknown;

export type SignInData = {
    body: SignUpRequest;
};

export type SignInResponse = (unknown);

export type SignInError = unknown;

export type GetStaticResponse = (StaticResponse);

export type GetStaticError = unknown;

export type SearchRecruitmentsData = {
    query: {
        pageable: Pageable;
        request: SearchRecruitmentRequest;
    };
};

export type SearchRecruitmentsResponse = (PageSearchRecruitmentDto);

export type SearchRecruitmentsError = unknown;