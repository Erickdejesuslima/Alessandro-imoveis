import axios from 'axios'
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function Galeria() {
  const [feedList, setFeedList] = useState([]); // Correção na inicialização do estado

  async function getGaleria() {
    const fields = "media_url,media_type,permalink,CAROUSEL_ALBUM";
    const token = 'IGQWRNV2V2cEg1Qi1SazdQZATJfcE8xOFBnaGdmck9sVV90eDd0ckZAFWTBiQ1JXY2tFS19Vb1pkYTRVM1BzQmRZAR3ZARLXE0U1NCZAEpHb2M5djRtZATVMVF9GQTBCZAG03THBoWkpGU1gxRkVvT2djRFZAWMXVCZAmZAxeUEZD'; 
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

   
      const response = await axios.get(url); // Adicionado o tipo genérico para a resposta do axios
      setFeedList(response.data.data);
    
  }

  useEffect(() => {
    getGaleria();
  }, []);

  return (
    
<section className={styles.container}>
  {feedList.map(item => (
    <a key={item.id} href={item.permalink} target="_blank" className={styles.item}>
      {item.media_type === "CAROUSEL_ALBUM" || item.media_type === "IMAGE" ? (
        <img src={item.media_url} />
      ) : (
        <video controls>
          <source src={item.media_url}></source>
        </video>
      )}
    </a>
  ))}
</section>
  )
}