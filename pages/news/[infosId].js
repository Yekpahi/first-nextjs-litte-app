//our-domain.com/
import { useRouter } from 'next/router'
function InfosPage() {
  const router = useRouter();

  const infosId = router.query.infosId;

    return <h1>Here the Infos Page</h1>
  }
  
  export default InfosPage;