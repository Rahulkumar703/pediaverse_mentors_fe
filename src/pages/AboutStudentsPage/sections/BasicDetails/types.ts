export type PersonalInformationType = {
    age: number;
    email: string;
    address: string;
    phoneNumber: string;
};

export type EducationalInformationType = {
    institute: string;
    course: string;
    startYear: number;
    endYear: number | null;
};

export type SkillType = {
    id: string;
    label: string;
};

export type SkillsAndInterestsType = {
    techSkills: SkillType[];
    softSkills: SkillType[];
    interests: SkillType[];
};

export type ExtracurricularType = SkillType; 

export type InformationsDataType = {
    personal: PersonalInformationType;
    educational: EducationalInformationType[];
    skillsAndInterests: SkillsAndInterestsType; 
    extracurricular: ExtracurricularType[];
};
