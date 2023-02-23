import { useRouter } from "vue-router";

const router = useRouter();
const goPage = (pagename: string) => {
    router.push({
        name: pagename,
    });
}

export default goPage