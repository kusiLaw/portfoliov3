import axios from 'axios';

const FORM_ID = process.env.FormSper;

export const formSpare = async (body: string  ) => {
    return await axios.post(`https://formspree.io/f/${FORM_ID}`,body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )

 }