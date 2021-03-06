import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DetailsTooltip, Tooltip } from 'components';
import { millify } from 'millify';
import { CryptoMapped } from 'models/Crypto';
import React from 'react';
import {
  Container,
  Overview,
  OverviewInfo,
  OverviewInfoInner,
  OverviewPercentage,
  OverviewSupplyVerified,
  Percentage,
  Wrapper,
  WrapperInner,
} from './styles';

const CryptoSupply: React.VFC<CryptoMapped> = (crypto) => {
  const data = [
    {
      id: 11,
      title: 'Circulating supply',
      value: millify(crypto.supplyCirculating),
      tooltipText:
        'Circulating supply is the total amount of tokens in circulation, including unsold tokens.',
    },
    {
      id: 12,
      title: 'Total supply',
      value: millify(crypto.supplyTotal),
      tooltipText:
        'Total supply is the total amount of tokens in existence, including unsold tokens.',
    },
    // {
    //   id: 13,
    //   title: 'Max supply',
    //   value: millify(234000000),
    //   tooltipText:
    //     'Max supply is the maximum amount of tokens that can ever exist.',
    // },
    // {
    //   id: 14,
    //   title: 'Issuance blockchain',
    //   value: 'Ethereum',
    //   tooltipText:
    //     'Issuance blockchain is the blockchain that issued the tokens.',
    // },
  ];

  const PercentageInfo = {
    id: 11,
    tooltipText:
      'This is the total versus the circulating supply. It shows the percentage of the total supply that is circulating.',
  };

  return (
    <Container>
      <Overview>
        <OverviewPercentage>
          <Percentage>
            {Math.round((crypto.supplyTotal / crypto.supplyCirculating) * 100)}%
          </Percentage>
          <Tooltip item={PercentageInfo} />
        </OverviewPercentage>
        <OverviewInfo>
          <OverviewInfoInner>
            <OverviewSupplyVerified
              href="https://support.coinranking.com/article/76-what-does-verified-supply-mean"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={
                  crypto.supplyCorfirmed ? faCheckCircle : faExclamationCircle
                }
              />
              {crypto.supplyCorfirmed ? 'Verified' : 'Unverified'} supply
            </OverviewSupplyVerified>
            <DetailsTooltip
              totalSupply={crypto.supplyTotal}
              circulatingSupply={crypto.supplyCirculating}
            />
          </OverviewInfoInner>
        </OverviewInfo>
      </Overview>
      {data.map((item) => (
        <Wrapper key={item.id}>
          <WrapperInner>
            <span>{item.title}</span>
            <Tooltip item={item} />
          </WrapperInner>
          <p>{item.value}</p>
        </Wrapper>
      ))}
    </Container>
  );
};

export default CryptoSupply;
