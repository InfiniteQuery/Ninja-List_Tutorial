import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";
import styles from '../styles/Home.module.css'
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        console.log('use effect ran')
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>We could not afford a dinosaur</h2>
            <p>go back to the <Link href="/"><a>Homepage</a></Link></p>

        </div>
     );
}
 
export default NotFound ;