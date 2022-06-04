import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
// const demoImage = 'https://images.unsplash.com/photo-1624996379671-b4d0837e45cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=90&q=100';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  console.log({ cryptoNews })

  const { data } = useGetCryptosQuery(100);

  // const globalNews = cryptoNews?.[0];
  if (!cryptoNews?.[0]) return 'Loading.. ';

  return (
    <Row gutter={[24, 24]}>

       {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((coins) => <Option value={coins.name}>{coins.name}</Option>)}
          </Select>
        </Col>
      )}



      {cryptoNews.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                {/* <Title className="news-title" level={4}>{news.title}</Title> */}
                <Title className="news-title" level={4}>{news.title.length > 10 ? `${news.title.substring(0, 60)}..` : news.title}</Title>
                <img src={demoImage} alt="news" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 120)}...` : news.description}</p>
              <p hoverable style={{color:"blue"}}>{news.source}</p>

              <div className="provider-container">
                <div>
                <Avatar src={news.tags[0]?.icon || demoImage} alt="" />
                <Text className="provider-name">{news.tags[0]?.name}</Text>
                </div>
                <p style={{color:"grey", fontSize:"12px"}}>{news.date}</p>
              </div>

            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News