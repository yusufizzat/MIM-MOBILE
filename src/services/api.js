const BASE_URL = 'https://equran.id';

export const getSurat = async () => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const response = await fetch(`${BASE_URL}/api/v2/surat`, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const getDetail = async (id) => {
    try{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          const response = await fetch(`https://equran.id/api/v2/surat/${id}`, requestOptions)
          const data = await response.json()
          return(data)
            

    }catch(error) {
        console.error('Error lmskasncalxmz,er',error);
    }
      
}