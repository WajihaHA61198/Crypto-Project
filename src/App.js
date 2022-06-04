import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'
import './App.css';

function App() {
    return (
        <div className='app'>
            {/* 1 */}
            <div className="navbar">
                <Navbar />
            </div>
            {/* 2 */}
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path='/'>
                                <Homepage />
                            </Route>
                            <Route exact path='/exchange'>
                                <Exchanges />
                            </Route>
                            <Route exact path='/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path='/crypto/:coinid'>
                                <CryptoDetails />
                            </Route>
                            <Route exact path='/news'>
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                {/* 3 */}
                <div className="footer">
                    <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>Copyright © 2021
                        <Link to="/">
                            Cryptoverse Inc.
                        </Link> <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchange">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
