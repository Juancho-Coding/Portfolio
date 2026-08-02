import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

const ContactForm = () => {
  const { t } = useTranslation(['contact', 'common'])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState<{
    result: 'idle' | 'success' | 'error'
    message: string
  }>({ result: 'idle', message: '' })
  const form = useRef<HTMLFormElement | null>(null)
  const small = useMediaQuery('(max-width: 900px)')

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      if (form.current === null) return
      setSending(true)
      await emailjs.sendForm(
        'service_jzwdzkm',
        'template_pyhihqd',
        form.current,
        {
          publicKey: '3-DL4JESDBH-eSy7s',
        }
      )
      console.log('SUCCESS!')
      setSendResult({ result: 'success', message: 'The email was sent' })
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.log('FAILED...', error)
      setSendResult({
        result: 'error',
        message: 'An error ocurred, please try again',
      })
    } finally {
      setSending(false)
    }
  }

  useEffect(() => {
    const id = setTimeout(() => {
      setSendResult({ result: 'idle', message: '' })
    }, 2000)
    return () => {
      clearTimeout(id)
    }
  }, [sendResult])

  return (
    <form ref={form} onSubmit={submitHandler}>
      <Card sx={{ p: 3 }}>
        {sendResult.result !== 'idle' && (
          <Alert severity={sendResult.result}>{sendResult.message}</Alert>
        )}
        <Typography variant="h5" p={3} sx={{ textAlign: 'center' }}>
          {t('title')}
        </Typography>
        <TextField
          id="user_name"
          name="name"
          label={t('name')}
          variant="outlined"
          size={small ? 'small' : 'medium'}
          required
          placeholder={t('name_hint')}
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <TextField
          type="email"
          name="email"
          id="email"
          label={t('mail')}
          variant="outlined"
          size={small ? 'small' : 'medium'}
          required
          placeholder={t('mail_hint')}
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <TextField
          id="message"
          name="message"
          label={t('message')}
          placeholder={t('message_hint')}
          size={small ? 'small' : 'medium'}
          multiline
          fullWidth
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <Box display="flex" flexDirection="row" sx={{ mt: 2 }} columnGap={3}>
          <Button
            type="submit"
            variant="contained"
            disabled={sending ? true : false}
            sx={{ textTransform: 'none' }}
          >
            {t('send')}
          </Button>
          {sending && <CircularProgress />}
        </Box>
        <Typography sx={{ fontSize: '0.8rem', fontStyle: 'italic' }}>
          {t('reply')}
        </Typography>
      </Card>
    </form>
  )
}

export default ContactForm
