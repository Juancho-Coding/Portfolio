const baseUrl = "localhost:1234";

// TODO make the adjustments to email server api

export const sendEmail = async (name: string, email: string, message: string) => {
    const response = await fetch(`${baseUrl}/api/v1/sendEmail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
    });
    if (!response.ok) {
        throw new Error("Unable to contact mail server");
    }
    const data = await response.json();
    return data;
};

export const sendEmailMock = async (
    _name: string,
    _email: string,
    _message: string,
    expected: "success" | "error"
) => {
    const response = await new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
            if (expected === "success") resolve(true);
            else {
                reject(new Error("Unable to contact mail server"));
            }
        }, 2000);
    });
    return response;
};
