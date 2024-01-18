import { Alert, Box, Button, Card, CircularProgress, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { sendEmail, sendEmailMock } from "../api/emailApi";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [sendResult, setSendResult] = useState<{
        result: "idle" | "success" | "error";
        message: string;
    }>({ result: "idle", message: "" });

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setSending(true);
            // await sendEmail(name, email, message);
            await sendEmailMock(name, email, message, "success");
            setSendResult({ result: "success", message: "The email was sent" });
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            setSendResult({ result: "error", message: "An error ocurred, please try again" });
        } finally {
            setSending(false);
        }
    };

    useEffect(() => {
        const id = setTimeout(() => {
            setSendResult({ result: "idle", message: "" });
        }, 2000);
        return () => {
            clearTimeout(id);
        };
    }, [sendResult]);

    return (
        <form onSubmit={submitHandler}>
            <Card sx={{ p: 3 }}>
                {sendResult.result !== "idle" && (
                    <Alert severity={sendResult.result}>{sendResult.message}</Alert>
                )}
                <Typography variant="h5" p={3} sx={{ textAlign: "center" }}>
                    Contact Information
                </Typography>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    required
                    placeholder="Who I'm talking to"
                    fullWidth
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <TextField
                    type="email"
                    id="mail"
                    label="Email"
                    variant="outlined"
                    required
                    placeholder="How will I contact you"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <TextField
                    id="content"
                    label="Message"
                    placeholder="Lets talk"
                    multiline
                    fullWidth
                    rows={4}
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />
                <Box display="flex" flexDirection="row" sx={{ mt: 2 }} columnGap={3}>
                    <Button type="submit" variant="contained" disabled={sending ? true : false}>
                        Send
                    </Button>
                    {sending && <CircularProgress />}
                </Box>
            </Card>
        </form>
    );
};

export default ContactForm;
