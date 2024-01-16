import Jasmat from "./images/jasmat.webp";
import pokeStore from "./images/PokeStore.webp";
import AGnda from "./images/AG-nda.webp";
type itemData = {
  title: string;
  projectsList: Array<itemProjectList>;
};

type itemProjectList = {
  name: string;
  id: number;
  linkGH: string;
  details: string;
  dateCreated: string;
  linkPage?: string;
  imgURL: any;
  typeProject: string;
  FW_list: Array<string>
};

const Data: Array<itemData> = [
  {
    title: "Websites",
    projectsList: [
      {
        name: "PokeStore",
        id: 0,
        linkGH: "https://github.com/WSenjuW/PokeStore",
        details:
          "This was a project as a prototype of a shopping page, it was used at the time to implement new knowledge. Its biggest problem is the loading part, since the api used does not present the data in the most optimal way for this website, so we requested all the data and restructured it to our liking.",
        dateCreated: "24/12/22",
        linkPage: "https://poke-store-git-main-wsenjuw.vercel.app/",
        typeProject: "project",
        imgURL: pokeStore,
        FW_list:["React"]
        
      },
      {
        name: "Jasmat",
        id: 1,
        linkGH: "https://github.com/WSenjuW/Jasmat",
        details:
          "This is the website of my first client, it is from one of the best cleaning company in Uruguay, it was made with javascript, html5 and css, it is a page with good loading times, something I like about the company is that it offers interesting and attractive ideas.",
        dateCreated: "4/11/22",
        linkPage: "https://www.jasmat.net/",
        typeProject: "client",
        imgURL: Jasmat,
        FW_list:["HTML","JavaScript","Css"]
      },
    ],
  },
  {
    title: "Projects Mobile",
    projectsList: [
      {
        name: "AG-nda",
        id: 0,
        linkGH: "https://github.com/WSenjuW/AG-nda",
        details:
          "My first website with react native, it was a great challenge, the same that a very simple agenda, without many functionalities, so that it is only an agenda and the essence is not lost, it has to select language from the options in turn, it has a data save that works with a localStorage of a traditional browser",
        dateCreated: "1/2/23",
        typeProject: "project",
        imgURL: AGnda,
        FW_list:["EXPO","Android"]
      },
    ],
  },
  {
    title: "illustrations",
    projectsList: [],
  },
  {
    title: "Animations",
    projectsList: [],
  },
];

export { Data };
export type { itemProjectList, itemData };
