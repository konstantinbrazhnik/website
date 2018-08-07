import React from 'react';
import { Button, Col, Row } from 'antd';
import styled from 'styled-components';
import header from '@images/partners/partners-hero.svg';
import { device, size } from '@src/breakpoints';
import { emailLink } from '@components/Cta';
import { HeroText } from '@src/Styles';

export const HeroArt = styled.div`
  text-align: center;
  img {
    width: 60%;

    @media ${device.mobileL} and (max-width: ${size.laptopM}) {
      width: 90%;
    }

    @media ${device.desktopS} {
      width: 50%;
    }
  }

  @media ${device.mobileS} and (max-width: 767px) {
    z-index: -1;
  }
`;

export const TextWrapper = styled.div`
  margin: 50px 0px 150px 50px;

  @media ${device.mobileS} and (max-width: ${size.mobileL}) {
    margin: 70px 30px 70px 30px;
  }

  @media ${device.mobileL} and (max-width: ${size.tablet}) {
    margin: 50px 50px 100px 50px;
  }

  @media ${device.desktopS} {
    margin-bottom: 20%;
  }
`;

export const HeroInfo = styled.p`
  color: #fff;
  font-weight: 300;

  @media ${device.mobileS} {
    font-size: 14px;
    margin: 30px 0px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 22px;
    margin: 30px 0px 50px 0px;
  }
`;

class Hero extends React.Component {
  render() {
    return (
      <section
        style={{
          background: '#181E26',
          minHeight: '300px'
        }}
      >
        <Row type="flex" className="hero" align="bottom">
          <Col xs={24} sm={24} md={14} lg={12} xl={12} style={{ zIndex: 1 }}>
            <TextWrapper>
              <HeroText>
                Build on top of <br />MARKET Protocol
              </HeroText>
              <HeroInfo>
                Teams all over the world are building applications and exchanges
                on top of MARKET Protocol’s unique infrastructure. We are
                looking for exceptional teams to help us build the decentralized
                future! Join us.
              </HeroInfo>
              <Button
                type="primary"
                size={'large'}
                href={emailLink}
                style={{
                  color: '#000',
                  minWidth: 200
                }}
              >
                Become a Partner
              </Button>
            </TextWrapper>
          </Col>
          <Col xs={0} sm={0} md={10} lg={12} xl={12}>
            <HeroArt>
              <img alt="MARKET partners" src={header} />
            </HeroArt>
          </Col>
        </Row>
      </section>
    );
  }
}
export default Hero;
