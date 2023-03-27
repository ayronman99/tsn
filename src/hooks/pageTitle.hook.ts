import { useEffect } from "react";


const pageTitle = (title: string) => {
    
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = title;
    }, [title]);
};

export default pageTitle;