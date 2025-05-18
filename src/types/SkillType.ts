export interface SkillType {
  id: number;
  imgName: string;
  firstText: string;
  firstTextFont: { xs: number; lg: number };
  secondText?: string;
  secondTextFont?: { xs: number; lg: number };
  thirdText?: string;
  thirdTextFont?: { xs: number; lg: number };
  textCount: number;
}
