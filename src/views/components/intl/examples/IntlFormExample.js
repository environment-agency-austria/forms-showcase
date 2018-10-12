import React from 'react';
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';
import deLocaleData from 'react-intl/locale-data/de';
import { IntlForm } from 'react-ocean-forms-react-intl';
import { Button } from 'reactstrap';
import { validators, FormText } from 'react-ocean-forms';
import { Input, FormButton } from 'react-ocean-forms-bootstrap';

class Example extends React.Component {
  state = { locale: 'en' };
  messages = {
    en: {
      lblName: 'First name',
      lblMail: 'E-Mail',
      submit: 'Submit',
      reset: 'Reset',
      customText: 'My example text',
      ojs_field_required: 'This field is required!',
      ojs_error_required: 'This field is required!',
    },
    de: {
      lblName: 'Vorname',
      lblMail: 'E-Mail',
      submit: 'Senden',
      reset: 'Zurücksetzen',
      customText: 'Mein Beispieltext',
      ojs_field_required: 'Pflichtfeld!',
      ojs_error_required: 'Dieses Feld muss ausgefüllt werden!',
    },
  };

  render() {
    const { locale } = this.state;

    addLocaleData(deLocaleData);

    return (
      <IntlProvider locale={locale} messages={this.messages[locale]}>
        <IntlForm className="demo">
          <p>
            <Button
              className="mr-2"
              onClick={() => this.setState({ locale: 'en' })}
            >
              English
            </Button>
            <Button
              className="mr-2"
              onClick={() => this.setState({ locale: 'de' })}
            >
              German
            </Button>
          </p>

          <Input
            name="name"
            label="lblName"
            validators={[validators.required]}
          />
          <Input
            name="mail"
            label="lblMail"
            />

          <p>
            <FormText text="customText" />
          </p>

          <FormButton color="primary">
            <FormattedMessage id="submit" />
          </FormButton>
          <FormButton type="reset">
            <FormattedMessage id="reset" />
          </FormButton>
        </IntlForm>
      </IntlProvider>
    );
  }
}

export default Example;
