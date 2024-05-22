import { createContext } from "react";
import fetchPexelImages from "@/lib/fetch";
import { Images } from "@/types/Image";

const GalleryContext = createContext({})

type ActionType = {
    type: string
}

const loadMore = (state: Images, action: ActionType) => {
    switch(action.type){
        case 'LOAD_MORE':
            fetchPexelImages('')
    }
}

export default function GalleryProvider({children}:  Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <GalleryContext.Provider value={{message: 'goog'}}>
        { children }
    </GalleryContext.Provider>
  )
}
