import '../styles/globals.css'
import '../styles/globals.scss'
import React from 'react';
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <>
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-header__logo">
          <a href="#" className="govuk-header__link govuk-header__link--homepage">
            <span className="govuk-header__logotype">
              <img src="/assets/images/govuk-logotype-crown.png" className="govuk-header__logotype-crown-fallback-image" width="36" height="32"/>
              <span className="govuk-header__logotype-text">
                GOV.UK
              </span>
            </span>
          </a>
        </div>
        <div className="govuk-header__content">
          <a href="/"
            className="govuk-header__link govuk-header__link--service-name">
            Housing Repairs Online
          </a>
        </div>
      </div>
    </header>

    <div className="govuk-width-container">
      <div className="govuk-phase-banner" data-testid="phase-banner">
        <p className="govuk-phase-banner__content">
          <strong className="govuk-tag govuk-phase-banner__content__tag"  data-testid="phase-banner">
            Beta
          </strong>
          <span className="govuk-phase-banner__text">
             This service is still in beta
          </span>
        </p>
      </div>
      <main className="govuk-main-wrapper">
        <Component {...pageProps} />
      </main>
    </div>
    <footer className="govuk-footer " role="contentinfo">
      <div className="govuk-width-container ">
        <div className="govuk-footer__meta">
          <div
            className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            <svg aria-hidden="true" focusable="false"
              className="govuk-footer__licence-logo"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 483.2 195.7"
              height="17" width="41">
              <path fill="currentColor"
                d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"/>
            </svg>
            <span className="govuk-footer__licence-description">
          All content is available under the
              <a className="govuk-footer__link"
                href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                rel="license">Open Government Licence v3.0</a>, except where otherwise stated
            </span>
          </div>
          <div className="govuk-footer__meta-item">
            <a className="govuk-footer__link govuk-footer__copyright-logo"
              href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">©
              Crown copyright</a>
          </div>
        </div>
      </div>
    </footer>
  </>
}
App.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}
export default MyApp
