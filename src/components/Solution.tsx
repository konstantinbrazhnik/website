import React from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
//
import { MarketHeader, MarketList, SectionWrapper } from '@src/Styles';
import asset1 from '@images/asset_1.svg';
import asset2 from '@images/asset_2.svg';
import { device, size } from '@src/breakpoints';

const IllustrationContainer = styled.div`
  background-color: #00e2c1;
  padding: 100px;
  text-align: center;

  @media ${device.mobileS} and (max-width: ${size.tablet}) {
    padding: 60px;
  }

  img {
    @media ${device.desktopS} {
      width: 70%;
    }
  }
`;

const TextWrapper = styled.div`
  padding: 20px;

  @media ${device.tablet} {
    padding: 0 20px;
  }

  @media ${device.laptop} {
    padding: 0 60px;
  }
`;

const Solution = () => {
  return (
    <SectionWrapper style={{ background: '#f0f0f0' }}>
      <Row type="flex" align="middle">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <IllustrationContainer>
            <img
              alt="decentralized derivative exchange"
              src={asset1}
              width="80%"
            />
          </IllustrationContainer>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <TextWrapper>
            <MarketHeader>Issues with current exchanges</MarketHeader>
            <MarketList>centralized, limited access</MarketList>
            <MarketList>security, safety, and custody of funds</MarketList>
            <MarketList>hard to short or hedge digital assets</MarketList>
            <MarketList>
              limited exposure to cross-chain or real world assets
            </MarketList>
          </TextWrapper>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={{ span: 12, push: 12 }}
          lg={{ span: 12, push: 12 }}
          xl={{ span: 12, push: 12 }}
        >
          <IllustrationContainer>
            <img alt="short cryptocurrency" src={asset2} width="60%" />
          </IllustrationContainer>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={{ span: 12, pull: 12 }}
          lg={{ span: 12, pull: 12 }}
          xl={{ span: 12, pull: 12 }}
        >
          <TextWrapper>
            <MarketHeader>How we solve these issues</MarketHeader>
            <p style={{ fontSize: '18px', fontWeight: 300 }}>
              MARKET Protocol Smart Contracts decentralize accounting, custody
              of funds and position management.
            </p>
            <MarketList>Fully collateralized</MarketList>
            <MarketList>Trustless</MarketList>
            <MarketList>Real world and digital assets</MarketList>
          </TextWrapper>
        </Col>
      </Row>
    </SectionWrapper>
  );
};
export default Solution;
