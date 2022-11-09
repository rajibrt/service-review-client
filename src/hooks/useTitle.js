import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} || onClick Photography`;
    }, [title])

};

export default useTitle;
