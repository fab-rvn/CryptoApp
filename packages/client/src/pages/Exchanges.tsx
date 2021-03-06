import getExchanges from 'api/getExchanges';
import { Dashboard, ExchangeCard, Loader, LoadError } from 'components';
import { ExchangesMapped } from 'models/Exchanges';
import React from 'react';
import { useQuery } from 'react-query';
import { GridLayout, MainInnerLayout } from 'styles/Layout';

const Exchanges: React.VFC = () => {
  const { data, error, isError, isLoading } = useQuery<
    ExchangesMapped[],
    Error
  >('exchanges', getExchanges);

  return (
    <Dashboard>
      <MainInnerLayout>
        <h2>Top 100 exchanges platforms</h2>
        <GridLayout>
          {isLoading && <Loader />}
          {isError && <LoadError error={error.message} />}
          {data &&
            data.map((exchange) => (
              <ExchangeCard key={exchange.id} {...exchange} />
            ))}
        </GridLayout>
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Exchanges;
