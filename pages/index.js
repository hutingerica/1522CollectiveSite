import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllFilesFrontMatter } from '../lib/mdx'

import styled from 'styled-components'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('project')

  return { props: { posts } }
}
export default function Home({posts}) {
  return (
    <Layout home>
      <Head>
        <title>Erica Huang</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <ListTitle><p>Selected Projects and Experiements</p></ListTitle>
        <Wrapper>
          {posts.map(({ slug, tag, title }) => (
            <ListItem key={slug}>
              <Link href={`/project/${slug}`}>
                <ItemLink>
                      <ItemTitle>{title}</ItemTitle>
                      <ItemTag>{tag}</ItemTag>
                </ItemLink>
              </Link>
            </ListItem>
          ))}
        </Wrapper>
      </main>

      <footer>
          Powered by{' '}
      </footer>
    </Layout>
)}

const ListTitle = styled.div`
  p{
    letter-spacing: -0.05rem;
    line-height:1.2;
    margin: 0.5rem 0;
    color: hsl(0deg 0% 60% / 100%);
  }
`
const Wrapper = styled.ul`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
const ListItem = styled.li`
  width: 100%;
  margin: 0;
`
const ItemLink = styled.a`
  color: hsl(222deg 22% 22% / 100%);
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: -1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  &:hover {
    text-decoration: none;
    background-color: hsl(0deg 0% 100% / 50%);
  }
  &:hover p {
    color: hsl(47deg 94% 43% / 60%);
    border-color: hsl(47deg 94% 45% / 60%);
  }
`
const ItemTitle = styled.p`
    letter-spacing: -0.05rem;
    font-size: 1.5rem;
    margin: 0;
    font-variation-settings: 'wght' 650;
`
const ItemTag = styled.p`
    letter-spacing: -0.05rem;
    font-size: .8rem;
    padding: 0.1rem 0.5rem;
    background-color: hsl(0deg 0% 100% / 80%);
    color: hsl(47deg 94% 43% / 100%);
    border: 1px solid hsl(47deg 94% 45% / 100%);
    border-radius: 7px;
    font-variation-settings: 'wght' 450;

`