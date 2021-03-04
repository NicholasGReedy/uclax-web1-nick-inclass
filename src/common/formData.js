export const contactFields = [
    {
        id: 'email',
        label: 'Email',
        value: '',
        type: 'text',
        sample: 'george@curious.com',
        validation: ['req', 'email'],
    },
    {
        id: 'message',
        label: 'Message',
        value: '',
        type: 'textarea',
        sample: '132456',
        validation: ['req'],
    },
];

export const loginFields = [
    {
        id: 'username',
        label: 'Username (Email)',
        value: '',
        type: 'text',
        sample: 'meatch@me.com',
        validation: ['req', 'email'],
    },
    {
        id: 'password',
        label: 'Password',
        value: '',
        type: 'password',
        sample: '132456',
        validation: ['req', { min: 3 }, { max: 12 } ],
    },
];

export const getField = (id, fields) => {
    return fields.find((f) => f.id === id);
}
