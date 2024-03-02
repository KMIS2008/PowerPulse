import styled from 'styled-components';

// імпорти поки не видаляв бо поки не ясно де і як буде картинка героя. Стилізація часткова в кінці файлу
// import heroMobile1x from '../../assets/heroImages/hero-mobile-1x-min.png';
// import heroMobile2x from '../../assets/heroImages/hero-mobile-2x-min.png';
// import herotablet1x from '../../assets/heroImages/hero-tablet-1x-min.png';
// import herotablet2x from '../../assets/heroImages/hero-tablet-2x-min.png';
// import herodescktop1x from '../../assets/heroImages/hero-descktop-1x-min.png';
// import herodescktop2x from '../../assets/heroImages/hero-descktop-2x-min.png';

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  margin: 0 auto;
  outline: 2px solid red;

  margin-top: 127px;

  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    margin-top: 189px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-right: 32px;
    padding-bottom: 171px;

    display: flex;
    gap: 76px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 38px;
  line-height: 105%;
  letter-spacing: 0.01em;
  max-width: 335px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 111%;
    max-width: 598px;

    margin-bottom: 64px;
  }
`;

export const Outline = styled.svg``;

//nav
export const NavContainer = styled.nav`
  display: flex;
  gap: 14px;

  margin-bottom: 231px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-bottom: 171px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const SignUp = styled.a`
  border-radius: 12px;
  padding: 12px 40px;
  display: block;
  height: 100%;
  background-color: ${(p) => p.theme.colors.orange};

  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: background-color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  :focus {
    background-color: ${(p) => p.theme.colors.orangeLight};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    padding: 16px 60px;
  }
`;

export const SignIn = styled.a`
  border: 1px solid ${(p) => p.theme.colors.grey};
  background-color: transparent;
  display: block;
  border-radius: 12px;
  padding: 12px 40px;
  height: 100%;

  font-weight: 500;
  font-size: 16px;
  line-height: 112%;

  transition: border-color ${(p) => p.theme.transition};
  cursor: pointer;

  &:hover,
  :focus {
    border-color: ${(p) => p.theme.colors.orange};
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 120%;
    padding: 16px 60px;
  }
`;

export const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 70px;

  @media screen and (min-width: 768px) {
    gap: 56px;
  }

  @media screen and (min-width: 1440px) {
    gap: 39px;
    width: 638px;

    margin-top: 184px;
  }
`;

// 350+ video tutorial
export const VideoTutorContainer = styled.div`
  border-radius: 12px;
  background-color: #303030;
  width: 146px;
  height: 66px;
  margin-right: 88px;

  display: flex;
  align-items: center;

  gap: 8px;

  padding: 14px 18px;

  @media screen and (min-width: 768px) {
    padding: 20px 36px 20px 23px;
    width: 206px;
    height: 96px;
    gap: 12px;
    align-items: center;
    margin-right: 199px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 432px;
  }
`;

export const VideoCount = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 112%;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 100%;
    margin-bottom: 8px;
  }
`;

export const VideoCaption = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: ${(p) => p.theme.colors.grey};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const SvgVideo = styled.svg`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.orangeLight};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;


// 500 cal
export const CalStatus = styled.div`
  border-radius: 12px;
  width: 119px;
  height: 76px;

  background-color: ${(p) => p.theme.colors.orangeLight};

  padding: 14px 18px;

  @media screen and (min-width: 768px) {
    padding: 14px 28px;
    width: 180px;
    height: 110px;
  }
`;

export const CalCount = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 104%;
    letter-spacing: -0.02em;
  }
`;

export const CalCaption = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 133%;
  text-transform: lowercase;
  margin-left: 8px;
  color: ${(p) => p.theme.colors.grey};

  @media screen and (min-width: 768px) {
    margin-left: 11px;
    font-size: 16px;
    line-height: 150%;
    margin-left: 11px;
  }
`;

export const SvgRun = styled.svg`
  display: block;
  width: 20px;
  height: 20px;
  margin-bottom: 4px;

  border-radius: 50%;

  background-color: ${(p) => p.theme.colors.beige};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

// hero back img
// export const HeroImageContainer = styled.div`
//   background-image: url(${heroMobile1x});
//   background-repeat: no-repeat;
//   background-position: right;
//   background-size: contain;

//   max-width: 298px;
//   height: 571px;
//   @media (min-device-pixel-ratio: 2),
//     (min-resolution: 192dpi),
//     (min-resolution: 2dppx) {
//     background-image: url(${heroMobile2x});
//   }

//   @media screen and (min-width: 375px) {
//     }
//     @media screen and (min-width: 768px) {
//     }
//     @media screen and (min-width: 1440px) {
//     }
// `;
