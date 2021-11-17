import WarningText from '../compoments/warningText';
import Details from '../compoments/details';
import TextLink from '../compoments/textLink';
import React from 'react';
import Link from 'next/link'

export default function Home() {
  const contactDetailsPageLink = (
    <TextLink href="https://www.lincoln.gov.uk/contact-1/get-touch" target="_blank">
      contact details page
    </TextLink>
  )

  return (
    <div className="govuk-grid-row govuk-body-m">
      <div className="govuk-grid-column-two-thirds">
        <h1 className={'govuk-heading-xl'}>Request a repair</h1>
        <h2 className={'govuk-heading-m'}>Before you start</h2>
        <WarningText  testid="landing-page-report-limit-warning" className="govuk-!-margin-top-4">
          This service can only be used to request one repair at a time to a council property.
        </WarningText>
        <p>
          To request a repair for a <strong>leaseholder</strong>, please see our <TextLink href="https://www.lincoln.gov.uk/council-housing/council-leaseholders/3">leaseholder contact details page </TextLink>.
        </p>
        <p>
          To request a repair for a <strong>communal area</strong>, please see customer services contact <TextLink href="https://www.lincoln.gov.uk/contact-1/get-touch">details page</TextLink>.
        </p>
        <Details summary="Which areas are communal?" className="govuk-!-margin-top-6" data-testid="landing-page-communal-prompt">
          <div data-testid='landing-page-communal-info'>
            <p>
              Communal repairs are usually in areas that people share.
            </p>
            <p>
              They can include:
            </p>
            <ul>
              <li>repairs to door entry systems</li>
              <li>lock repairs to communal doors</li>
              <li>lighting repairs to shared areas</li>
              <li>glazing repairs to shared doors or stairway windows</li>
              <li>roof and gutter repairs</li>
              <li>structure and external walls to your block</li>
            </ul>
          </div>
        </Details>
        <br/>
        <WarningText testid="landing-page-gas-warning" className="govuk-!-margin-top-4">
            If you suspect you have a gas leak, you must report it immediately
            to the Gas Emergency Service on 0800 111 999 or via textphone
            (minicom) on 0800 371 787
        </WarningText>
        <WarningText testid="landing-page-emergency-warning"  className="govuk-!-margin-top-4">
          For other emergency repairs, please see customer services <TextLink href="https://www.lincoln.gov.uk/contact-1/get-touch">contact details page</TextLink>.
        </WarningText>
        <Details summary="What is an emergency?" className="govuk-!-margin-top-6" testid="landing-page-emergency-prompt">
          <div data-testid='landing-page-emergency-info'>
            <p>
              An emergency is defined as something which could cause danger to
              someone’s health or safety or cause serious damage and destruction
              to property.
            </p>
            <p>
              Emergency Out of Hours Repairs, please call <strong>01522 534747</strong>
            </p>
            <p>
              For emergencies in normal hours, please call <strong>01522 873333</strong>
            </p>
            <p>
              Opening times:
            </p>
            <ul>
              <li>Monday 9am - 5pm</li>
              <li>Tuesday 9am - 5pm</li>
              <li>Wednesday 9am - 4.30pm</li>
              <li>Thursday 10am - 5pm</li>
              <li>Friday 9am - 4.30pm</li>
            </ul>
          </div>
        </Details>
        <Link href="/report-repair/priority-list">
          <a role="button" draggable="false"
            className="govuk-button govuk-button--start"
            data-module="govuk-button">
              Start now
            <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
            </svg>
          </a>
        </Link>
      </div>
      <div className="govuk-grid-column-one-third">
        <h4>Related pages</h4>
        <ul listStyleType="none">
          <li>
            <TextLink href="#">Report a communal repair</TextLink>
          </li>
          <li>
            <TextLink href="#">Leaseholder repairs</TextLink>
          </li>
          <li>
            <TextLink href="#">Fix it yourself videos</TextLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
