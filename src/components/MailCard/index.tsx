/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from 'styled-components';
import { MdSend } from 'react-icons/md';
import { Container, EmailContainer } from './styles';
import Loading from '../Loading';
import { timeout } from '../../utils/tools/timeout';


const MailCard: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const [message, setMessage] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [loadingEmail, setLoadingEmail] = useState<boolean>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      await timeout(1500);

      const response = await axios.get('/.netlify/functions/api/email');
      const { data } = response;

      setMessage(data.msg);
      setLoading(false);
    }

    loadData();
  }, []);


  async function handleSendEmail() {
    setLoadingEmail(true);
    await axios.post('/.netlify/functions/api/email', {
      email,
    });

    await timeout(2300);
    setMessage('Your email has probably been sent, I guess...');
    setLoadingEmail(false);
  }

  function handleEmailInput(emailInput: string) {
    setEmail(emailInput);
  }

  return (
    <Container>
      {
      loading ? <Loading loadingType="loading" />
        : (
          loadingEmail ? <Loading loadingType="mailing" />
            : (
              <>
                <h2>{message}</h2>
                <EmailContainer>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{ color: colors.text }}
                    onChange={
                      (event: React.ChangeEvent<HTMLInputElement>) => handleEmailInput(event.target.value)
                    }
                  />
                  <MdSend size="30" color={colors.text} onClick={handleSendEmail} />
                </EmailContainer>
              </>
            )
        )
      }
    </Container>
  );
};

export default MailCard;
