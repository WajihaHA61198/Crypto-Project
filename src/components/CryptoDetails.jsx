import React from 'react';
// import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
// import millify from 'millify';
// import { Col, Row, Typography, Select } from 'antd';
// import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

// import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';

const CryptoDetails = () => {

  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  
  const { coinid }  = useParams();

  // {coinid}
  return <div> CryptoDetails {coinid} </div>;

};

export default CryptoDetails