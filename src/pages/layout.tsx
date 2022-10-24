import { Layout } from 'antd';
import React from 'react';
import type { NextPage } from 'next'
import CreatePostComponent from '../modules/post/components/createPostComponent';
import PostComponent from '../modules/post/components/postComponent';

const { Header, Footer, Sider, Content } = Layout;

 const  LayoutContainer: NextPage = ()=>{
  return ( <>
    <Layout>
    <Header>Header</Header>
    <Layout>
      <Content>
        <CreatePostComponent/>
        <PostComponent/>
      </Content>
      <Sider>Sider</Sider>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
  </>)
}

export default LayoutContainer