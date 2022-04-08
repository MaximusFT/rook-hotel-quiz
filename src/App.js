import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Input, Divider, List, Typography, Layout, Row, Col } from 'antd';

import { useGetRhymeMutation } from './rhyme';

import useDebounce from './Debounce';

import 'antd/dist/antd.css';
import './styles.css';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

const serializeFormQuery = (searchParams, newParam) => {
  const data = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const pair of searchParams.entries()) {
    data[pair[0]] = pair[1];
  }
  if (newParam) {
    return { ...data, ...newParam };
  }
  return data;
};

const UserInput = () => {
  // const [word, setWord] = useState(null);
  const [searchRhyme, { isLoading }] = useGetRhymeMutation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentRhyme = searchParams.get('rhyme');
  const [searchTerm, setSearchTerm] = useState(currentRhyme);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  console.log('%c@-> isLoading', 'background: hsl(251,100%,35%); color: #fff', isLoading); // prettier-ignore

  const handleSearch = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    if (currentRhyme?.length > 3) {
      searchRhyme({ rel_rhy: currentRhyme });
    }
  }, []);

  useEffect(() => {
    if (
      debouncedSearchTerm !== null &&
      debouncedSearchTerm?.length > 3 &&
      debouncedSearchTerm !== currentRhyme
    ) {
      setSearchParams(serializeFormQuery(searchParams, { rhyme: debouncedSearchTerm }));
      searchRhyme({ rel_rhy: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm]);

  return (
    <Search
      placeholder="Find your rhyme"
      enterButton="Search"
      size="large"
      onChange={handleSearch}
      loading={isLoading}
    />
  );
};

const RhymeOutput = () => {
  const [searchParams] = useSearchParams();
  const rhymeList = useSelector(state => state.rhyme[searchParams.get('rhyme')]);

  console.log('%c@-> rhymeList', 'background: hsl(15,100%,35%); color: #fff', rhymeList); // prettier-ignore

  return (
    <>
      <Divider orientation="left">Current rhyme</Divider>
      <List
        bordered
        size="small"
        dataSource={rhymeList}
        renderItem={item => (
          <List.Item key={item.word}>
            <Typography.Paragraph copyable>{item.word}</Typography.Paragraph>
          </List.Item>
        )}
      />
    </>
  );
};

const RhymeHistory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rhymeList = useSelector(state => Object.keys(state.rhyme));

  console.log('%c@-> rhymeList', 'background: hsl(15,100%,35%); color: #fff', rhymeList); // prettier-ignore

  const handlerChangeRhyme = rhyme => {
    setSearchParams(serializeFormQuery(searchParams, { rhyme }));
  };

  return (
    <>
      <Divider orientation="left">Hystory</Divider>
      <List
        bordered
        dataSource={rhymeList}
        renderItem={item => (
          <List.Item key={item}>
            <Typography.Text onClick={() => handlerChangeRhyme(item)}>{item}</Typography.Text>
          </List.Item>
        )}
      />
    </>
  );
};

export default function App() {
  return (
    <Layout>
      <Content>
        <Row justify="center" gutter={16}>
          <Col>
            <h1>Find your rhyme!</h1>
            <UserInput />
            <RhymeOutput />
          </Col>
          <Col>
            <RhymeHistory />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
