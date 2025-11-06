import axios from 'axios';
export const FORM_ID = process.env.NEXT_PUBLIC_FormSper;

export const formSpare = async (body: string  ) => {
    return await axios.post(`https://formspree.io/f/${FORM_ID}`,body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  )

 }