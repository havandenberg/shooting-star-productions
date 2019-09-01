import * as emailjs from 'emailjs-com';
import { Formik, FormikActions, FormikProps } from 'formik';
import * as R from 'ramda';
import * as React from 'react';
import { PropagateLoader } from 'react-spinners';
import * as Yup from 'yup';
import a from '../ui/action';
import i from '../ui/input';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';
import { isSmall, isTabletUp, scrollToId } from '../ui/utils';
import { ASSETS_PATH } from '../utils/constants';
import ContactLinks from './contact-links';
import withScroll from './hoc/with-scroll';
import Stars from './stars';

const CONTACT_FORM_ID = 'contact-form';

interface Fields {
  email: string;
  message: string;
  name: string;
  subject: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name required'),
  message: Yup.string().required('Message required'),
  subject: Yup.string().required('Subject required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
});

const Contact = () => {
  const form = (
    <Formik
      initialStatus={''}
      initialValues={{ email: '', message: '', name: '', subject: '' }}
      onReset={(values: Fields, { setStatus }: FormikActions<Fields>) => {
        setStatus('');
      }}
      onSubmit={(
        values: Fields,
        { setStatus, setSubmitting }: FormikActions<Fields>,
      ) => {
        if (process.env.REACT_APP_EMAILJS_KEY) {
          emailjs
            .send(
              'halsey_vandenberg',
              'shooting-star-contact-form',
              {
                from_name: values.name,
                message: values.message,
                reply_to: values.email,
                subject: values.subject,
              },
              process.env.REACT_APP_EMAILJS_KEY,
            )
            .then(() => {
              scrollToId(CONTACT_FORM_ID);
              setStatus('completed');
              setSubmitting(false);
            })
            .catch(() => {
              scrollToId(CONTACT_FORM_ID);
              setStatus('failed');
              setSubmitting(false);
            });
        }
      }}
      validationSchema={validationSchema}>
      {(props: FormikProps<Fields>) => {
        const {
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
          resetForm,
          status,
          touched,
          values,
        } = props;
        const handleReset = () => {
          resetForm();
          scrollToId(CONTACT_FORM_ID);
        };
        return (
          <l.Div id="contact-form">
            {R.equals(status, 'completed') && (
              <l.FlexColumn>
                <ty.Text center color={th.colors.status.success}>
                  Success!
                </ty.Text>
                <l.Div height={th.spacing.md} />
                <a.ButtonSecondary onClick={handleReset}>
                  Reset
                </a.ButtonSecondary>
              </l.FlexColumn>
            )}
            {R.equals(status, 'failed') && (
              <l.FlexColumn>
                <ty.Text center color={th.colors.status.failure}>
                  Submission failed, please try again later.
                </ty.Text>
                <l.Div height={th.spacing.md} />
                <a.ButtonSecondary onClick={handleReset}>
                  Reset
                </a.ButtonSecondary>
              </l.FlexColumn>
            )}
            {R.equals(status, '') && (
              <form
                onSubmit={(e?: React.FormEvent<HTMLFormElement>) => {
                  scrollToId(CONTACT_FORM_ID);
                  handleSubmit(e);
                }}>
                <ty.SmallText
                  as="label"
                  color={th.colors.brand.red}
                  htmlFor="name">
                  Name<l.Primary>*</l.Primary>:
                </ty.SmallText>
                <l.Div height={th.spacing.sm} />
                <i.TextInput
                  autoFocus
                  borderColor={th.colors.brand.red}
                  error={touched.name && errors.name}
                  id="name"
                  onChange={handleChange}
                  value={values.name}
                  width={['90%', undefined]}
                />
                <l.Div height={th.spacing.lg} />
                <ty.SmallText
                  as="label"
                  color={th.colors.brand.blue}
                  htmlFor="email">
                  Email<l.Primary>*</l.Primary>:
                </ty.SmallText>
                <l.Div height={th.spacing.sm} />
                <i.TextInput
                  borderColor={th.colors.brand.blue}
                  error={touched.email && errors.email}
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  width={['90%', undefined]}
                />
                <l.Div height={th.spacing.lg} />
                <ty.SmallText
                  as="label"
                  color={th.colors.brand.green}
                  htmlFor="subject">
                  Subject<l.Primary>*</l.Primary>:
                </ty.SmallText>
                <l.Div height={th.spacing.sm} />
                <i.TextInput
                  borderColor={th.colors.brand.green}
                  error={touched.subject && errors.subject}
                  id="subject"
                  onChange={handleChange}
                  value={values.subject}
                  width={['90%', undefined]}
                />
                <l.Div height={th.spacing.lg} />
                <ty.SmallText
                  as="label"
                  color={th.colors.brand.purple}
                  htmlFor="message">
                  Message<l.Primary>*</l.Primary>:
                </ty.SmallText>
                <l.Div height={th.spacing.sm} />
                <i.TextArea
                  borderColor={th.colors.brand.purple}
                  error={touched.message && errors.message}
                  height={150}
                  id="message"
                  onChange={handleChange}
                  value={values.message}
                  width={['90%', undefined]}
                />
                <l.Div height={th.spacing.lg} />
                <l.FlexColumn>
                  {isSubmitting ? (
                    <PropagateLoader
                      sizeUnit="px"
                      size={30}
                      color={th.colors.brand.primary}
                    />
                  ) : (
                    <a.ButtonPrimary>Submit</a.ButtonPrimary>
                  )}
                </l.FlexColumn>
              </form>
            )}
          </l.Div>
        );
      }}
    </Formik>
  );
  return (
    <l.FlexColumn mx="auto" my={th.spacing.lg} width={['90%', '90%', '100%']}>
      <ty.H2 fontSize={th.fontSizes.h3}>
        <l.Primary>Ready to Partner?</l.Primary>
      </ty.H2>
      <l.Div height={[th.spacing.lg, th.spacing.xl]} />
      <l.PageContent>
        <l.FlexBetween alignStart columnOnMobile>
          <l.FlexColumn alignStart={isSmall()} width={['100%', '45%']}>
            <ty.Text center mb={th.spacing.md}>
              We want to learn more about you!
            </ty.Text>
            <ty.Text center>
              Please fill out our contact form and we will follow up.
            </ty.Text>
            {isSmall() && (
              <>
                <l.Div height={th.spacing.lg} />
                <l.Div width="100%">{form}</l.Div>
              </>
            )}
            <l.Div height={th.spacing.xl} />
            <ContactLinks />
          </l.FlexColumn>
          {isTabletUp() && <l.Div width="45%">{form}</l.Div>}
        </l.FlexBetween>
        <l.Div height={[th.spacing.xl, th.spacing.xl, th.spacing.xxl]} />
        <Stars />
        <l.Div height={[th.spacing.xl, th.spacing.xl, th.spacing.xxl]} />
        <l.FlexBetween columnOnMobile>
          <l.FlexColumn mb={[th.spacing.lg, 0]} width={['100%', '45%']}>
            <l.Img
              height={[th.sizes.xxxl, 'auto']}
              src={`${ASSETS_PATH}/nic.png`}
              width={['auto', '100%']}
            />
          </l.FlexColumn>
          <l.FlexColumn width={['100%', '45%']}>
            <ty.LargeText center color={th.colors.brand.primary}>
              Hi, I'm Nicolas!
            </ty.LargeText>
            <l.Div height={th.spacing.lg} />
            <ty.SmallText mb={th.spacing.md}>
              I started Shooting Star Productions. Nicolas Andrews is a
              freelance videographer and still photographer based in the
              Philadelphia area.
            </ty.SmallText>
            <ty.SmallText>
              In the last few years, Dave has worked on a variety of projects,
              mostly for nonprofit and arts organizations. He also shot second
              camera for Danny’s Guitar Shop, a television program that aired on
              WHYY. Currently, Dave works on video projects for McCarter Theatre
              Center, The Pew Center for Arts & Heritage, Visit Philadelphia,
              The Food Trust, Al-Bustan Seeds of Culture, and Mural Arts
              Philadelphia. Additionally, Dave co-produces a monthly arts video
              feature for JerseyArts.com.
            </ty.SmallText>
          </l.FlexColumn>
        </l.FlexBetween>
      </l.PageContent>
      <l.Div height={[th.spacing.xl, th.spacing.xl, th.spacing.xxl]} />
    </l.FlexColumn>
  );
};

export default withScroll(Contact);
