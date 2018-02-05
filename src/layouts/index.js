import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../../semantic/dist/semantic.min.css'
import hyreLogo from '../images/hyreLogo.png';

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hyre IT"
      meta={[
        { name: 'description', content: 'The Website for Hyre IT Recruitment' },
        { name: 'keywords', content: 'Recruitment, IT, Hyre' },
      ]}
    >
      <link rel="icon"
            type="image/png"
            href={hyreLogo}/>
    </Helmet>
    <Header/>
    <div
      style={{
        margin: '100px auto 0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
