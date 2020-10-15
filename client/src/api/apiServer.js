import axios from 'axios'

export default axios.create({
    baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
    headers: {
        'x-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RpbmciLCJpYXQiOjE2MDI1NzgwMDUsImV4cCI6MTYwMjU3ODAzNX0.yS3UsVJWclKrm8YsZeZlr890cx6d47juWZLgHjcc2yQ',
    },
})