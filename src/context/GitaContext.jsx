import { createContext, useState } from "react";

export const GitaContext =createContext();

export default function GitaContextProvider({children}){
    const [id,setId]=useState("");
    const [chapter,setChapter]=useState(0);//this is the default value
    const [verse,setVerse]=useState(0);//this is the default value
    const [slok,setSlok]=useState("");
    const [translation,setTranslation]=useState("")
    const [prabhupad,setPrabhupad]=useState("");
    const [chinmay,setChinmay]=useState("");

    const val={
        id,
        setId,
        chapter,
        setChapter,
        verse,
        setVerse,
        slok,
        setSlok,
        translation,
        setTranslation,
        prabhupad,
        setPrabhupad,
        chinmay,
        setChinmay,
        gita,
    }

    async function gita(chapter=0,verse=0){
        const url=`https://vedicscriptures.github.io/slok/${chapter}/${verse}`;
        try{
            const res= await fetch(url);
            const output = await res.json();
            console.log(output);
            setId(output._id);
            setSlok(output.slok);
            setTranslation(output.transliteration);
            setPrabhupad(output.prabhu);
            setChinmay(output.chinmay);
        }catch(error){
            console.log("there is an error",error);//err pelam so ebar sob khali kore debo
            setId("");
            setSlok("");
            setTranslation("");
            setPrabhupad("");
            setChinmay("");
        }
    }


    return <GitaContext.Provider value={val}>
        {children}
    </GitaContext.Provider>
}