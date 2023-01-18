
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios'

import { baseUrl } from '../public/baseUrl'

export interface Props {
  data: CareerINF
}

export interface CareerINF {
  career_id: number,
  start_date: String,
  end_date: String,
  title: String,
  langs: number[],
  langs_str: String[],
  contents: String[],
  github_link: any,
  site_link: any,
}

export default function Home({ data }: Props) {
  return (
    <>
      <div>{data.start_date}</div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axios.get(baseUrl + '/api-moyeo/career');
    return {
      props: { data: res.data.data },
    };
  } catch (err) {
    return {
      props: { 
        data: {
          career_id: 0,
          start_date: "",
          end_date: "",
          title: "",
          langs: [],
          langs_str: [],
          contents: [],
          github_link: "",
          site_link: "",
        }
      },
    };
  }
};