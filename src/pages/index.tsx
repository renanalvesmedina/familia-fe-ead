import React from 'react'
import PainelAluno from '@components/PainelAluno'

import { withSSRAuth } from '@hocs/with-ssr-auth'
import { NextPage } from 'next'

const Home: NextPage = () => <PainelAluno />

export default Home

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
