export interface IUserShare {
  id: number;
  imgUrl: string;
  nationalFlag: string;
  desc: string;
  name: string;
  city: string;
  carType: string;
  time: string;
}

export interface IHomeVendor {
  id: number;
  imgUrl: string;
  hoverImgUrl: string;
}

export interface IFeatureService {
  id: number;
  imgUrl: string;
  adImgUrl: string;
  title: string;
  desc: string;
  isDrive: boolean;
  label: string;
  driveData: IFDrive[];
}

export interface IFDrive {
  subTitle: string;
  subDesc: string;
}

export interface ICarType {
  id: number;
  imgUrl: string;
  carName: string;
  carLabel: string[];
  carCity: string;
  carPrice: number;
}

export interface ICarousel {
  title: string;
  imgUrl: string;
  linkUrl: string;
  styleObj: any;
}

export interface IHNCbox {
  id: string;
  subTitle: string;
  subLinkUrl: string;
}

export interface INav {
  id: string;
  title: string;
  sub: IHNCbox[];
  isRecommend: boolean;
  linkUrl: string;
}

export interface IndexProps {
  navData: INav[];
  carouselData: ICarousel[];
  recommendcarType: ICarType[];
  fsList: IFeatureService[];
  vendorList: IHomeVendor[];
  userShareList: IUserShare[];
}

// export
